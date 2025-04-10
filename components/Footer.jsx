import React from 'react';
import { TicketIcon, GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import logo from "@/images/logo.png";
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src={logo} width={100} height={100} alt="logo" />
              <span className="text-xl font-bold bg-gradient-to-r from-ticketr-primary to-ticketr-accent text-transparent bg-clip-text">
                Ticketr
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Powering seamless connections between fans and experiences with our next-gen ticketing platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-ticketr-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-ticketr-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-ticketr-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
         
          
        </div>
        
        <div className=" w-full border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ticketr, Inc. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
