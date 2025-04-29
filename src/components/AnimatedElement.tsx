import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  variants?: Variants;
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  variants = defaultVariants,
  className = '',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible?.transition,
        delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;