import express, { Express, Response } from "express";
import path from "path";
import {
  AppIdRequest,
  AppInfoResponse,
  GameNameRequest,
  NReviewsRequest,
} from "./steam_scraper";
import { GrpcPromiseFactory, SteamServicePythonGrpc } from "./scraper";

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const app: Express = express();
const PORT = process.env["PORT"] || 3000;
const packageDefinitionRec = protoLoader.loadSync(
  path.join(__dirname, "../../reviews/proto/steam_scraper.proto"),
);
const steamScraperProto = grpc.loadPackageDefinition(packageDefinitionRec);

const steamScraperStub: SteamServicePythonGrpc =
  new steamScraperProto.scraper_steamreviews.SteamService(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure(),
  );

const promisifiedGetAppId = (
  request: GameNameRequest,
): Promise<AppInfoResponse> => {
  return new Promise((resolve, reject) => {
    steamScraperStub.GetAppId(
      request,
      (err: any, response: Promise<AppInfoResponse>) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      },
    );
  });
};

const request1: GameNameRequest = { gameName: "Hades" };
const request2: GameNameRequest = { gameName: "Cyberpunk 2077" };
const request3: AppIdRequest = { appId: "205100" };
const request4: NReviewsRequest = { appId: "205100", n: 10 };
const fac = new GrpcPromiseFactory(steamScraperStub);
const getReviews = fac.createPromisifiedMethod("GetReviews");
const getNReviews = fac.createPromisifiedMethod("GetNReviews");

// Use the promisified function for multiple asynchronous calls

promisifiedGetAppId(request1)
  .then((response) => console.log("Response 1:", response))
  .catch((error) => console.error("Error 1:", error));

promisifiedGetAppId(request2)
  .then((response) => console.log("Response 2:", response))
  .catch((error) => console.error("Error 2:", error));

getReviews(request3).then((response) => console.log("GetReviews:", response));
getNReviews(request4).then((response) => console.log("GetNReviews:", response));

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
