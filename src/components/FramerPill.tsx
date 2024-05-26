'use client';

import { motion } from 'framer-motion';

export default function FramerPill({ items, idx }: any) {
  return (
    <motion.div
      className='framer-pill border border-gray-400 flex rounded-xl overflow-x-hidden dark:border-gray-600'
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      whileTap={{ cursor: 'grabbing' }}
      initial={{ x: -150, opacity: 0 }} // Initial state for the container
      animate={{ x: idx * 10, opacity: 1 }} // Animate to this state
      transition={{ duration: 1 }} // Transition settings
    >
      {items.map((item: any, index: any) => (
        <motion.img
          key={index}
          src={item}
          alt={`item-${index}`}
          className='framer-pill-item h-10 w-10 mx-1'
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0, opacity: 0 }} // Initial state for the images
          animate={{ scale: 1, opacity: 1 }} // Animate to this state
          transition={{ duration: 1.5, delay: index * 0.5 }} // Staggered transition
        />
      ))}
    </motion.div>
  );
}
