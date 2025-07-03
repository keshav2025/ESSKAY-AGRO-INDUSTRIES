import React, { useState } from 'react';
import { Factory, Phone, Mail, MapPin, Globe, ChevronRight } from 'lucide-react';
import logo from '../components/assests/logo1.png'
interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
          <div
  className="flex items-center space-x-2 cursor-pointer"
  onClick={() => setActiveSection('home')}
>
 
  <div className="text-[#01bf62]  leading-tight">
    <h1 className="font-bold text-medium font-montserrat">
      ESSKAY AGRO
      <br />
      <span className="text-sm text-black font-medium tracking-wide">INDUSTRIES</span>
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
                <span className="font-opensans">esskayagroindustries@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
  <MapPin className="h-5 w-5 text-secondary-wheat flex-shrink-0 mt-1" />
  <span className="font-opensans leading-relaxed">
    <strong>ESSKAY AGRO INDUSTRIES</strong><br />
    Khasra No. 111, Karala Majri,<br />
    Majri Road, Delhi - 110081<br />
    <strong>GSTIN:</strong> 07AUWPS3407R2ZJ
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

     
     

    
      <div className="bg-black bg-opacity-20 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="font-opensans text-white text-opacity-90">
                © 2024 ESSKAY AGRO INDUSTRIES. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200" onClick={() => setShowPrivacy((v) => !v)}>
                Privacy Policy
              </button>
              <button className="font-opensans text-white text-opacity-90 hover:text-secondary-wheat transition-colors duration-200" onClick={() => setShowTerms((v) => !v)}>
                Terms of Service
              </button>
              
            </div>
          </div>
          {/* Privacy Policy Text */}
          {showPrivacy && (
            <div className="mt-6 bg-white bg-opacity-95 rounded-lg p-6 text-black max-w-3xl mx-auto shadow-lg">
              <h4 className="font-montserrat font-bold text-lg mb-2">Privacy Policy</h4>
              <p className="font-opensans mb-2">We respect your privacy and are committed to protecting your personal information. Any data collected on this website, such as your name and email address for newsletter subscriptions or inquiries, will be used solely for communication, updates, and service improvement by ESSKAY AGRO INDUSTRIES. We do not sell, trade, or otherwise transfer your information to outside parties. We implement a variety of security measures to maintain the safety of your personal information. By using our website, you consent to our privacy policy. For questions, contact us at esskayagroindustries@gmail.com.</p>
            </div>
          )}
          {/* Terms of Service Text */}
          {showTerms && (
            <div className="mt-6 bg-white bg-opacity-95 rounded-lg p-6 text-black max-w-3xl mx-auto shadow-lg">
              <h4 className="font-montserrat font-bold text-lg mb-2">Terms of Service</h4>
              <p className="font-opensans mb-2">By accessing and using this website, you agree to comply with the terms and conditions set forth by ESSKAY AGRO INDUSTRIES. All content, including text, images, and product information, is for informational purposes only and may not be copied or distributed without permission. We reserve the right to modify or discontinue any part of the website without notice. Your continued use of the site constitutes acceptance of any changes to these terms. If you do not agree with any part of these terms, please do not use our website.</p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;