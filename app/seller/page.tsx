import React from 'react'
import {auth} from '@clerk/nextjs/server'
import { redirect } from '@/node_modules/next/navigation'
const SellerPage = async () => {
    const {userId}= await auth()
    if(!userId){
         redirect("/")
    }
  return (
    <div>
      
    </div>
  )
}

export default SellerPage
