"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurMission = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-gilroy-semibold text-[#212121]">
                Our Mission & Purpose
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Keystone, we're committed to bridging the gap between exceptional 
                talent and growing businesses, creating opportunities that transform 
                lives and drive organizational success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
              >
                <h3 className="text-xl font-gilroy-semibold text-blue-600 mb-3">Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in innovative workforce solutions, setting 
                  new standards in HR excellence.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
              >
                <h3 className="text-xl font-gilroy-semibold text-blue-600 mb-3">Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Excellence</li>
                  <li>• Integrity</li>
                  <li>• Innovation</li>
                  <li>• Commitment</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Interactive Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="relative h-full">
              <Image
                src="/mission-1.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative">
                <Image
                  src="/mission-2.jpg"
                  alt="Global Network"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/mission-3.jpg"
                  alt="Professional Excellence"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg">
              <p className="text-center font-gilroy-medium">
                Transforming HR Solutions Since 2013
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;