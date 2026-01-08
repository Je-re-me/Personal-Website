import { motion } from 'framer-motion';

export default function FadeInText({ 
  children, 
  delay = 0, 
  duration = 0.8,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  className = '',
  once = true,
  amount = 0.3
}) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {}
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
