
import React from 'react';
import { 
  ServerIcon, 
  ShieldIcon, 
  CreditCardIcon, 
  PaletteIcon, 
  ClockIcon,
  RocketIcon
} from 'lucide-react';

const techStack = [
  {
    tech: "Next.js 14",
    icon: <RocketIcon className="h-6 w-6" />,
    superpower: "App Router + SSR",
    purpose: "Blazing-fast page transitions",
    color: "bg-black text-white"
  },
  {
    tech: "Convex",
    icon: <ServerIcon className="h-6 w-6" />,
    superpower: "Real-time database",
    purpose: "Live queue updates & sync",
    color: "bg-blue-600 text-white"
  },
  {
    tech: "Clerk",
    icon: <ShieldIcon className="h-6 w-6" />,
    superpower: "Auth middleware",
    purpose: "Secure user management",
    color: "bg-purple-600 text-white"
  },
  {
    tech: "Stripe Connect",
    icon: <CreditCardIcon className="h-6 w-6" />,
    superpower: "Payment processing",
    purpose: "Instant organizer payouts",
    color: "bg-indigo-600 text-white"
  },
  {
    tech: "shadcn/ui",
    icon: <PaletteIcon className="h-6 w-6" />,
    superpower: "Component library",
    purpose: "Pixel-perfect interfaces",
    color: "bg-gray-800 text-white"
  },
  {
    tech: "Rate Limiter",
    icon: <ClockIcon className="h-6 w-6" />,
    superpower: "Queue fairness guardian",
    purpose: "Anti-bot protection",
    color: "bg-red-600 text-white"
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-28 ">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Power Grid</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is built on cutting-edge technologies that ensure speed, security, and scalability.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead>
              <tr className="bg-ticketr-primary/10">
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Tech</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Superpower</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((item, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.tech}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{item.superpower}</td>
                  <td className="py-4 px-6 text-gray-600">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
