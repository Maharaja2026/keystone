"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative bg-white w-full min-h-screen flex flex-col m-0">
      {/* Hero Section */}
      <div className="w-full min-h-[70vh] mx-auto p-0 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 sm:px-12 lg:pl-20 mt-16 lg:mt-[70px]">
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

          <h1 className="text-[40px] sm:text-[45px] md:text-5xl lg:text-[53px] font-normal font-gilroy-semibold text-[#212121] leading-tight md:leading-[66px] relative z-10">
            Empowering Your Business <br className="hidden sm:block" />
            with HR, Manpower, and <br className="hidden sm:block" />
            Visa Solutions.
          </h1>
          <div className="text-gray-500 mt-4 text-base sm:text-lg w-full relative z-10 font-gilroy-regular">
            <p>We streamline your growth with expert HR solutions,</p>
            <p>reliable manpower supply, and seamless visa services.</p>
          </div>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative">
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
    </div>
  );
};

export default Landing;