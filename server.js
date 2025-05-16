import { createServer } from "./cmd/api.js";

const start = async () => {
  const server = await createServer();
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

start();
