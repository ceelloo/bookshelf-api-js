import { createServer } from "./cmd/api.js"

const start = async () => {
	const server = await createServer()
	await server.start()
	console.log(`Server running at: ${server.info.uri}`)
}

process.on("unhandledRejection", (err) => {
	console.log(err)
	process.exit(1)
})

start()
