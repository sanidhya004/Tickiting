"use server"
import { auth } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import { stripe } from "@/lib/stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
}


export const createStripeConnetCustomer=async()=>{
     const {userId}=await auth()
     if(!userId){
        throw new Error("user not authenticated")
     }

     const existingStripeConnectId = await convex.query(
        api.users.getUsersStripeConnectId,
        {
          userId,
        }
      );

     if (existingStripeConnectId){
           return {account:existingStripeConnectId}
     }
     const account= await stripe.acccounts.create({
         type:"express",
         capabilities:{
             card_payments:{requested:true},
             transfers:{requested:true},
             
         }
     })

     await convex.mutation(api.users.updateOrCreateUserStripeConnectId,{
         userId,
         existingStripeConnectId:account.id
     });
     return {account:account.id}
}