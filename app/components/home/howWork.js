import Image from "next/image";
import React from "react";
import { FaUsers, FaSearch, FaClipboardCheck, FaUserPlus } from "react-icons/fa"; // Importing React Icons

const HowWorks = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-start pt-8 sm:pt-12 lg:pt-16">
          <div className="mx-auto text-center relative py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl">
        {/* Title Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#212121]">
          How we work
        </h2>
        <p className="text-[#4C596A] text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 font-normal font-gilroy-regular">
          Our streamlined approach to smart staffing
        </p>

        {/* Steps Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#C2D2FF] shadow-md">
              <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500" />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4C596A] font-normal font-gilroy-medium mt-2 sm:mt-3 md:mt-4 text-center">
              Define Human Resource Requirements
            </p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#C2D2FF] shadow-md">
              <FaSearch className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500" />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4C596A] font-normal font-gilroy-medium mt-2 sm:mt-3 md:mt-4 text-center">
              Identifying Talent Sources
            </p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#C2D2FF] shadow-md">
              <FaClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500" />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4C596A] font-normal font-gilroy-medium mt-2 sm:mt-3 md:mt-4 text-center">
              Industry-Standard Screening & Interviews
            </p>
          </div>

          {/* Desktop/Tablet Arrow */}
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={0}
            className="hidden sm:block md:w-[40px] lg:w-[49px] mb-12 md:mb-16 animate-fade-slide-right"
          />

          {/* Mobile Arrow */}
          <div className="sm:hidden my-3">
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="!rotate-90 animate-fade-slide-down"
            />
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[239px]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[118px] lg:h-[118px] flex items-center justify-center rounded-full border-4 sm:border-[5px] border-[#C2D2FF] shadow-md">
              <FaUserPlus className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500" />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4C596A] font-normal font-gilroy-medium mt-2 sm:mt-3 md:mt-4 text-center">
              Flexible Onboarding & Integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;