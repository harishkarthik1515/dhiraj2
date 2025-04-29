import React from 'react';
import { Shield, CheckCircle, Clock, Medal, Truck, Users } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  color
}) => {
  return (
    <AnimatedElement delay={delay}>
      <motion.div 
        whileHover={{ y: -10 }}
        className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-${color}`}
      >
        <div className={`mb-4 bg-${color} bg-opacity-10 rounded-full p-3 inline-block text-${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </AnimatedElement>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield size={28} />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and state-of-the-art purification systems ensure premium quality in every bottle.',
      delay: 0.1,
      color: 'primary-600'
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Certified Products',
      description: 'All our products are certified by relevant regulatory bodies, meeting international quality standards.',
      delay: 0.2,
      color: 'primary-600'
    },
    {
      icon: <Clock size={28} />,
      title: 'Timely Delivery',
      description: 'Our own fleet of vehicles ensures prompt delivery, maintaining our commitment to punctuality.',
      delay: 0.3,
      color: 'primary-600'
    },
    {
      icon: <Medal size={28} />,
      title: 'Trusted Brand',
      description: 'With over a decade of experience, we have established ourselves as a trusted name in the industry.',
      delay: 0.4,
      color: 'primary-600'
    },
    {
      icon: <Truck size={28} />,
      title: 'Wide Availability',
      description: 'Our extensive distribution network ensures our products are available across 12,000+ retail outlets.',
      delay: 0.5,
      color: 'primary-600'
    },
    {
      icon: <Users size={28} />,
      title: 'Customer Support',
      description: 'Dedicated customer service team provides prompt assistance and resolves queries efficiently.',
      delay: 0.6,
      color: 'primary-600'
    }
  ];

  return (
    <section 
      id="why-us" 
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute left-0 top-20 w-32 h-32 bg-primary-100 rounded-full opacity-70"></div>
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-40"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <h2 className="section-title text-center">Why <span className="text-primary-600">Choose Us</span></h2>
          <p className="section-subtitle text-center mx-auto">
            We pride ourselves on delivering quality, reliability, and excellent service
          </p>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <AnimatedElement delay={0.7} className="mt-16 bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary-600">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-primary-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6">
              <Shield size={32} className="text-primary-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Quality Promise</h3>
              <p className="text-gray-600">
                At Dhiraj Agro, we are committed to maintaining the highest standards of quality and purity in all our products. 
                Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that you receive 
                nothing but the best. We stand behind every bottle that leaves our facility.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default WhyChooseUs;