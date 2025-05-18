import Hapi from "@hapi/hapi"
import { error } from "../internal/plugins/error.js"
import { logger } from "../internal/plugins/logger.js"
import { addBookHandler } from "./book.js"

/**
 * @type { import('@hapi/hapi').ServerRoute[] }
 */
const bookRoute = [
	{
		method: "POST",
		path: "/books",
		handler: addBookHandler,
	},
	/* {
    method: "GET",
    path: "/books",
    // handler: getAllBooksHandler
  },
  {
    method: "GET",
    path: "/books/{id}",
    // handler: getBookByIdHandler
  },
  {
    method: "PUT",
    path: "/books/{id}",
    // handler: updateBookByIdHandler
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    // handler: deleteBookByIdHandler
  }, */
]

export const createServer = async () => {
	const server = Hapi.server({
		port: 3000,
		host: "localhost",
	})

	await server.register([logger, error])

	server.route(bookRoute)

	return server
}
