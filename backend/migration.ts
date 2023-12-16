import { PrismaClient } from "@prisma/client";
import { AppInfoResponse, ReviewsResponse } from "./steam_scraper";

const prisma = new PrismaClient();

export async function insertReviews(
  appInfoResp: AppInfoResponse,
  reviewsResp: ReviewsResponse,
): Promise<void> {
  const reviews = reviewsResp.review.map((review) => ({
    steamId: Number(review.steamId),
    review: review.review,
    votedUp: review.votedUp,
    votesUp: review.votesUp,
    votesFunny: review.votesFunny,
    playtimeForever: review.playtimeForever,
  }));
  await prisma.game.create({
    data: {
      appId: Number(appInfoResp.appId),
      title: appInfoResp.title,
      reviews: {
        create: reviews, // Assuming reviews is an array of Review objects
      },
    },
  });

  const allGames = await prisma.game.findMany({
    include: {
      reviews: true,
    },
  });

  console.dir(allGames, { depth: null });
}

const exampleAppInfoResponse: AppInfoResponse = {
  appId: "205100",
  title: "Dishonored",
};
const exampleReviewsResponse: ReviewsResponse = {
  review: [
    {
      steamId: "20010",
      review: "Hello",
      votedUp: true,
      votesUp: 42,
      votesFunny: 10,
      playtimeForever: 10,
    },
    {
      steamId: "1337",
      review: "World",
      votedUp: false,
      votesUp: 42,
      votesFunny: 10,
      playtimeForever: 10,
    },
  ],
};

insertReviews(exampleAppInfoResponse, exampleReviewsResponse)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
