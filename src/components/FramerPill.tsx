'use client';

import { motion } from 'framer-motion';

export default function FramerPill({ items, idx }: any) {
  return (
    <motion.div
      className='framer-pill flex overflow-x-hidden rounded-xl border border-gray-400 shadow-lg dark:border-gray-600' // Added shadow-lg for the container
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
          className='framer-pill-item mx-1 h-10 w-10' // Added shadow-md for the images
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0, opacity: 0 }} // Initial state for the images
          animate={{ scale: 1, opacity: 1 }} // Animate to this state
          transition={{ duration: 1.5, delay: index * 0.5 }} // Staggered transition
        />
      ))}
    </motion.div>
  );
}
