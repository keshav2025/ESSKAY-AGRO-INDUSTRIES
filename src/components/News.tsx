import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "India's Summer Sowing 2025: Record Increase in Crop Area",
      excerpt: "The area under summer crops in India has increased by 6.5 lakh hectares over last year, with rice and pulses seeing the biggest gains.",
      date: "2025-03-12",
      category: "Crop Trends",
      image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" // Indian rice field
    },
    {
      title: "ICAR to Launch Two Genome Edited Rice Varieties",
      excerpt: "The Indian Council of Agricultural Research is set to launch two new rice varieties developed using genome editing, promising higher yields and climate resilience.",
      date: "2025-05-04",
      category: "Innovation",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" // Scientist in field
    },
    {
      title: "AI and Technology Transforming Indian Farms",
      excerpt: "Indian farmers are increasingly adopting AI-powered tools for efficient water, fertilizer, and pest management, boosting productivity and sustainability.",
      date: "2025-02-07",
      category: "Technology",
      image: "https://images.pexels.com/photos/5029856/pexels-photo-5029856.jpeg" // Smart farming/AI
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
         
        </div>
      </div>
    </section>
  );
};

export default News;