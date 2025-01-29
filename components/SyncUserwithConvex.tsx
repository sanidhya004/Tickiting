"use client"
import React, { useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
const SyncUserwithConvex = () => {
    const user=useUser()
    
    const updateUser=useMutation(api.users.updateUser);
    useEffect(()=>{
        if(!user){
             return 
        }
        
            const syncUser= async()=>{
                try{
                    await updateUser({
                        userId: user.id,
                        name: user.fullName,
                        email: user.emailAddresses[0]?.emailAddress ?? "",
                      });
                     
                }
                catch(e){
                    console.log(e)
                } 
            }
             
        
        syncUser();
    },[user, updateUser])
  return null
}

export default SyncUserwithConvex