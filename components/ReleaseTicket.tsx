"use client"
import { Id } from '@/convex/_generated/dataModel'
import React from 'react'
import { useState } from 'react'
import { api } from '@/convex/_generated/api'
import {useMutation} from "convex/react"

const ReleaseTicket = ({eventId,waitingListId}:{eventId:Id<"events">,waitingListId: Id<"waitingList">}) => {

  const [Releasing ,setisReleasing]=useSate(false);
  const releaseTicket= useMutation(api.waitingList.releaseTicket)
  const handleRelease= async()=>{ 
    if(!confirm("Are you sure you want to release the ticket")){
       return;
    }
    try{
      setisReleasing(true)
      await releaseTicket({
        eventId,waitingListId
      })

    }
    catch(e){
      console.log(e)
    }
    finally{
       setisReleasing(false)
    }
  }
  return (
    <div>ReleaseTicket</div>
  )
}

export default ReleaseTicket