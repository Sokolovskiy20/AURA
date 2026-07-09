import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('hover-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: 'transparent',
      border: '1px solid var(--accent-gold)',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: 'var(--accent-gold)',
      border: 'none',
      mixBlendMode: 'difference',
      scale: 1.2
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovered ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <div 
        className="cursor-dot" 
        style={{ 
          transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`,
          opacity: isHovered ? 0 : 1
        }} 
      />
    </>
  );
};

export default Cursor;
