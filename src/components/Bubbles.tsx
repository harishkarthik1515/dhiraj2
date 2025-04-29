import React from 'react';

interface BubblesProps {
  count?: number;
  className?: string;
}

const Bubbles: React.FC<BubblesProps> = ({ count = 10, className = '' }) => {
  // Generate random bubbles
  const bubbles = Array.from({ length: count }).map((_, index) => {
    const size = Math.random() * 80 + 20; // 20-100px
    const left = Math.random() * 100; // 0-100%
    const delay = Math.random() * 5; // 0-5s delay
    const duration = Math.random() * 10 + 5; // 5-15s duration
    
    return {
      id: index,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={bubble.style}
        />
      ))}
    </div>
  );
};

export default Bubbles;