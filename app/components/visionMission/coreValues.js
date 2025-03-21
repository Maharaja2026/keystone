"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Pioneering solutions in HR and workforce management"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Building trust through transparent practices"
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      description: "Delivering superior service quality consistently"
    },
    {
      icon: <FaGlobe />,
      title: "Global Impact",
      description: "Creating positive change across borders"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-gilroy-semibold text-[#212121]">
            Our Core Values
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The principles that guide our journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-600 text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;