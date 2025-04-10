import React from 'react';
import { AlertCircleIcon, CheckCircleIcon } from 'lucide-react';

const WhyTicketr = () => {
  return (
    <section id="why" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Ticketr Exists</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Frustration:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircleIcon className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Ever missed tickets because the page didn't refresh?</span> Static pages fail to update, leaving you staring at "Available" when they're long gone.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <AlertCircleIcon className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Waited in queue just to see "Sold Out"?</span> Traditional systems don't protect your place in line or give real-time updates.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <AlertCircleIcon className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Worried about fake events or payment scams?</span> Without proper verification, ticket buyers and organizers face unnecessary risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Fix:</h3>
              <p className="text-lg text-gray-700 mb-6">
                Ticketr combines military-grade tech with fan-first design:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Real-time sync across all devices</span> - See ticket availability update live as others make purchases.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Queue position guardian</span> - Your place in line is sacred and protected against cutting.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Stripe-backed purchase protection</span> - Secure transactions with authentication and fraud detection.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Organizer verification system</span> - Every event creator is verified to prevent scams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTicketr;
