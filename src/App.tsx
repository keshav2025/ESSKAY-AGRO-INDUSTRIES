import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-offwhite">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;