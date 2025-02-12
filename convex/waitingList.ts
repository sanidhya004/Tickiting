import { mutation, query,internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { WAITING_LIST_STATUS } from "./constants";


export const expireOffer= internalMutation({
  args:{
    waitingListId: v.id("waitingList"),
    eventIdl: v.id("events")
  },
  handler: async(ctx,{waitingListId,eventId})=>{
     const offer= await ctx.db.get(waitingListId)
     if(!offer || offer.status !=WAITING_LIST_STATUS.OFFERED){
       return ;
     }
     await ctx.db.patch(waitingListId,{
       status:WAITING_LIST_STATUS.EXPIRED
     })
  }
})

export const getQueuePosition = query({
  args: { eventId: v.id("events"), userId: v.string() },
  handler: async (ctx, { eventId, userId }) => {
    const entry = await ctx.db
      .query("waitingList")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", eventId)
      )
      .filter((q) => q.neq(q.field("status"), WAITING_LIST_STATUS.EXPIRED))
      .first();

    if (!entry) {
      return null;
    }

    const positionInQueue = await ctx.db
      .query("waitingList")
      .withIndex("by_event_status", (q) => q.eq("eventId", eventId))
      .filter((q) =>
        q.and(
          q.lt("_creationTime", entry._creationTime),
          q.or(
            q.eq(q.field("status", WAITING_LIST_STATUS.WAITING)),
            q.eq(q.field("status", WAITING_LIST_STATUS.OFFERED))
          )
        )
      )
      .collect()
      .then((ent) => ent.length);

    return {
      ...entry,
      position: positionInQueue + 1,
    };
  },
});


export const releaseTicket= mutation({
  args:{eventId: v.id("events"),wiaitingListId:v.id("waitingList")},
  handler:async(ctx,{eventId,waitingListId})=>{
      const entry= await ctx.db.get(waitingListId)
      if(!entry || entry.status != WAITING_LIST_STATUS.OFFERED){
        throw new Error ("No valid ticket offer found")
      }
      await ctx.db.patch(waitingListId,{
        status:WAITING_LIST_STATUS.EXPIRED
      })
     
      
  }
})