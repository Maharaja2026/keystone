"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Link from "next/link";

// Variants for text container staggering animation
const textContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Variants for each text element
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Variants for the arrow icon, responding to the parent's hover state
const arrowVariant = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.5 } }
};

const Landing = () => {
  return (
    <div className="relative bg-white w-full min-h-screen flex flex-col m-0">
      {/* Hero Section */}
      <div className="w-full min-h-[70vh] mx-auto p-0 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 sm:px-12 lg:pl-20 mt-16 lg:mt-[70px] relative">
          <div
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-[75%] h-full bg-no-repeat bg-cover bg-center rounded-full shadow-2xl hidden lg:block"
            style={{
              backgroundImage: "url('/ellipse.png')",
              filter: "blur(30px)",
              backgroundSize: "contain",
              backgroundPosition: "left center",
              opacity: "0.8",
            }}
          ></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainerVariant}
            className="relative z-10"
          >
            <motion.h1 
              variants={textVariant} 
              className="text-[40px] sm:text-[45px] md:text-5xl lg:text-[53px] font-normal font-gilroy-semibold text-[#212121] leading-tight md:leading-[66px]"
            >
              Empowering Your Business <br className="hidden sm:block" />
              with HR, Manpower, and <br className="hidden sm:block" />
              Visa Solutions.
            </motion.h1>
            <motion.div 
              variants={textVariant} 
              className="text-gray-500 mt-4 text-base sm:text-lg w-full font-gilroy-regular"
            >
              <p>We streamline your growth with expert HR solutions,</p>
              <p>reliable manpower supply, and seamless visa services.</p>
            </motion.div>
            <motion.div
              variants={textVariant}
              className="mt-6"
            >
              <Link href="/services">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  transition={{ duration: 0.3 }}
                  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">Explore Solutions</span>
                  <motion.div
                    variants={arrowVariant}
                    className="relative z-10"
                  >
                    <FaArrowRight />
                  </motion.div>
                  {/* Shine overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-full pointer-events-none"
                    whileHover={{ opacity: [0, 0.6, 0], x: [ -100, 100 ] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          {/* Main Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              opacity: { duration: 1.5 },
              scale: { duration: 1.3 }
            }}
            className="w-full h-full"
          >
            <Image
              src="/landing.jpg"
              alt="Landing Image"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-[calc(50%-113px)] transform -translate-x-1/2 md:left-[calc(40%-123px)] lg:left-[calc(45%-123px)] xl:left-[calc(50%-123px)]"
          >
          </motion.div>
        </div>
      </div>

      {/* Marquee Section for extra attraction */}
      <div className="w-full py-4 bg-gray-100 mt-0">
        <Marquee pauseOnHover gradient={false} speed={40}>
          <span className="mx-4 text-lg font-bold text-gray-700">Innovative HR Solutions</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Expert Manpower Supply</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Seamless Visa Process</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Innovative HR Solutions</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Expert Manpower Supply</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Seamless Visa Process</span>
          <span className="mx-4 text-lg font-bold text-gray-700">Seamless Visa Process</span>
        </Marquee>
      </div>
    </div>
  );
};

export default Landing;
