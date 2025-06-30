import React, { useState } from 'react';
import { Award, Users, MapPin, CheckCircle, Calendar, Factory, Leaf, Target } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const timelineEvents = [
    {
      year: '2001',
      title: 'Company Founded',
      description: 'ESSKAY AGRO INDUSTRIES established with a vision to revolutionize agriculture'
    },
    {
      year: '2005',
      title: 'First Manufacturing Unit',
      description: 'Set up our first state-of-the-art manufacturing facility'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2008 certification for quality management'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Extended operations to serve clients across multiple countries'
    },
    {
      year: '2025',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program for eco-friendly agriculture'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001:2007 Occupational Health & Safety',
    'CE Marking for European Markets',
    'Bureau of Indian Standards (BIS)',
    'Agricultural Equipment Certification'
  ];

  const teamMembers = [
    {
      name: 'Rajendra Kumar',
      position: 'Managing Director',
      experience: '23+ years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Rajesh Patel',
      position: 'Chief Technology Officer',
      experience: '18+ years',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg'
    }
  ];

  return (
    <div className="bg-primary-offwhite min-h-screen pt-16">
     
      <section className="relative py-20 bg-primary-green text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
            alt="Agricultural Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            About ESSKAY AGRO
          </h1>
          <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Pioneering agricultural excellence for over 23 years with innovative solutions and unwavering commitment to sustainable farming
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Our Foundation
            </h2>
          </div>

          <div className="flex flex-wrap justify-center mb-8">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium font-opensans transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-primary-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-primary-offwhite p-8 rounded-xl">
            {activeTab === 'mission' && (
              <div className="flex items-start space-x-6">
                <Target className="h-12 w-12 text-primary-green flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-4">Our Mission</h3>
                  <p className="font-opensans text-lg text-gray-700 leading-relaxed">
                    To empower farmers and agricultural businesses with innovative, reliable, and sustainable solutions that enhance productivity, 
                    ensure food security, and promote environmental stewardship. We are committed to advancing agricultural technology while 
                    preserving the natural resources for future generations.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="flex items-start space-x-6">
                <Leaf className="h-12 w-12 text-primary-green flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-4">Our Vision</h3>
                  <p className="font-opensans text-lg text-gray-700 leading-relaxed">
                    To be the global leader in agricultural solutions, driving the transformation towards smart, sustainable, and profitable farming. 
                    We envision a world where technology and nature work in harmony to feed the growing population while protecting our planet's 
                    precious resources.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="flex items-start space-x-6">
                <Award className="h-12 w-12 text-primary-green flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-4">Our Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <span className="font-opensans text-gray-700">Innovation & Excellence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <span className="font-opensans text-gray-700">Sustainability & Environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <span className="font-opensans text-gray-700">Customer Centricity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <span className="font-opensans text-gray-700">Integrity & Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Our Journey
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Milestones that shaped our commitment to agricultural excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-green"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-5 w-5 text-primary-green" />
                      <span className="font-montserrat font-bold text-primary-green text-lg">{event.year}</span>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary-green mb-2">
                      {event.title}
                    </h3>
                    <p className="font-opensans text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary-green rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              World-Class Infrastructure
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              State-of-the-art facilities ensuring quality and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg"
                alt="Manufacturing Facility"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Factory className="h-6 w-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-opensans font-semibold text-lg">50,000 sq ft Production Facility</h4>
                    <p className="font-opensans text-gray-600">Modern manufacturing units with advanced machinery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-opensans font-semibold text-lg">Quality Control Laboratory</h4>
                    <p className="font-opensans text-gray-600">In-house testing and quality assurance facility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-opensans font-semibold text-lg">Strategic Locations</h4>
                    <p className="font-opensans text-gray-600">Multiple facilities across key agricultural regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-20 bg-primary-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Certifications & Standards
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Committed to the highest standards of quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Award className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <h3 className="font-opensans font-semibold text-lg text-primary-green">
                  {cert}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Leadership Team
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Experienced professionals driving agricultural innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg"
                />
                <h3 className="font-montserrat font-bold text-xl text-primary-green mb-2">
                  {member.name}
                </h3>
                <p className="font-opensans text-primary-brown font-medium mb-2">
                  {member.position}
                </p>
                <p className="font-opensans text-gray-600">
                  {member.experience} in Agriculture
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



