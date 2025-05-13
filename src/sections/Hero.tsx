import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Droplets, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [droplets, setDroplets] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Generate random droplet properties
  const generateDroplet = () => {
    return {
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 20 + 5,
      duration: Math.random() * 7 + 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.3 + 0.1,
      rotation: Math.random() * 20 - 10, // Random rotation for natural look
    };
  };

  // Initialize droplets only on desktop
  useEffect(() => {
    // Only run animation if not on mobile
    if (!isMobile) {
      const initialDroplets = Array(35).fill().map(() => generateDroplet());
      setDroplets(initialDroplets);

      // Continuously add new droplets
      const interval = setInterval(() => {
        setDroplets(prev => {
          if (prev.length > 60) {
            const newDroplets = [...prev.slice(-50), generateDroplet()];
            return newDroplets;
          }
          return [...prev, generateDroplet()];
        });
      }, 400);

      // Cleanup
      return () => clearInterval(interval);
    } else {
      // Clear droplets on mobile
      setDroplets([]);
    }
  }, [isMobile]);
  
  // Set visibility for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Create ripple effect on click (only on desktop)
  const [ripples, setRipples] = useState([]);
  
  const addRipple = (e) => {
    // Only add ripples on desktop
    if (isMobile) return;
    
    const heroRect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - heroRect.left;
    const y = e.clientY - heroRect.top;
    
    const newRipple = {
      id: Math.random(),
      x,
      y,
    };
    
    setRipples([...ripples, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 2000);
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-20 pb-16"
      style={{
        background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)'
      }}
      onClick={addRipple}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-cyan-800 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, cyan 2%, transparent 0%), radial-gradient(circle at 75px 75px, cyan 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>
      
      {/* Improved water texture background - enhanced visibility on mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/kVRYbdmk/Bailley1-min.webp")', 
          opacity: isMobile ? 0.3 : 0.4, // Better opacity for mobile
          mixBlendMode: 'soft-light'
        }}
      ></div>

      {/* Water ripple effects - only on desktop */}
      {!isMobile && ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 2s linear forwards',
          }}
        />
      ))}
      
      {/* Enhanced Water Droplet Animation - only shown on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {droplets.map(droplet => (
            <div
              key={droplet.id}
              className="absolute z-10"
              style={{
                left: `${droplet.left}%`,
                top: -30,
                width: droplet.size,
                height: droplet.size * 1.7,
                opacity: droplet.opacity,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(78,222,240,0.7) 50%, rgba(6,182,212,0.6) 100%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255,255,255,0.4)',
                transform: `rotate(${droplet.rotation}deg)`,
                animation: `droplet ${droplet.duration}s ${droplet.delay}s linear infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Left Side Card Image - only on desktop (lg) */}
      <div 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}
      >
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-r-xl shadow-lg border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-cyan-300/30 hover:shadow-xl">
          <img src="https://i.ibb.co/kVRYbdmk/Bailley1-min.webp"  alt="Product showcase left" className="rounded-lg h-96 w-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent rounded-r-xl">
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold text-xl mb-1">Premium Water</p>
              <p className="text-sm text-cyan-100 opacity-80">Our signature product line</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Card Image - only on desktop (lg) */}
      <div 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
      >
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-l-xl shadow-lg border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-cyan-300/30 hover:shadow-xl">
          <img src="https://i.ibb.co/YBqtk1rY/40138611-2-3-bailley-packaged-drinking-water-720x.webp" alt="Product showcase right" className="rounded-lg h-96 w-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent rounded-l-xl">
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold text-xl mb-1">Sparkling Soda</p>
              <p className="text-sm text-cyan-100 opacity-80">Refreshment redefined</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center text-white max-w-4xl mx-auto">
          {/* Logo/Brand mark */}
          <div 
            className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <Droplets size={isMobile ? 36 : 48} className="text-cyan-100" />
          </div>
          
          <h1 
            className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Pure Refreshment,{' '}
            <span className="text-cyan-100 relative inline-block">
              Trusted Since 2014
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-200/40 rounded-full"></span>
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-cyan-50 mb-8 md:mb-10 max-w-2xl leading-relaxed transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Leaders in packaged drinking water and carbonated soda, delivering freshness 
            and quality to over <span className="font-semibold text-white">12,000</span> retail touchpoints across the region.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a 
              href="#products" 
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-cyan-900 rounded-full font-medium hover:bg-cyan-50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Products
            </a>
            <a 
              href="#become-distributor" 
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
            >
              Become a Distributor
              <ArrowRight size={isMobile ? 16 : 18} className="ml-2" />
            </a>
          </div>
          
          {/* Social proof - improved visibility on mobile */}
          <div 
            className={`mt-12 md:mt-16 flex flex-col items-center transform transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center space-x-1 text-cyan-100 mb-3 md:mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-cyan-100 text-xs md:text-sm font-medium">Trusted by over 500+ businesses nationwide</p>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific styling to enhance content visibility */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 to-cyan-900/60 pointer-events-none z-5"></div>
      )}
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 10px;
            height: 10px;
            opacity: 0.8;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-35px) translateX(-15px);
          }
          75% {
            transform: translateY(-20px) translateX(15px);
          }
        }
        
        @keyframes droplet {
          0% {
            top: -30px;
            opacity: 0;
            transform: rotate(var(--rotation));
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            top: 110%;
            opacity: 0;
            transform: rotate(var(--rotation));
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;