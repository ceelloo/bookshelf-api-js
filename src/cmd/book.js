import { badRequest } from "@hapi/boom"
import j from "joi"

const bookPayloadSchema = j.object({
	name: j.string().required(),
	year: j.number().required(),
	author: j.string().required(),
	summary: j.string().required(),
	publisher: j.string().required(),
	page_count: j.number().required(),
	read_page: j.number().required(),
	reading: j.boolean().required(),
	finished: j.boolean().required(),
})

/**
 * @param {import('@hapi/hapi').Request} req
 * @param {import('@hapi/hapi').ResponseToolkit} h
 * @returns {import('@hapi/hapi').ResponseObject}
 */
export function addBookHandler(req, h) {
	const payload = req.payload

	if (!payload) {
		throw badRequest("Payload tidak boleh kosong")
	}

	const result = bookPayloadSchema.validate(payload)
	if (result.error) {
		throw badRequest(result.error.message)
	}

	return h.response({ message: "Buku berhasil ditambahkan" }).code(201)
}
