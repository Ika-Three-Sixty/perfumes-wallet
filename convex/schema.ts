import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    status: v.boolean(),
  }),
  orders: defineTable({
    product: v.id("products"),
    quantity: v.optional(v.number()),
  }),
});
