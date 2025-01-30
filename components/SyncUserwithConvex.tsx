"use client"
import React, { useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { updateUser } from '@/convex/users';
const SyncUserwithConvex = () => {
    const {user}=useUser()
    
    const updateUsers=useMutation(api.users.updateUser);
    useEffect(()=>{
        if(!user){
             return 
        }
        
            const syncUser= async()=>{
                
                try{
                   
                    await updateUsers({
                        userId: user.id,
                        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
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