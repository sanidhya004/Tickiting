"use client"
import EventList from "@/components/EventList";
import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import WhyTicketr from "@/components/WhyTicketr";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Spinner from "@/components/Spinner";
import { HeroSkeleton, FeaturesSkeleton, WhyTicketrSkeleton, TechStackSkeleton  } from "@/components/SkeletonLoader";

export default function Home() {
  const events = useQuery(api.events.get);
  if (!events) {
    return (
       <div className="flex flex-col  justify-center w-full">
       <HeroSkeleton/>
       <FeaturesSkeleton/>
       <WhyTicketrSkeleton/>
       <TechStackSkeleton/>
       </div>
    );
  }
  const upcomingEvents = events.filter((event) => event.eventDate > Date.now());
  return (
    <main className="flex flex-col items-center justify-center">
      <header className=" w-full sticky top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        
        
        <nav className="md:flex  space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-ticketr-primary transition-colors">
            Features
          </a>
          <a href="#why" className="text-sm font-medium text-gray-700 hover:text-ticketr-primary transition-colors">
            Why Ticketr
          </a>
          <a href="#tech" className="text-sm font-medium text-gray-700 hover:text-ticketr-primary transition-colors">
            Tech Stack
          </a>
          
        </nav>
        
        
      </div>
    </header>
  <Hero events={upcomingEvents}/>
  <Features/>
  <WhyTicketr/>
  <TechStack/>

  
  </main>
  
    
  );
}
