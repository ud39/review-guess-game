import express, { Express, Response } from "express";
import path from "path";

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const app: Express = express();
const PORT = process.env["PORT"] || 3000;
const packageDefinitionRec = protoLoader.loadSync(
  path.join(__dirname, "../../reviews/proto/steam_scraper.proto"),
);
const steamScraperProto = grpc.loadPackageDefinition(packageDefinitionRec);
const steamScraperStub =
  new steamScraperProto.scraper_steamreviews.SteamService(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure(),
  );
console.log(steamScraperStub);

steamScraperStub.GetAppId({ gameName: "Hades" }, (err: any, response: any) => {
  if (!err) {
    console.log("Response:", response);
    console.log("App Id:", response.appId);
    console.log("Title:", response.title);
  } else {
    console.error(err);
  }
});

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
