"use server"

import { stripe } from "@/lib/stripe"

export async function createStripeConnectLoginLink(stripeAccountId:string) {
    if(!stripeAccountId){
         throw new Error("invalid stripe account id")
    }
    try{
         const loginLink=await stripe.acccounts.createLoginLink(stripeAccountId)
         return loginLink.url;
    }
    catch(e){
         console.log(e)
         throw new Error("Failed to connect with stripe connect login link")
    }
}