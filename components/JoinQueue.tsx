"use client"
import { Id } from '@/convex/_generated/dataModel'
import React from 'react'
import { useToast } from '@/hooks/use-toast'
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";


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
  return (
    <div>
       <p>Join</p>
    </div>
  )
}

export default JoinQueue