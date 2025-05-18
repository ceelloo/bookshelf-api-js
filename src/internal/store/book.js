import { db } from "@/src/internal/database/db"
import { bookTable } from "@/src/migrations/20250517084931_book"

/**
 * @param {import("@/src/internal/types").BookPayload} payload
 */
export const CreateBook = async (payload) => {
	const [book] = await db(bookTable)
		.insert({
			...payload,
			finished: payload.page_count === payload.read_page,
		})
		.returning("*")

	return book
}
