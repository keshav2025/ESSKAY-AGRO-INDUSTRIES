import React from 'react';
import { ArrowRight, Award, Users, Truck, Leaf } from 'lucide-react';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import News from './News';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <div className="bg-primary-offwhite">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover transition-all duration-700 ease-in-out filter"
            autoPlay
            loop
            muted
            playsInline
            style={{
              filter: 'brightness(1.1) contrast(1.25) saturate(1.4)',
            }}
          >
            <source
              src="https://videos.pexels.com/video-files/2758322/2758322-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Leading Agricultural
            <span className="text-secondary-wheat block">Innovation</span>
          </h1>
          <p className="font-opensans text-xl md:text-2xl mb-8 leading-relaxed">
            Comprehensive agricultural solutions for modern farming, processing, and sustainable agriculture practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('products')}
              className="bg-primary-green text-white px-8 py-4 rounded-lg text-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium font-opensans hover:bg-white hover:text-primary-green transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary-green" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-primary-green mb-2">23+</h3>
              <p className="font-opensans text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary-green" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-primary-green mb-2">100+</h3>
              <p className="font-opensans text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-primary-green" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-primary-green mb-2">100+</h3>
              <p className="font-opensans text-gray-600">Products Delivered</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-primary-green" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-primary-green mb-2">100%</h3>
              <p className="font-opensans text-gray-600">Sustainable Solutions</p>
            </div>
          </div>
        </div>
      </section>

      <Highlights />
      <News />
    </div>
  );
};

export default Hero;
