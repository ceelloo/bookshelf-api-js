import { format } from "date-fns"
import { isBoom } from "@hapi/boom"

/** @type {import('@hapi/hapi').Plugin<{}>} */
export const logger = {
	name: "logger",
	version: "1.0",
	register: async (server) => {
		server.ext("onPreResponse", (req, h) => {
			const now = format(new Date(), "HH:mm:ss")
			const method = req.method.toUpperCase()
			const path = req.path
			const code = isBoom(req.response) ? req.response.output.statusCode : req.response.statusCode

			console.log(`[${now}] | ${code} | \x1b[34m${method}\x1b[0m | ${path}`)

			return h.continue
		})
	},
}
