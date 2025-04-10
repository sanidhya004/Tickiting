"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TicketIcon, ZapIcon, ShieldIcon, RefreshCwIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import logo from "@/images/logo.png";
import Image from 'next/image';
import EventCard from './EventCard';

const Hero = ({events}) => {
   console.log(events._id);
  const router = useRouter();
  return (
    <div className="relative text-blue-600 flex flex-col items-center justify-center">
     
    <section className="pt-21 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="flex items-center space-x-2 mb-6">
               <Image src={logo} width={100} height={100} alt="logo" />
              <span className=" bg-blue-300 bg-gradient-to-r from-ticketr-primary to-ticketr-accent text-transparent bg-clip-text font-semibold">
                · Real-Time Event Revolution
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-blue-400">
              Powering seamless connections between{" "}
              <span className="gradient-text text-blue-600">fans and experiences</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Next-gen ticketing platform with intelligent queues, instant updates, and bulletproof transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button className=" bg-blue-300  text-white w-full sm:w-auto text-base px-6 py-6 bg-gradient-to-r from-ticketr-primary to-ticketr-secondary text-white hover:bg-blue-500 transition-opacity" onClick={() => router.push('/event')}>
                Browse Events
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-base px-6 py-6 border-ticketr-primary text-ticketr-primary hover:bg-ticketr-light">
                Become a Seller
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <ZapIcon className="h-4 w-4 mr-1 text-ticketr-primary" />
                <span>Real-time sync</span>
              </div>
              <div className="flex items-center">
                <ShieldIcon className="h-4 w-4 mr-1 text-ticketr-secondary" />
                <span>Bulletproof security</span>
              </div>
              <div className="flex items-center">
                <RefreshCwIcon className="h-4 w-4 mr-1 text-ticketr-accent" />
                <span>Instant updates</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 text-black">
          <p className='text-xl font-bold mb-4  p-2 rounded-md opacity-40 text-blue-500'>What's New </p>
           <div className="animate-fade-in-up">
           <EventCard eventId={events[0]._id}/>
           </div>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
