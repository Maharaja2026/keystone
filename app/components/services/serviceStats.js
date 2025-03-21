"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGlobeAsia, FaHandshake, FaChartLine } from 'react-icons/fa';

const ServiceStats = () => {
  const stats = [
    {
      icon: <FaUserTie />,
      number: "5000+",
      label: "Professionals Placed"
    },
    {
      icon: <FaGlobeAsia />,
      number: "50+",
      label: "Countries Served"
    },
    {
      icon: <FaHandshake />,
      number: "1000+",
      label: "Business Partners"
    },
    {
      icon: <FaChartLine />,
      number: "95%",
      label: "Success Rate"
    }
  ];

  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-gilroy-semibold mb-2">
                {stat.number}
              </h3>
              <p className="text-blue-100">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;