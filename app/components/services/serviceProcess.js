"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We understand your specific requirements and business objectives"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Develop tailored strategies for your HR, manpower, or visa needs"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute the planned solutions with precision and professionalism"
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Provide continuous assistance and monitoring of services"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-gilroy-semibold text-[#212121]">
            Our Service Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple and effective steps to ensure quality service delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-6xl font-gilroy-semibold text-blue-100 absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;