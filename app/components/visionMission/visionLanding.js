"use client";
import React from 'react';
import { motion } from 'framer-motion';

const VisionLanding = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
      
      {/* Vision Mission SVG Background */}
      <div 
        className="absolute inset-0 bg-[url('/VisionMission.svg')] bg-no-repeat "
        style={{ 
          backgroundSize: '100%',
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-5xl lg:text-6xl font-gilroy-semibold text-[#212121] leading-tight mb-8">
            Shaping the Future of
            <span className="text-blue-600 block mt-2">Global Workforce</span>
          </h1>
          
          <p className="text-xl text-gray-600 font-gilroy-regular leading-relaxed mb-12">
            Our vision and mission drive us to revolutionize HR solutions and create 
            meaningful impact in the global workforce landscape.
          </p>

          <div className="flex justify-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl text-blue-600">10+</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-gilroy-semibold text-[#212121]">Years of</h3>
                <p className="text-gray-600">Excellence</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl text-blue-600">50+</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-gilroy-semibold text-[#212121]">Countries</h3>
                <p className="text-gray-600">Worldwide</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionLanding;