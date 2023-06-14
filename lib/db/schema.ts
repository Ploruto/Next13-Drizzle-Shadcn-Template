import {
  datetime,
  int,
  mysqlTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core"

/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const user = mysqlTable(
  "user",
  {
    id: serial("id").primaryKey(),
    username: text("username"),
    email: varchar("email", { length: 256 }),
  },
  (table) => {
    return {
      emailIdx: uniqueIndex("email_idx").on(table.email),
    }
  }
)