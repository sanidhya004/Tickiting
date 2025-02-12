"use client"
import { Id } from '@/convex/_generated/dataModel'
import React from 'react'
import { useToast } from '@/hooks/use-toast'
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { join } from 'path';
import { resourceLimits } from 'worker_threads';


const JoinQueue = ({eventId,userId}:{eventId:Id<"events">,userId:Id<"users">}) => {
   const {toast}=useToast()
   const joinWaitingList = useMutation(api.events.joinWaitingList);
   const queuePosition = useQuery(api.waitingList.getQueuePosition, {
     eventId,
     userId,
   });
   const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
     eventId,
     userId,
   });

   const availability= useQuery(api.events.getEventAvailability,{eventId})
   const event=useQuery(api.events.getbyId,{eventId})
   const isOwner=userId===event.userId 

   const handleJoinQueue=async()=>{
       try{
        const res=await joinWaitingList({eventId,userId})
        if(res.success){
           console.log("Joined")
           toast({
              title:res.message,
              duration:5000
           })
        }

       }catch(error){
        if ( error instanceof ConvexError && error.message.includes("joined the waiting list too many times")){
            toast({
              variant:"destructive",
              title:"Slow down there!",
              description:error.details,
              duration:5000
            })
        }
        else{
           console.log('Error joining the queue',error)
           toast({
             variant:"destructive",
             title:"uh Oh! somehting went wrong",
             description:"Failed to join the queue please try again later"
           })
        }
         
       }


   }
   if 
  return (
    <div>
       <p>Join</p>
    </div>
  )
}

export default JoinQueue