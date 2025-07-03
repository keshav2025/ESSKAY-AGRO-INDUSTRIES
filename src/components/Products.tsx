import React, { useState } from 'react';
import { Search, Filter, Download, Phone, Mail } from 'lucide-react';
import preclenner from '../components/assests/Screenshot 2025-06-30 at 11.45.53 AM.png';
import img2 from '../components/assests/Screenshot 2025-06-30 at 11.47.54 AM.png';
import img01 from '../components/assests/new1.jpeg';
import finecleaner from '../components/assests/new2.jpeg'
import stopesepertor from '../components/assests/new3.jpeg';
import paddyhusker from '../components/assests/new4.jpeg';
import paddy from '../components/assests/new5.jpeg';
import ricewhitener from '../components/assests/new6.jpeg';
import silkypolisher from '../components/assests/new7.jpeg';
import lengthgrader from '../components/assests/new8.jpeg';
import rice from '../components/assests/new9.jpeg';
import paddycleaner from '../components/assests/new10.jpeg'; 
import bucketElevator from '../components/assests/new11.jpeg';
import flourshifter from '../components/assests/new12.jpeg';
import VIBROCLASSIFIER from '../components/assests/new13.jpeg';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'equipment', name: 'Agricultural Equipment', count: 8 },
    { id: 'processing', name: 'Processing Machinery', count: 6 },
    { id: 'irrigation', name: 'Irrigation Systems', count: 4 },
    { id: 'storage', name: 'Storage Solutions', count: 3 },
    { id: 'quality', name: 'Quality Control', count: 2 },
    { id: 'packaging', name: 'Packaging Equipment', count: 1 }
  ];

  const products = [
    {
      id: 1,
      name: 'PRE CLEANER',
      category: 'equipment',
      image: img01,
      features: [
        'Removes large impurities: stalks, clods, stone fragments',
        'Improves product quality and protects next equipment',
        'High accuracy, low maintenance with laminated wooden frames',
      ],
      specifications: 'Type: Multi-stage, Frame: Laminated wood, Material: Special grade metals',
    },
    {
      id: 2,
      name: 'FINE CLEANER',
      category: 'processing',
      image: finecleaner,
      features: [
        'Removes dust and small particles left after pre-cleaning',
        'Aspiration system for precise filtering',
        'Robust and low maintenance',
      ],
      specifications: 'Material: Metal sieve, Frame: Laminated wood, Output: High precision cleaning',
    },
    {
      id: 3,
      name: 'STONE SEPARATOR',
      category: 'equipment',
      image: stopesepertor,
      features: [
        'Separates stones, glass, and metal from seeds by density',
        'Low noise and long life via vibro motors',
        'Prevents rice breakage during cleaning',
      ],
      specifications: 'Motor: Vibro based, Tray: De-stoning tray, Function: Density-based separation',
    },
    {
      id: 4,
      name: 'PADDY HUSKER',
      category: 'storage',
      image: paddyhusker,
      features: [
        'Removes husk from paddy with minimal breakage',
        'Pneumatic control for smooth hulling',
        'Supports oats, barley, millet, sunflower seeds',
      ],
      specifications: 'Control: Pneumatic, Application: Multi-crop, Maintenance: Easy',
    },
    {
      id: 5,
      name: 'PADDY & RICE SEPARATOR',
      category: 'equipment',
      image: paddy,
      features: [
        'Separates brown rice from paddy efficiently',
        'Highly precise sorting',
        'Adjustable and stable separation performance',
      ],
      specifications: 'Type: Gravity-based separator, Adjustment: Manual & automatic',
    },
    {
      id: 6,
      name: 'RICE WHITENER',
      category: 'quality',
      image: ricewhitener,
      features: [
        'Removes bran layer producing uniform white rice',
        'Minimum breakage and moisture loss',
        'Mounted manometer for pressure control',
      ],
      specifications: 'Applicable Rice Types: Raw, parboiled, steamed, Control: Chamber pressure via manometer',
    },
    {
      id: 7,
      name: 'SILKY POLISHER',
      category: 'quality',
      image: silkypolisher,
      features: [
        'Smooth shiny finish with water spray',
        'Dust removal system with less energy use',
        'Humidity control ensures perfect polish',
      ],
      specifications: 'Operation: Water spray, Humidity: Controlled, Energy: Low consumption',
    },
    {
      id: 8,
      name: 'LENGTH GRADER',
      category: 'quality',
      image: lengthgrader,
      features: [
        'Separates head rice from broken grains',
        'Rotating design for efficient sorting',
        'Uses hardened SS screens to avoid clogging',
      ],
      specifications: 'Screen: Stainless steel, Speed: Adjustable, Maintenance: Low',
    },
    {
      id: 9,
      name: 'RICE THICKNESS GRADER',
      category: 'quality',
      image: rice,
      features: [
        'Classifies rice based on thickness',
        'Enhances rice uniformity and quality',
        'Used for de-hulling barley, sunflower, etc.',
      ],
      specifications: 'Control: Pneumatic, Accuracy: High, Shelling: High degree',
    },
    {
      id: 10,
      name: 'PADDY CLEANER',
      category: 'quality',
      image: paddycleaner,
      features: [
        'Removes fine impurities after pre-cleaning',
        'Top drum for strings, husk; enclosed sieves for dust-free operation',
        'Effective dust aspiration system',
      ],
      specifications: 'Screens: Easily removable, Dust control: Fully enclosed, Operation: Reliable',
    },
    {
      id: 11,
      name: 'BUCKET ELEVATOR',
      category: 'equipment',
      image: bucketElevator,
      features: [
        'Efficiently conveys bulk materials like grains & fertilizers',
        'Belt bucket elevator for vertical lifting',
        'Reduces spillage, high-capacity transport',
      ],
      specifications: 'Type: Belt bucket, Operation: Easy, Use: Vertical bulk transport',
    },
    {
      id: 12,
      name: 'FLOUR SHIFTER',
      category: 'equipment',
      image: flourshifter,
      features: [
        'It has high strength and stability and performs well in harsh industrial environments',
        'Belt bucket elevator for vertical lifting',
        'maintains the consistency and texture of the product.',
      ],
      specifications: ' separate various impurities in flour Operation: Easy, Use: Vertical bulk transport',
    },
    {
      id: 13,
      name: 'VIBRO CLASSIFIER',
      category: 'equipment',
      image: VIBROCLASSIFIER,
      features: [
        'Adjustable screen angle for better performance',
        'Vibrating screen cleaning method Fully enclosed body for dust-free operation',
        'Low maintenance and high accuracy.',
      ],
      specifications: 'Vibrating screen cleaning method, Operation: Easy, Use: Vertical bulk transport',
    }
  ];
  

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary-offwhite min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Our Products & Services
          </h1>
          <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive agricultural solutions designed to enhance productivity and sustainability
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-opensans text-gray-600">Filter by category</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium font-opensans transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative group bg-gray-100 flex items-center justify-center h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium font-opensans">
                    {categories.find(cat => cat.id === product.category)?.name.split(' ')[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary-green mb-2">
                    {product.name}
                  </h3>
                  
                

                  <div className="mb-4">
                    <h4 className="font-opensans font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-green rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-opensans font-semibold text-gray-800 mb-2">Specifications:</h4>
                    <p className="text-sm text-gray-600 font-opensans">
                      {product.specifications}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-green text-white py-2 px-4 rounded-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Inquire</span>
                    </button>
                    <a href="/brochure.pdf" download>
  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2">
    <Download className="h-4 w-4" />
    <span>Download</span>
  </button>
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-opensans text-xl text-gray-600">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">
            Need Custom Solutions?
          </h2>
          <p className="font-opensans text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts can design and manufacture custom agricultural equipment tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-green px-8 py-4 rounded-lg text-lg font-medium font-opensans hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium font-opensans hover:bg-white hover:text-primary-green transition-colors duration-200 flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;