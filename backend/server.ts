import express, { Express, Response, Request } from "express";
import cors from "cors";
import { selectInitialReviews, selectReviews } from "./databaseactions";

const app: Express = express();
const PORT = process.env["PORT"] || 3000;

const allowedOrigins = ["http://localhost:4200"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

type selectParams = {
  gameTitle: string;
  numberOfReviews: string;
};

app.get(
  "/reviews",
  async (req: Request<{}, {}, {}, selectParams>, res: Response) => {
    console.log(req.query);
    const { gameTitle = "DefaultGameTitle", numberOfReviews = "0" } = req.query;

    const result = await selectReviews(
      gameTitle,
      parseInt(numberOfReviews, 10),
    );
    res.send(result);
  },
);

app.get("/initialreviews", async (req: Request, res: Response) => {
  console.log(req, res);
  const gameWithReviews = await selectInitialReviews();
  res.send(gameWithReviews);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
