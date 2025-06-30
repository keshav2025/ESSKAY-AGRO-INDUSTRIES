import React, { useState } from 'react';
import { Search, Filter, Download, Phone, Mail } from 'lucide-react';
import preclenner from '../components/assests/Screenshot 2025-06-30 at 11.45.53 AM.png';
import img2 from '../components/assests/Screenshot 2025-06-30 at 11.47.54 AM.png';
import img01 from '../components/assests/img01.png';

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
      price: '₹2,50,000',
      image: img01,
      features: ['remove unwanted straws', 'remove husk grains', 'Multi-Crop Compatibility'],
      specifications: 'Working Width: 3-12m, Power: 80-150 HP, Precision: ±2cm'
    },
    {
      id: 2,
      name: 'FINE CLEANER',
      category: 'processing',
      price: '₹15,00,000',
      image: img2,
      features: ['Automated Cleaning', 'Moisture Control', 'Quality Sorting'],
      specifications: 'Capacity: 5-50 tons/hr, Power: 200-500 HP, Efficiency: 98%'
    },
    {
      id: 3,
      name: 'STONE SEPARATOR',
      category: 'irrigation',
      price: '₹75,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Weather Integration', 'Soil Moisture Monitoring', 'Remote Control'],
      specifications: 'Coverage: 100 acres, Sensors: 50+, Battery: 72hrs backup'
    },
    {
      id: 4,
      name: 'PADDY HUSKER',
      category: 'storage',
      price: '₹5,00,000',
      image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
      features: ['Temperature Control', 'Humidity Management', 'Pest Prevention'],
      specifications: 'Capacity: 100-1000 tons, Temperature: ±1°C, Humidity: ±5%'
    },
    {
      id: 5,
      name: 'PADDY & RICESEPARATOR',
      category: 'equipment',
      price: '₹25,00,000',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      features: ['Multi-Crop Harvesting', 'GPS Mapping', 'Yield Monitoring'],
      specifications: 'Header Width: 6-12m, Engine: 300-500 HP, Tank: 8000L'
    },
    {
      id: 6,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
    },
    {
      id: 7,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
    },
    {
      id: 8,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
    },
    {
      id: 9,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
    },
    {
      id: 10,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
    },
    {
      id: 11,
      name: 'RICE WHITENER',
      category: 'quality',
      price: '₹8,00,000',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
      features: ['Nutritional Analysis', 'Contamination Detection', 'Rapid Results'],
      specifications: 'Tests: 50+ parameters, Speed: 100 samples/hr, Accuracy: 99.9%'
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
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium font-opensans">
                    {categories.find(cat => cat.id === product.category)?.name.split(' ')[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary-green mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="font-opensans text-2xl font-bold text-primary-brown mb-4">
                    {product.price}
                  </p>

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