import React from 'react';
import { Truck, MapPin, BarChart3, PieChart } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import { motion } from 'framer-motion';

const Distribution: React.FC = () => {
  // Mock distribution data for visualization
  const regions = [
    { name: 'North Region', percentage: 30, color: 'primary-600' },
    { name: 'South Region', percentage: 25, color: 'primary-500' },
    { name: 'East Region', percentage: 20, color: 'primary-400' },
    { name: 'West Region', percentage: 25, color: 'primary-300' },
  ];

  return (
    <section id="distribution" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-50 rounded-l-3xl -mr-12"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <h2 className="section-title text-center">Our <span className="text-primary-600">Distribution Network</span></h2>
          <p className="section-subtitle text-center mx-auto">
            Fast and reliable delivery across the region through our extensive network
          </p>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute top-4 right-4 bg-primary-50 rounded-full p-2">
                <BarChart3 size={24} className="text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6">Regional Coverage</h3>
              
              <div className="space-y-6">
                {regions.map((region, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{region.name}</span>
                      <span>{region.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${region.percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
                        className={`h-2.5 rounded-full bg-${region.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-primary-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Total Coverage</h4>
                    <p className="text-gray-600">Serving over 500+ towns and cities</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.4}>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg p-6 text-white">
                <Truck size={32} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Own Fleet of Vehicles</h3>
                <p>
                  Our dedicated transportation fleet ensures timely delivery and maintains the quality of our products during transit.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6 hover:shadow-lg transition-all">
                  <div className="text-primary-600 font-bold text-4xl mb-2">
                    <span>24</span>
                    <span className="text-xl text-gray-500">hrs</span>
                  </div>
                  <p className="text-gray-700">Delivery turnaround time for retailers</p>
                </div>
                
                <div className="card p-6 hover:shadow-lg transition-all">
                  <div className="text-primary-600 font-bold text-4xl mb-2">
                    <span>500</span>
                    <span className="text-xl text-gray-500">+</span>
                  </div>
                  <p className="text-gray-700">Towns and cities covered</p>
                </div>
                
                <div className="card p-6 hover:shadow-lg transition-all md:col-span-2">
                  <div className="flex items-center">
                    <PieChart size={32} className="text-primary-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-lg">Expanding Reach</h4>
                      <p className="text-gray-600">Adding 10+ new areas to our distribution network every month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement delay={0.6} className="mt-16 text-center">
          <a href="#become-distributor" className="btn-primary">
            Join Our Distribution Network
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Distribution;