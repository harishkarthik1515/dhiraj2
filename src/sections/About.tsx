import React from 'react';
import { Droplets, Truck, Store } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import CounterAnimation from '../components/CounterAnimation';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <h2 className="section-title text-center">About <span className="text-primary-600">Dhiraj Agro</span></h2>
          <p className="section-subtitle text-center mx-auto">
            Pure quality and refreshment, delivered consistently since 2014
          </p>
        </AnimatedElement>
        
        <div className="mt-16">
          <AnimatedElement delay={0.4}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-6 text-lg">
                Since 2014, Dhiraj Agro Pvt Ltd has been manufacturing and distributing high-quality 
                packaged drinking water and carbonated soda. Our commitment to purity, taste, and 
                reliability has made us a trusted name in the beverage industry.
              </p>
              <p className="text-gray-700 mb-12 text-lg">
                Our operations include our own fleet of transportation vehicles and a distribution network 
                of 120 distributors and over 12,000 retail touchpoints, ensuring our products reach 
                consumers fresh and on time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-primary-600 font-bold text-4xl mb-2">
                    <CounterAnimation end={10} suffix="+" />
                  </div>
                  <p className="text-gray-800">Years of Experience</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-primary-600 font-bold text-4xl mb-2">
                    <CounterAnimation end={120} suffix="+" />
                  </div>
                  <p className="text-gray-800">Distributors</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-primary-600 font-bold text-4xl mb-2">
                    <CounterAnimation end={12000} suffix="+" />
                  </div>
                  <p className="text-gray-800">Retail Touchpoints</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement delay={0.3} className="card hover:shadow-xl p-6 transition-all">
            <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Droplets size={28} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pure Quality</h3>
            <p className="text-gray-600">
              Our state-of-the-art purification systems ensure the highest standards of purity and taste in every bottle.
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.4} className="card hover:shadow-xl p-6 transition-all">
            <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Truck size={28} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Own Fleet</h3>
            <p className="text-gray-600">
              We operate our own transportation fleet, ensuring timely and reliable delivery to all our distributors.
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.5} className="card hover:shadow-xl p-6 transition-all">
            <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Store size={28} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
            <p className="text-gray-600">
              Our extensive network ensures our products are available across 12,000+ retail outlets in the region.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;