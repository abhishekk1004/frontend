import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

/**
 * ============================================
 * ⌨️ TYPING ANIMATION COMPONENT
 * Creates a typewriter effect for text
 * 
 * Props:
 * - text: The text to animate
 * - speed: Typing speed in ms (default: 100)
 * - delay: Initial delay before typing starts (default: 500)
 * ============================================
 */
const TypingAnimation = ({ 
  text, 
  className = '', 
  speed = 100, 
  delay = 500 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {/* Blinking cursor */}
      <motion.span
        animate={{ opacity: isComplete ? [1, 0] : 1 }}
        transition={{ 
          duration: 0.5, 
          repeat: isComplete ? Infinity : 0, 
          repeatType: 'reverse' 
        }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export default TypingAnimation;
