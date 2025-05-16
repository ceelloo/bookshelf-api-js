import Hapi from "@hapi/hapi";
import { errorHandler } from "../internal/plugins/error-handler.js";
import { loggerHandler } from "../internal/plugins/logger-handler.js";

export const createServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register([errorHandler, loggerHandler]);

  server.route({
    method: "GET",
    path: "/test-error",
    handler: () => {
      throw new Error("This is a test error");
    },
  });

  return server;
};
