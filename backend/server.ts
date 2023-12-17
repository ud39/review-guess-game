import express, { Express, Response } from "express";
import { insertGameWithReviews } from "./databaseactions";
import { AppIdRequest, GameNameRequest } from "./steam_scraper";

const app: Express = express();
const PORT = process.env["PORT"] || 3000;

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

const request1: GameNameRequest = { gameName: "Dishonored" };
const request2: AppIdRequest = { appId: "205100" };

insertGameWithReviews(request1, request2);
