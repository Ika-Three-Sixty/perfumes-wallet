import { query, mutation } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const create = query({
  //   args: {
  //     name: "string",
  //     price: "number",
  //   },
  handler: async (ctx, { name, price }) => {
    // return await ctx.db.get("createProduct", { name, price });
  },
});
