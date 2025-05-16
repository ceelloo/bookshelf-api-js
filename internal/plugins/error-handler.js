/**
 * @param {import("@hapi/hapi").Server} server
 */
const register = async (server) => {
  server.ext("onPreResponse", (req, h) => {
    const res = req.response;

    if (res.isBoom) {
      const errorResponse = {
        status: "fail",
        message: res.message || "Internal Server Error",
        code: res.output.statusCode,
      };

      return h.response(errorResponse).code(res.output.statusCode);
    }

    return h.continue;
  });
};

export const errorHandler = {
  name: "error-handler",
  version: "1.0",
  register,
};
