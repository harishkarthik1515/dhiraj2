import React from 'react';
import { ArrowRight, Truck, Store, User, MailCheck } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section id="become-distributor" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90"></div>
      
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become a Distributor and Grow Your Business With Us
              </h2>
              
              <p className="text-white/90 text-lg mb-8">
                Join our network of 120+ successful distributors and be part of our growing family. 
                We provide comprehensive support to ensure your business thrives.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <Truck size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Direct Supply from Factory</h4>
                    <p className="text-white/80">Get products directly from our manufacturing units</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <Store size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Marketing Support</h4>
                    <p className="text-white/80">Receive branding materials and promotional support</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dedicated Account Manager</h4>
                    <p className="text-white/80">Personal assistance to help grow your business</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.3}>
            <div className="bg-white rounded-xl shadow-xl p-8" id="contact">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your city"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your business"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Submit Inquiry
                    <ArrowRight size={18} className="ml-2" />
                  </motion.button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <a href="mailto:info@dhirajagro.com" className="flex items-center justify-center text-primary-600 hover:text-primary-700">
                  <MailCheck size={18} className="mr-2" />
                  Or email us at info@dhirajagro.com
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;