import { Client } from "pg";

const host = process.env["DB_HOST"] || "localhost";
const database = process.env["DB_NAME"] || "guessing_game";
const user = process.env["DB_USER"] || "ud39";
const password = process.env["DB_PASSWORD"] || "";
const port =
  typeof process.env["PGPORT"] === "string"
    ? parseInt(process.env["PGPORT"])
    : 5432;

const client = new Client({
  host,
  database,
  user,
  password,
  port,
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log(`Connected to ${database} on ${port}`);
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

export async function disconnectFromDatabase() {
  try {
    await client.end();
    console.log("Disconnected from the database");
  } catch (error) {
    console.error("Error disconnecting from the database", error);
  }
}

process.on("SIGINT", async () => {
  await disconnectFromDatabase();
  process.exit();
});

process.on("SIGTERM", async () => {
  await disconnectFromDatabase();
  process.exit();
});
