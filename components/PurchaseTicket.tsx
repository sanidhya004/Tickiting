"use client"
import { Id } from '@/convex/_generated/dataModel'

import React from 'react'
import { useEffect } from 'react';
import {useQuery} from "convex/react";
import { useRouter } from 'next/navigation';
const PurchaseTicket = ({eventId}:{eventId: Id<"events">}) => {
    const router=useRouter();
    const {user}=useUser();
    const queuePosition=useQuery(api.waitingList.getQueuePosition,{
        eventId,
        userId:user?.id ?? "",
    })
const [timeRemaining,setTimeRemaining]=useState("");
const [isLoading,setIsLoading]=useState(false)
const offerExpiresAt= queuePosition?.offerExpiresAt ?? 0;
const isExpired= Date.now() > offerExpiresAt;
useEffect(() => {
    const calculateTimeRemaining = () => {
      if (isExpired) {
        setTimeRemaining("Expired");
        return;
      }

      const diff = offerExpiresAt - Date.now();
      const minutes = Math.floor(diff / 1000 / 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (minutes > 0) {
        setTimeRemaining(
          `${minutes} minute${minutes === 1 ? "" : "s"} ${seconds} second${
            seconds === 1 ? "" : "s"
          }`
        );
      } else {
        setTimeRemaining(`${seconds} second${seconds === 1 ? "" : "s"}`);
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, [offerExpiresAt, isExpired]);
  return (
    <div>PurchaseTicket</div>
  )
}

export default PurchaseTicket