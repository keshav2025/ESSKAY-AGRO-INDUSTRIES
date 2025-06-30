import React from 'react';
import { Factory, Phone, Mail, MapPin, Globe, ChevronRight } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'About Us', section: 'about' },
    { label: 'Products', section: 'products' },
    { label: 'Applications', section: 'applications' },
    { label: 'Contact', section: 'contact' }
  ];

  const productCategories = [
    'Agricultural Equipment',
    'Processing Machinery',
    'Irrigation Systems',
    'Storage Solutions',
    'Quality Control',
    'Packaging Equipment'
  ];

  const services = [
    'Installation & Setup',
    'Training & Support',
    'Maintenance Services',
    'Technical Consultation',
    'Custom Solutions',
    'Emergency Support'
  ];

  return (
    <footer className="bg-primary-green text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Factory className="h-8 w-8 text-white" />
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary-wheat rounded-full"></div>
              </div>
              <div>
                <h1 className="font-montserrat font-bold text-lg leading-tight">
                  ESSKAY AGRO<br />
                  <span className="text-sm font-medium">INDUSTRIES</span>
                </h1>
              </div>
            </div>
            <p className="font-opensans text-white text-opacity-90 mb-6 leading-relaxed">
              Leading agricultural solutions provider with 23+ years of experience in delivering innovative farming equipment and sustainable agricultural practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-wheat" />
                <span className="font-opensans">+919971074753</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-wheat" />
                <span className="font-opensans">esskayagrosales@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
  <MapPin className="h-5 w-5 text-secondary-wheat flex-shrink-0 mt-1" />
  <span className="font-opensans leading-relaxed">
    <strong>ESSKAY AGRO INDUSTRIES</strong><br />
    Khasra No. 111, Karala Majri,<br />
    Majri Road, Delhi - 110081<br />
    <strong>GSTIN:</strong> 07ABCDE1234F1Z5
  </span>
</div>

            </div>
          </div>

         
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => setActiveSection(link.section)}
                    className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveSection('products')}
                    className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => setActiveSection('applications')}
                    className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
      <div className="bg-primary-brown bg-opacity-20 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-montserrat font-bold text-xl mb-2">Stay Updated</h3>
              <p className="font-opensans text-white text-opacity-90">
                Subscribe to our newsletter for the latest agricultural insights and product updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-secondary-wheat font-opensans"
              />
              <button className="bg-secondary-wheat text-primary-green px-6 py-3 rounded-r-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-black bg-opacity-20 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="font-opensans text-white text-opacity-90">
                © 2024 ESSKAY AGRO INDUSTRIES. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200">
                Terms of Service
              </button>
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-secondary-wheat" />
                <span className="font-opensans text-white text-opacity-90">Follow Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;