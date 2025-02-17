import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { isErrored } from "stream";

export const updateOrCreateUserStripeConnectId = mutation({
  args: {
    userId: v.string(),
    stripeConnectId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    if (!user) {
      throw new Error("User is invalid");
    }
    await ctx.db.patch(user._id, { stripeConnectId: args.stripeConnectId });
  },
});
export const getUsersStripeConnectId = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      //.filter((q) => q.eq(q.field("stripeConnectId"), undefined))
      .first();
    return user.stripeConnectId;
  },
});
export const updateUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, name, email }) => {
    //check if the user exist
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .first();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name,
        email,
      });
      return existingUser._id;
    } else {
      const newUserId = await ctx.db.insert("users", {
        userId,
        name,
        email,
        stripeConnectId: undefined,
      });
      return newUserId;
    }
  },
});
