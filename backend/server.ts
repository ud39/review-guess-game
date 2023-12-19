import express, { Express, Response } from "express";
import { selectReviews } from "./databaseactions";

const app: Express = express();
const PORT = process.env["PORT"] || 3000;

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

selectReviews("Dishonored", 2);
