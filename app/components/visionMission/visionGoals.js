"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VisionGoals = () => {
  const goals = [
    {
      title: "Global Excellence",
      description: "Becoming the world's leading workforce solutions provider by 2025",
      progress: 75
    },
    {
      title: "Digital Transformation",
      description: "Implementing cutting-edge HR tech solutions for seamless service delivery",
      progress: 85
    },
    {
      title: "Market Expansion",
      description: "Extending our presence to 100+ countries worldwide",
      progress: 60
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Goals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-gilroy-semibold text-[#212121] mb-8">
              Our Strategic Vision
              <span className="block text-blue-600 mt-2">& Future Goals</span>
            </h2>
            
            <div className="space-y-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  <div className="relative h-2 bg-blue-100 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute h-full bg-blue-600 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-blue-600 mt-2 block">
                    Progress: {goal.progress}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/OurStrategic.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-gilroy-semibold mb-2">Vision 2025</h3>
              <p className="text-sm opacity-90">Transforming the future of work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionGoals;