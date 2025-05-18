import { isBoom } from "@hapi/boom"

/** @type {import("@hapi/hapi").Plugin<{}>} */
export const error = {
	name: "error",
	version: "1.0",
	register: async (server) => {
		server.ext("onPreResponse", (req, h) => {
			const response = req.response

			if (isBoom(response)) {
				const errorResponse = {
					status: "fail",
					message: response.message || "Internal Server Error",
					code: response.output.statusCode,
				}

				return h.response(errorResponse).code(errorResponse.code)
			}

			return h.continue
		})
	},
}
