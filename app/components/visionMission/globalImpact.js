"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaHandHoldingHeart } from 'react-icons/fa';

const GlobalImpact = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-gilroy-semibold text-[#212121]">
            Our Global Impact
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference in workforce management across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-y-6 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-gilroy-semibold text-[#212121] mb-4">
                Workforce Development
              </h3>
              <p className="text-gray-600">
                Empowering professionals with opportunities for growth and development
                across international markets.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-y-6 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobeAmericas className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-gilroy-semibold text-[#212121] mb-4">
                Global Connectivity
              </h3>
              <p className="text-gray-600">
                Building bridges between talented professionals and leading organizations
                worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-y-6 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandHoldingHeart className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-gilroy-semibold text-[#212121] mb-4">
                Sustainable Growth
              </h3>
              <p className="text-gray-600">
                Creating lasting impact through responsible business practices and
                sustainable workforce solutions.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 px-8 py-4 rounded-full">
            <p className="text-blue-600 font-gilroy-medium">
              Join us in shaping the future of global workforce management
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalImpact;