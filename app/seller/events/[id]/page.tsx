"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { redirect } from '@/node_modules/next/navigation';
import EventForm from '@/components/EventForm';
import { useQuery } from "convex/react";
import { api } from '@/convex/_generated/api';
import { Id } from "@/convex/_generated/dataModel";

const EventEdit = () => {
  const params = useParams();
  const user=useUser()
  
  if(!user.isSignedIn){
      redirect("/")
  }

  const event=useQuery(api.events.getById,{
    eventId: params.id as Id<"events">,
  })
  if(!event){
    return null
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white">
          <h2 className="text-2xl font-bold">Create New Event</h2>
          <p className="text-blue-100 mt-2">
            List your event and start selling tickets
          </p>
        </div>

        <div className="p-6">
          <EventForm mode="edit" initialData={event}/>
        </div>
      </div>
    </div>
  )
}

export default EventEdit