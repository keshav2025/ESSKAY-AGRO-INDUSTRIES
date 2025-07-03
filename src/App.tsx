import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // 👉 Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'applications':
        return <Applications />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-offwhite">
      <Helmet>
        <title>Esskay Agro Industries | Rice Mill Machinery & Solutions</title>
        <meta name="description" content="Esskay Agro Industries: Leading manufacturer and supplier of rice mill machinery, paddy processing equipment, and agro solutions in India." />
        <meta name="keywords" content="Esskay Agro, rice mill, paddy processing, agro machinery, rice mill equipment, India" />
        <meta property="og:title" content="Esskay Agro Industries | Rice Mill Machinery & Solutions" />
        <meta property="og:description" content="Esskay Agro Industries: Leading manufacturer and supplier of rice mill machinery, paddy processing equipment, and agro solutions in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://esskayagro.com/" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Esskay Agro Industries | Rice Mill Machinery & Solutions" />
        <meta name="twitter:description" content="Esskay Agro Industries: Leading manufacturer and supplier of rice mill machinery, paddy processing equipment, and agro solutions in India." />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <WhatsAppButton />
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
