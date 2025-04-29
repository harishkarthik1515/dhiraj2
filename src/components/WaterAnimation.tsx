import React, { useEffect, useRef } from 'react';

const WaterAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = window.innerWidth;
    const dropCount = Math.floor(width / 30); // More drops for better effect
    
    const createSplash = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const splash = document.createElement('div');
        splash.className = 'water-splash';
        splash.style.left = `${x}px`;
        splash.style.bottom = `${window.innerHeight - y}px`;
        splash.style.animationDelay = `${i * 0.1}s`;
        splash.style.transform = `rotate(${120 * i}deg)`;
        container.appendChild(splash);
        
        setTimeout(() => splash.remove(), 1000);
      }
    };
    
    const createDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'water-drop';
      
      // Random positioning and size
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * width;
      
      drop.style.left = `${startX}px`;
      drop.style.width = `${size}px`;
      drop.style.height = `${size * 1.5}px`;
      
      container.appendChild(drop);
      
      // Handle drop animation end and create splash
      const handleAnimationEnd = () => {
        createSplash(startX, window.innerHeight);
        drop.remove();
      };
      
      drop.addEventListener('animationend', handleAnimationEnd);
    };
    
    // Create initial drops
    for (let i = 0; i < dropCount; i++) {
      setTimeout(() => createDrop(), Math.random() * 2000);
    }
    
    // Continue creating drops
    const interval = setInterval(() => {
      if (container.children.length < dropCount * 1.5) {
        createDrop();
      }
    }, 200);
    
    return () => {
      clearInterval(interval);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="water-animation-container" />;
};

export default WaterAnimation;