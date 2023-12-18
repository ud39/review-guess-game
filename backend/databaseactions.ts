import { PrismaClient, Review } from "@prisma/client";
import { Prisma } from "@prisma/client";
import {
  AppIdRequest,
  AppInfoResponse,
  GameNameRequest,
  ReviewsResponse,
} from "./steam_scraper";
import path from "path";
import { GrpcPromiseFactory, SteamServicePythonGrpc } from "./scraper";

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const packageDefinitionRec = protoLoader.loadSync(
  path.join(__dirname, "../reviews/proto/steam_scraper.proto"),
);
const steamScraperProto = grpc.loadPackageDefinition(packageDefinitionRec);
const steamScraperStub: SteamServicePythonGrpc =
  new steamScraperProto.scraper_steamreviews.SteamService(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure(),
  );

const grpcPromiseFactory = new GrpcPromiseFactory(steamScraperStub);
const getAppId = grpcPromiseFactory.createPromisifiedMethod("GetAppId");
const getReviews = grpcPromiseFactory.createPromisifiedMethod("GetReviews");

const prisma = new PrismaClient();

export async function selectReviews(
  gameTitle: string,
  numberOfReviews: number,
): Promise<Review[]> {
  try {
    const game = await prisma.game.findFirst({ where: { title: gameTitle } });
    if (!game)
      throw Error(
        `The game: ${gameTitle} is not in the database or don't exits'`,
      );

    const reviews = await prisma.review.findMany({
      where: { app_id: game.app_id },
      take: numberOfReviews,
    });

    console.log(reviews);
    return reviews;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function insertGameAndReviews(
  appInfoResp: AppInfoResponse,
  reviewsResp: ReviewsResponse,
): Promise<void> {
  try {
    const reviews = reviewsResp.review.map((review) => ({
      steam_id: Number(review.steamId),
      review: review.review,
      voted_up: review.votedUp,
      votes_up: 0,
      votes_funny: 0,
      playtime_forever: review.playtimeForever,
    }));

    console.log(`Inserting reviews for ${appInfoResp.title}`);
    console.log(reviews);

    await prisma.game.create({
      data: {
        app_id: Number(appInfoResp.appId),
        title: appInfoResp.title,
        reviews: {
          create: reviews,
        },
      },
    });
  } catch (error) {
    console.error(`Error in insertReviews: ${error}`);
    throw error;
  }
}

// Raw SQL because currently prisma doesn't support native insert on conflict
async function addReviews(
  appInfoResp: AppInfoResponse,
  reviewsResp: ReviewsResponse,
): Promise<void> {
  const values = reviewsResp.review.map((review) => ({
    steam_id: Number(review.steamId),
    review: review.review,
    voted_up: review.votedUp,
    votes_up: 0,
    votes_funny: 0,
    playtime_forever: review.playtimeForever,
  }));

  const result = await prisma.$executeRaw`INSERT INTO "Review" 
    (steam_id, app_id, review, voted_up, votes_up, votes_funny, playtime_forever) 
    VALUES ${Prisma.join(
      values.map(
        (exp) =>
          Prisma.sql`(${exp.steam_id}, 
           ${Number(appInfoResp.appId)}, 
           ${exp.review}, ${exp.voted_up}, 
           ${exp.votes_up}, ${exp.votes_funny}, 
           ${exp.playtime_forever})`,
      ),
    )}
    ON CONFLICT ("steam_id", "app_id") DO NOTHING`;
  console.log(result);
}

export async function insertGameWithReviews(
  gameNameRequest: GameNameRequest,
  appIdRequest: AppIdRequest,
) {
  const appInfo: Promise<AppInfoResponse> = getAppId(gameNameRequest);
  const reviews: Promise<ReviewsResponse> = getReviews(appIdRequest);

  try {
    const [appInfoResult, reviewsResult] = await Promise.allSettled([
      appInfo,
      reviews,
    ]);

    if (
      appInfoResult.status === "rejected" ||
      reviewsResult.status === "rejected"
    ) {
      throw new Error(
        `At least one promise was rejected. AppInfo: ${appInfoResult.status} Reviews: ${reviewsResult.status}`,
      );
    }

    await insertGameAndReviews(appInfoResult.value, reviewsResult.value);
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error in Promise.allSettled:", error);

    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function addNewReviews(
  gameNameRequest: GameNameRequest,
  appIdRequest: AppIdRequest,
) {
  const appInfo: Promise<AppInfoResponse> = getAppId(gameNameRequest);
  const reviews: Promise<ReviewsResponse> = getReviews(appIdRequest);

  try {
    const [appInfoResult, reviewsResult] = await Promise.allSettled([
      appInfo,
      reviews,
    ]);

    if (
      appInfoResult.status === "rejected" ||
      reviewsResult.status === "rejected"
    ) {
      throw new Error(
        `At least one promise was rejected. AppInfo: ${appInfoResult.status} Reviews: ${reviewsResult.status}`,
      );
    }
    await addReviews(appInfoResult.value, reviewsResult.value);
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error in Promise.allSettled:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
