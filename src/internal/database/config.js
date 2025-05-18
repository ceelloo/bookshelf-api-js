/** @type { import("knex").Knex.Config } */
export default {
  client: "better-sqlite3",
  connection: {
    filename: "./local.db",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "src/migrations",
  },
};
