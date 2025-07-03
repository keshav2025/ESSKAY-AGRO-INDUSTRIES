import React, { useState } from 'react';
import { ChevronRight, CheckCircle, ArrowRight, Download } from 'lucide-react';

const Applications: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const industries = [
    {
      title: 'Crop Production',
      description: 'Comprehensive solutions for large-scale crop cultivation',
      details: 'Our crop production solutions include advanced analytics, real-time monitoring, and expert agronomy support to maximize yields and minimize resource use. We help you implement sustainable practices and leverage the latest technology for every stage of the crop cycle.',
      image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg',
      solutions: [
        'Precision Seeding Systems',
        'Automated Irrigation',
        'Crop Monitoring',
        'Harvest Management'
      ]
    },
    {
      title: 'Food Processing',
      description: 'Advanced processing equipment for food manufacturers',
      details: 'From grain cleaning to packaging, our food processing solutions ensure quality, efficiency, and compliance with industry standards. We offer end-to-end automation and traceability for food safety and operational excellence.',
      image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
      solutions: [
        'Grain Processing',
        'Quality Control',
        'Packaging Systems',
        'Storage Solutions'
      ]
    },
    {
      title: 'Dairy Farming',
      description: 'Modern dairy solutions for efficient milk production',
      details: 'Our dairy farming solutions include automated milking, animal health monitoring, and feed optimization. We help you improve milk yield, quality, and animal welfare with the latest technology and best practices.',
      image: 'https://images.pexels.com/photos/422202/pexels-photo-422202.jpeg',
      solutions: [
        'Automated Milking',
        'Feed Management',
        'Health Monitoring',
        'Cooling Systems'
      ]
    },
    {
      title: 'Organic Farming',
      description: 'Sustainable solutions for organic agriculture',
      details: 'We support organic farmers with eco-friendly inputs, pest management, and certification guidance. Our solutions help you maintain soil health, increase biodiversity, and meet organic standards for premium market access.',
      image: 'https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg',
      solutions: [
        'Organic Fertilization',
        'Pest Management',
        'Soil Health',
        'Certification Support'
      ]
    }
  ];
  const [expanded, setExpanded] = useState(Array(industries.length).fill(false));

  const caseStudies = [
    {
      title: 'Maharaja Agro Farms - 40% Yield Increase',
      location: 'Haryana, India',
      challenge: 'Low crop yields due to inefficient irrigation and traditional farming methods',
      solution: 'Implemented precision agriculture system with smart irrigation and GPS-guided equipment',
      results: [
        '40% increase in crop yield',
        '25% reduction in water usage',
        '30% decrease in operational costs',
        'ROI achieved in 18 months'
      ],
      image: 'https://images.pexels.com/photos/158827/corn-field-sunset-harvest-158827.jpeg'
    },
    {
      title: 'Green Valley Processing - Production Optimization',
      location: 'Punjab, India',
      challenge: 'Manual processing leading to quality inconsistencies and high labor costs',
      solution: 'Automated grain processing line with quality control systems',
      results: [
        '60% increase in processing capacity',
        '95% reduction in quality defects',
        '50% labor cost savings',
        'ISO certification achieved'
      ],
      image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg'
    },
    {
      title: 'Sunrise Dairy Cooperative - Modern Milking',
      location: 'Gujarat, India',
      challenge: 'Traditional milking methods causing stress to animals and quality issues',
      solution: 'Automated milking parlor with health monitoring systems',
      results: [
        '35% increase in milk production',
        '50% improvement in milk quality',
        '80% reduction in milking time',
        'Better animal welfare scores'
      ],
      image: 'https://images.pexels.com/photos/162240/cow-cattle-milk-cow-milking-162240.jpeg'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current operations and requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Custom solution design tailored to your specific needs and constraints'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional installation and integration with existing systems'
    },
    {
      step: '04',
      title: 'Training',
      description: 'Comprehensive training for your team on equipment operation and maintenance'
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing technical support and maintenance services'
    }
  ];

  const handleToggle = (index: number) => {
    setExpanded(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="bg-primary-offwhite min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Industry Applications
          </h1>
          <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover how our solutions transform agricultural operations across various industries
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Tailored agricultural solutions for different farming sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-primary-offwhite rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-opensans text-gray-600 mb-4">
                    {industry.description}
                    {expanded[index] && (
                      <span className="block mt-2 text-gray-700">{industry.details}</span>
                    )}
                  </p>

                  <div className="space-y-2 mb-6">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" />
                        <span className="font-opensans text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="bg-primary-green text-white px-6 py-3 rounded-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200 flex items-center space-x-2 focus:outline-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{expanded[index] ? 'Show Less' : 'Learn More'}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${expanded[index] ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
    

      {/* Process Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Our Implementation Process
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              A systematic approach to ensure successful project delivery
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-green transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-primary-green mb-2">
                    {step.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-3xl mx-auto">
            Let our experts help you implement the right agricultural solutions for your specific needs.
          </p>
          <button className="bg-white text-primary-green px-8 py-4 rounded-lg text-lg font-medium font-opensans hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
            <span><a href="/Products">Start Your Project</a></span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Applications;