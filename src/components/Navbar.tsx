import React, { useState } from 'react';
import { Factory, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'applications', label: 'Applications' },
    { id: 'contact', label: 'Contact' }
  ];

  const productCategories = [
    'Agricultural Equipment',
    'Processing Machinery',
    'Irrigation Systems',
    'Storage Solutions',
    'Quality Control',
    'Packaging Equipment'
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="relative">
              <Factory className="h-8 w-8 text-primary-green" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-green rounded-full"></div>
            </div>
            <div className="text-primary-green">
              <h1 className="font-montserrat font-bold text-lg leading-tight">
                ESSKAY AGRO<br />
                <span className="text-sm font-medium">INDUSTRIES</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setProductsDropdown(!productsDropdown);
                    } else {
                      setActiveSection(item.id);
                      setProductsDropdown(false);
                    }
                  }}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium font-opensans transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-green border-b-2 border-primary-green'
                      : 'text-gray-700 hover:text-primary-green hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Products Dropdown */}
                {item.hasDropdown && productsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {productCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveSection('products');
                            setProductsDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-green"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-primary-green text-white px-6 py-2 rounded-md text-sm font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium font-opensans ${
                    activeSection === item.id
                      ? 'text-primary-green bg-gray-50'
                      : 'text-gray-700 hover:text-primary-green hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setActiveSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 mt-4 bg-primary-green text-white rounded-md text-base font-medium font-opensans"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;