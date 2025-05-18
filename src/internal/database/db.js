import knex from "knex";
import config from "./config.js";

export const db = knex(config);

export const initializeDatabase = async () => {
  try {
    console.log("Initializing database...");
    await db.migrate.latest();
  } catch (err) {
    console.error("Failed to migrate database:", err);
    process.exit(1);
  }
};
