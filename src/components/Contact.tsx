import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert('Failed to send. Please try again later.');
      });
  };
  

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'ESSKAY AGRO INDUSTRIES',
        'Khasra No. 111, Karala Majria',
        'Majri Road - 110081',
        'Delhi, India',
        <span key="gst"><strong>GSTIN:</strong> 07ABCDE1234F1Z5</span>
      ]
    },
  
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Sales: +919971074753',
        'Support: +919971074753',
        'Emergency: +919971074753'
       
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'esskayagroindustries@gmail.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Emergency Support: 24/7'
      ]
    }
  ];
 {/* Branches. yedi future mai jada branches add karni ho to uncomment this section */}
  // const branches = [
  //   {
  //     city: 'Mumbai',
  //     address: 'Plot 45, MIDC, Andheri East, Mumbai - 400099',
  //     phone: '+91 22 2345 6789',
  //     email: 'mumbai@esskayagro.com'
  //   },
  //   {
  //     city: 'Bangalore',
  //     address: 'No. 78, Electronic City, Bangalore - 560100',
  //     phone: '+91 80 2345 6789',
  //     email: 'bangalore@esskayagro.com'
  //   },
  //   {
  //     city: 'Chennai',
  //     address: 'No. 123, OMR Road, Chennai - 600097',
  //     phone: '+91 44 2345 6789',
  //     email: 'chennai@esskayagro.com'
  //   },
  //   {
  //     city: 'Pune',
  //     address: 'Plot 67, Pimpri-Chinchwad, Pune - 411018',
  //     phone: '+91 20 2345 6789',
  //     email: 'pune@esskayagro.com'
  //   }
  // ];

  const inquiryTypes = [
    'Product Information',
    'Technical Support',
    'Sales Inquiry',
    'Partnership Opportunity',
    'Service Request',
    'Complaint/Feedback',
    'Other'
  ];

  return (
    <div className="bg-primary-offwhite min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our experts for all your agricultural solution needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="font-montserrat font-bold text-3xl text-primary-green mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="font-opensans text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans"
                  >
                    <option value="">Select inquiry type...</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-opensans resize-none"
                    placeholder="Describe your requirements or message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-green text-white py-4 px-6 rounded-lg font-medium font-opensans hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green bg-opacity-10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary-green" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl text-primary-green mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="font-opensans text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              {/* <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green bg-opacity-10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary-green" />
                  </div>
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-primary-green mb-4">
              Find Us on Map
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Visit our head office and regional branches
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-xl mb-12 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary-green mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary-green mb-2">
                Interactive Map
              </h3>
              <p className="font-opensans text-gray-600">
              ESSKAY AGRO INDUSTRIES,
        Khasra No. 111, Karala Majria
        Majri Road - 110081
        Delhi, India
              </p>
            </div>
          </div>

          {/* Branches. yedi future mai jada branches add karni ho to uncomment this section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="bg-primary-offwhite p-6 rounded-xl shadow-lg text-center">
                <h3 className="font-montserrat font-bold text-xl text-primary-green mb-4">
                  {branch.city}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="font-opensans text-gray-600">{branch.address}</p>
                  <p className="font-opensans text-primary-green font-medium">{branch.phone}</p>
                  <p className="font-opensans text-primary-green">{branch.email}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-2xl text-red-800 mb-4">
            Emergency Support
          </h2>
          <p className="font-opensans text-red-700 mb-4">
            For urgent technical support or equipment breakdown assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543212"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium font-opensans hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Hotline: +919971074753</span>
            </a>
            <a
              href="mailto:esskayagroindustries@gmail.com"
              className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium font-opensans hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>esskayagroindustries@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;