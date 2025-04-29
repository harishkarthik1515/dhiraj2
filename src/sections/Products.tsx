import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/AnimatedElement';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  sizes: string[];
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, sizes, delay }) => {
  return (
    <AnimatedElement
      delay={delay}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden h-64">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 text-white">
              <div className="font-semibold">Available sizes:</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {sizes.map((size, index) => (
                  <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

const Products: React.FC = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Pure Life Water",
      description: "Crystal clear packaged drinking water with essential minerals for healthy hydration.",
      sizes: ["200ml", "500ml", "1L", "2L", "20L"],
      delay: 0.1
    },
    {
      image: "https://images.pexels.com/photos/2615326/pexels-photo-2615326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sparkle Soda",
      description: "Refreshing carbonated beverages available in multiple flavors.",
      sizes: ["250ml", "500ml", "1L", "2L"],
      delay: 0.2
    },
    {
      image: "https://images.pexels.com/photos/8604328/pexels-photo-8604328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Fruit Fizz",
      description: "Delicious fruit-flavored carbonated drinks for a refreshing experience.",
      sizes: ["250ml", "500ml", "1L"],
      delay: 0.3
    },
    {
      image: "https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Premium Mineral Water",
      description: "Enhanced with natural minerals for superior taste and health benefits.",
      sizes: ["500ml", "1L", "2L"],
      delay: 0.4
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="section-title text-center">Our <span className="text-primary-600">Products</span></h2>
          <p className="section-subtitle text-center mx-auto">
            Discover our range of high-quality packaged drinking water and refreshing carbonated beverages
          </p>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <AnimatedElement delay={0.5} className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Request Product Information
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Products;