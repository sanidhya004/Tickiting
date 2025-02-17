import React from 'react'
import {auth} from '@clerk/nextjs/server'
import { redirect } from '@/node_modules/next/navigation'
import SellerDashboard from '@/components/SellerDashboard'
const SellerPage = async () => {
    const {userId}= await auth()
    if(!userId){
         redirect("/")
    }
  return (
    <div>
       <SellerDashboard/>
    </div>
  )
}

export default SellerPage
