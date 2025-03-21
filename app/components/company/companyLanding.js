"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const CompanyLanding = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content with Animated Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-gilroy-medium">
                Welcome to Keystone
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-gilroy-semibold text-[#212121] leading-tight">
              Building Tomorrow's
              <span className="relative">
                <span className="relative z-10 text-blue-600"> Workforce</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 font-gilroy-regular leading-relaxed">
              Since 2013, Keystone has been revolutionizing the HR industry with innovative 
              solutions in staffing, visa services, and workforce management.
            </p>

            <div className="flex gap-8 pt-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-xl"
              >
                <span className="block text-4xl font-gilroy-semibold text-blue-600 mb-2">2K+</span>
                <span className="text-gray-600">Successful Placements</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-xl"
              >
                <span className="block text-4xl font-gilroy-semibold text-blue-600 mb-2">98%</span>
                <span className="text-gray-600">Client Satisfaction</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image with Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="/ourcompany.jpg"
                alt="Keystone Team"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl">
                <h3 className="text-2xl font-gilroy-semibold text-blue-600">10+ Years</h3>
                <p className="text-gray-600">Industry Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLanding;
