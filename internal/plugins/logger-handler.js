import { format } from "date-fns";

/**
 * @param {import("@hapi/hapi").Server} server
 */
const register = async (server) => {
  server.ext("onPreResponse", (req, h) => {
    const now = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const method = req.method.toUpperCase();
    const path = req.path;
    const code = req.response.statusCode;

    console.log(`[${now}] ${method} ${path} ${code}`);

    return h.continue;
  });
};

export const loggerHandler = {
  name: "logger-handler",
  version: "1.0",
  register,
};
