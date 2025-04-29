import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Distribution from './sections/Distribution';
import WhyChooseUs from './sections/WhyChooseUs';
import CallToAction from './sections/CallToAction';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import WaterAnimation from './components/WaterAnimation';

function App() {
  return (
    <AnimatePresence>
      <div className="relative overflow-hidden">
        <WaterAnimation />
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Distribution />
          <WhyChooseUs />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;