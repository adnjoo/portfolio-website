'use client';

import { motion } from 'framer-motion';

export default function FramerPill({ items, idx }: any) {
  return (
    <motion.div
      className='framer-pill border flex rounded-xl overflow-x-hidden'
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      whileTap={{ cursor: 'grabbing' }}
      initial={{ x: -150, opacity: 0 }} // Initial state for the container
      animate={{ x: idx * 10, opacity: 1 }} // Animate to this state
      transition={{ duration: 5 }} // Transition settings
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
          transition={{ duration: 3, delay: index * 1 }} // Staggered transition
        />
      ))}
    </motion.div>
  );
}
