import React from 'react';
import { 
  ZapIcon, 
  ShieldCheckIcon, 
  RefreshCwIcon, 
  UserCheckIcon, 
  LineChartIcon, 
  CreditCardIcon,
  BadgeCheckIcon,
  QrCodeIcon
} from 'lucide-react';

const features = [
  {
    icon: <ZapIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Real-time Updates",
    description: "Instant sync across all devices ensures you never miss a beat when tickets become available."
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Queue Protection",
    description: "Fair queue system with position tracking prevents line-cutting and ensures equal access."
  },
  {
    icon: <CreditCardIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Secure Payments",
    description: "Stripe-backed purchase protection guarantees safe and reliable transactions."
  },
  {
    icon: <BadgeCheckIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Verified Organizers",
    description: "Know who you're buying from with our comprehensive organizer verification system."
  },
  {
    icon: <QrCodeIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Digital Tickets",
    description: "Environmental and convenient with fraud-proof QR tech for seamless entry."
  },
  {
    icon: <LineChartIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Analytics Dashboard",
    description: "Real-time insights into sales, attendance, and customer engagement."
  },
  {
    icon: <RefreshCwIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Auto-Refresh",
    description: "Pages update live so you'll never miss out due to stale information."
  },
  {
    icon: <UserCheckIcon className="h-8 w-8 text-ticketr-primary" />,
    title: "Identity Verification",
    description: "Prevents scalping and ensures tickets go to real fans, not bots or resellers."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive set of features makes ticket selling and buying seamless and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
