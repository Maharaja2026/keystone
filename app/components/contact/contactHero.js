"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-gilroy-semibold text-[#212121] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We're here to help you find the right solutions for your business needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;