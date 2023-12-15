import express, { Express, Response } from "express";
import path from "path";
import {
  AppInfoResponse,
  GameNameRequest,
  SteamService,
} from "./steam_scraper";

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const app: Express = express();
const PORT = process.env["PORT"] || 3000;
const packageDefinitionRec = protoLoader.loadSync(
  path.join(__dirname, "../../reviews/proto/steam_scraper.proto"),
);
const steamScraperProto = grpc.loadPackageDefinition(packageDefinitionRec);

type SteamServicePythonGrpc = {
  [K in keyof SteamService]: (
    request: Parameters<SteamService[K]>[0],
    callback: (error: any, response: ReturnType<SteamService[K]>) => void,
  ) => ReturnType<SteamService[K]>;
};

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

// Use the promisified function for multiple asynchronous calls

promisifiedGetAppId(request1)
  .then((response) => console.log("Response 1:", response))
  .catch((error) => console.error("Error 1:", error));

promisifiedGetAppId(request2)
  .then((response) => console.log("Response 2:", response))
  .catch((error) => console.error("Error 2:", error));

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
