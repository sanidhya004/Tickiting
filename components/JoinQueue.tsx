"use client"
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { WAITING_LIST_STATUS } from "@/convex/constants";
import Spinner from "./Spinner";
import { Clock, OctagonXIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ConvexError } from "convex/values";




const JoinQueue = ({eventId,userId}:{eventId:any,userId:any}) => {
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
   const event=useQuery(api.events.getById,{eventId})
   const isEventOwner=userId===event?.userId 

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
              description:error.data,
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

   if (queuePosition===undefined || availability==undefined || !event){
     return <Spinner/>
   }

   if(userTicket){
     return null
   }

   const isPastEvent= event.eventDate < Date.now();
  return (
    <div>
    {(!queuePosition ||
      queuePosition.status === WAITING_LIST_STATUS.EXPIRED ||
      (queuePosition.status === WAITING_LIST_STATUS.OFFERED &&
        queuePosition.offerExpiresAt &&
        queuePosition.offerExpiresAt <= Date.now())) && (
      <>
        {isEventOwner ? (
          <div className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg">
            {/* <OctagonXIcon className="w-5 h-5" /> */}
            <span>You cannot buy a ticket for your own event</span>
          </div>
        ) : isPastEvent ? (
          <div className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed">
            {/* <Clock className="w-5 h-5" /> */}
            <span>Event has ended</span>
          </div>
        ) : availability.purchasedCount >= availability?.totalTickets ? (
          <div className="text-center p-4">
            <p className="text-lg font-semibold text-red-600">
              Sorry, this event is sold out
            </p>
          </div>
        ) : (
          <button
            onClick={handleJoinQueue}
            disabled={isPastEvent || isEventOwner}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Buy Ticket
          </button>
        )}
      </>
    )}
  </div>
  )
}

export default JoinQueue