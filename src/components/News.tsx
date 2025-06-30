import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: 'New Processing Plant Inaugurated in Maharashtra',
      excerpt: 'ESSKAY AGRO expands its manufacturing capabilities with a state-of-the-art processing facility.',
      date: '2024-01-15',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg'
    },
    {
      title: 'Partnership with Leading Agricultural Universities',
      excerpt: 'Collaborative research initiatives to develop next-generation farming technologies.',
      date: '2024-01-10',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
    },
    {
      title: 'Sustainable Agriculture Awards 2024',
      excerpt: 'Recognition for our commitment to environmental sustainability and innovative farming solutions.',
      date: '2024-01-05',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary-green mb-4">
            Latest News & Updates
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, achievements, and innovations at ESSKAY AGRO INDUSTRIES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium font-opensans">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm font-opensans mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl text-primary-green mb-3 group-hover:text-primary-brown transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="font-opensans text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center text-primary-green font-opensans font-medium group-hover:text-primary-brown transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-green text-white px-8 py-3 rounded-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;