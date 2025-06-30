import React from 'react';
import { Cog, Shield, Truck, Headphones } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Cog,
      title: 'Advanced Technology',
      description: 'State-of-the-art agricultural equipment and processing machinery designed for maximum efficiency and productivity.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified processes and rigorous quality control measures ensure the highest standards in all our products.'
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Comprehensive logistics network ensuring timely delivery and installation support across all regions.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team and technical assistance available round the clock for all your needs.'
    }
  ];

  return (
    <section className="py-20 bg-primary-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary-green mb-4">
            Why Choose ESSKAY AGRO
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive agricultural solutions backed by decades of experience and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-green bg-opacity-10 p-4 rounded-full">
                  <highlight.icon className="h-8 w-8 text-primary-green" />
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary-green mb-4">
                {highlight.title}
              </h3>
              <p className="font-opensans text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;