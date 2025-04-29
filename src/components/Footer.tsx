import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement>
            <div>
              <div className="flex items-center mb-4">
                <Droplets size={28} className="text-primary-400 mr-2" />
                <span className="font-montserrat font-bold text-xl">Dhiraj Agro</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leaders in packaged drinking water and carbonated soda manufacturing and distribution since 2014.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Products</a></li>
                <li><a href="#distribution" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Distribution</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Industrial Area, Sector 2, City, State - 123456</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                  <a href="tel:+911234567890" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">+91 12345 67890</a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                  <a href="mailto:info@dhirajagro.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">info@dhirajagro.com</a>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dhiraj Agro Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;