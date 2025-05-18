export const bookTable = "book"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
	await knex.schema.createTable(bookTable, (t) => {
		t.string("id").primary().defaultTo(knex.fn.uuid())
		t.string("name").notNullable()
		t.integer("year").notNullable()
		t.string("author").notNullable()
		t.string("summary").notNullable()
		t.string("publisher").notNullable()
		t.integer("page_count").notNullable()
		t.integer("read_page").notNullable()
		t.boolean("reading").notNullable().defaultTo(false)
		t.boolean("finished").notNullable().defaultTo(false)
		t.timestamp("inserted_at").notNullable().defaultTo(knex.fn.now())
		t.timestamp("updated_at").notNullable().defaultTo(knex.fn.now())
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
	await knex.schema.dropTableIfExists(bookTable)
}
