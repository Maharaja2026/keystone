"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Container animation for overall easing
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.2, ease: 'easeOut' } 
  },
};

// Image container animation: starting hidden (shifted left) and then revealing slowly
const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1, ease: 'easeOut' } 
  },
};

// Shine overlay animation: a brief shine effect that fades in/out after image load
const shineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.8, 0],
    transition: { duration: 1.5, ease: 'easeInOut', delay: 1 }
  }
};

// Text container animation: shift text little right initially and then slide it in
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const Business = () => {
  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen p-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row max-w-6xl w-full shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <motion.div 
          className="md:flex-1 relative overflow-hidden"
          variants={imageVariants}
        >
          <img
            src="/business.svg"
            alt="Business Team"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-white mix-blend-lighten"
            variants={shineVariants}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="md:flex-1 p-10 flex flex-col justify-between"
          variants={textVariants}
        >
          <div className="ml-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight"
            >
              Your Partner in{' '}
              <span className="text-indigo-600">HR, Manpower, and Visa</span>
              <span className="block text-indigo-600">Solutions.</span>
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-4 text-lg leading-relaxed"
            >
              We simplify the complexities of workforce management and
              international mobility with tailored HR and visa services.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 text-base leading-relaxed"
            >
              Built on trust, expertise, and dedication, our team delivers
              reliable manpower and seamless visa support.
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Read More
            </motion.button>
          </div>
          <motion.div 
            className="flex justify-between mt-12 ml-4"
          >
            <div className="text-center">
              <motion.h2 className="text-3xl font-bold text-indigo-600">
                500+
              </motion.h2>
              <motion.p className="text-gray-500 text-sm">
                Satisfied Customers
              </motion.p>
            </div>
            <div className="text-center">
              <motion.h2 className="text-3xl font-bold text-indigo-600">
                10+
              </motion.h2>
              <motion.p className="text-gray-500 text-sm">
                Years Experience
              </motion.p>
            </div>
            <div className="text-center">
              <motion.h2 className="text-3xl font-bold text-indigo-600">
                40+
              </motion.h2>
              <motion.p className="text-gray-500 text-sm">
                Projects Completed
              </motion.p>
            </div>
          </motion.div>
    </motion.div>
  </div>
</motion.div>
  );
};

export default Business;
