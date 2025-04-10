import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
    <section className="pt-21 pb-20 md:pt-28 md:pb-28 overflow-hidden ">
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

export const FeaturesSkeleton = () => {
  return (
    <div className="py-20 bg-gray-50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="rounded-xl p-6">
              <Skeleton className="h-8 w-8 rounded mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-1" />
              <Skeleton className="h-4 w-4/6 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhyTicketrSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-64 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="space-y-6">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex items-start">
                  <Skeleton className="h-6 w-6 mr-3 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <Skeleton className="h-8 w-48 mb-6" />
            <Skeleton className="h-5 w-full mb-6" />
            <div className="space-y-6">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="flex items-start">
                  <Skeleton className="h-6 w-6 mr-3 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechStackSkeleton = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto mt-4" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-xl overflow-hidden">
            <thead>
              <tr>
                <th className="py-4 px-6"><Skeleton className="h-5 w-20" /></th>
                <th className="py-4 px-6"><Skeleton className="h-5 w-32" /></th>
                <th className="py-4 px-6"><Skeleton className="h-5 w-32" /></th>
              </tr>
            </thead>
            <tbody>
              {Array(6).fill(0).map((_, i) => (
                <tr key={i}>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Skeleton className="h-10 w-10 rounded-full mr-3" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </td>
                  <td className="py-4 px-6"><Skeleton className="h-5 w-32" /></td>
                  <td className="py-4 px-6"><Skeleton className="h-5 w-40" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const GetStartedSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto mt-4" />
        </div>
        
        <div className="flex justify-center">
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </div>
    </div>
  );
};
