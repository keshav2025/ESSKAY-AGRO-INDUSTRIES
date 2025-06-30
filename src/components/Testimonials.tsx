import React from 'react';
import { Star, Quote } from 'lucide-react';
import img1 from '../components/assests/image.png'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      company: 'Patel Agro Farms',
      location: 'Gujarat',
      rating: 5,
      testimonial: 'ESSKAY AGRO has transformed our farming operations with their cutting-edge equipment. The quality and reliability of their products is exceptional.',
      image: img1
    },
    {
      name: 'Sunita Sharma',
      company: 'Green Valley Processing',
      location: 'Punjab',
      rating: 5,
      testimonial: 'Outstanding service and support. Their processing machinery has increased our productivity by 40% while maintaining the highest quality standards.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Kumar Reddy',
      company: 'Reddy Irrigation Solutions',
      location: 'Andhra Pradesh',
      rating: 5,
      testimonial: 'The irrigation systems from ESSKAY AGRO are game-changers. Water efficiency has improved dramatically across all our client farms.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary-green mb-4">
            Client Success Stories
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our agricultural solutions have helped farmers and businesses achieve exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-offwhite p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-primary-green opacity-20" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-primary-green">
                    {testimonial.name}
                  </h4>
                  <p className="font-opensans text-sm text-gray-600">
                    {testimonial.company}, {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="font-opensans text-gray-700 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;