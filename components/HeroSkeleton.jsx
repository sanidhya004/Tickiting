"use client"
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { ZapIcon, ShieldIcon, RefreshCwIcon } from 'lucide-react';

const HeroSkeleton = () => {
  return (
    <div className="relative">
      <section className="pt-21 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="flex items-center space-x-2 mb-6">
                <Skeleton className="w-24 h-24 rounded-lg" />
                <Skeleton className="h-6 w-48" />
              </div>
              
              <Skeleton className="h-16 w-full mb-6" />
              <Skeleton className="h-4 w-3/4 mb-8" />
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Skeleton className="w-full sm:w-48 h-14" />
                <Skeleton className="w-full sm:w-48 h-14" />
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <Skeleton className="h-6 w-32 mb-4" />
              <Skeleton className="w-full h-96 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSkeleton; 