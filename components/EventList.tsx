"use client";
import React from 'react'
import {useQuery} from "convex/react"
import { api } from '@/convex/_generated/api'

 
const EventList = () => {
    const events= useQuery(api.events.get)
    console.log(events)
  return (
    <div>EventList</div>
  )
}

export default EventList