import React from 'react';
import Image from 'next/image';

const CompanyLanding = () => {
  return (
    <div className="relative min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-gilroy-semibold text-[#212121] leading-tight">
              Leading the Way in Global
              <span className="text-blue-600"> Workforce Solutions</span>
            </h1>
            <p className="text-gray-600 text-lg font-gilroy-regular leading-relaxed">
              With over a decade of experience, KeyStone has been at the forefront 
              of providing comprehensive HR solutions, manpower services, and visa 
              assistance to businesses worldwide.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-gilroy-semibold text-blue-600">10+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-gilroy-semibold text-blue-600">500+</h3>
                <p className="text-gray-600 mt-2">Clients Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-gilroy-semibold text-blue-600">50+</h3>
                <p className="text-gray-600 mt-2">Countries Reached</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/company-hero.jpg"
              alt="Company Overview"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLanding;
