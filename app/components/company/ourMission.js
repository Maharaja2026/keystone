import React from 'react';
import { FaLightbulb, FaEye, FaHandshake } from 'react-icons/fa';

const OurMission = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-[#212121]">
            Our Mission & Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-gilroy-regular">
            Driving excellence in global workforce solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaEye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in workforce solutions, connecting talent with 
              opportunity across borders.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaLightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional HR and visa solutions while empowering businesses 
              and individuals to achieve their full potential.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaHandshake className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, excellence, and innovation drive everything we do, ensuring 
              the best outcomes for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;