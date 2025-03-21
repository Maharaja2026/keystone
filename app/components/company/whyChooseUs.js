"use client";
import React, { useEffect, useState } from 'react';
import { 
  FaGlobe, 
  FaUserTie, 
  FaClock, 
  FaChartLine, 
  FaShieldAlt, 
  FaHandshake 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaGlobe />,
      title: "Global Network",
      description: "Access to international talent pools and extensive network of partners worldwide"
    },
    {
      icon: <FaUserTie />,
      title: "Expert Team",
      description: "Seasoned professionals with deep industry knowledge and experience"
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description: "Efficient processing and fast deployment of workforce solutions"
    },
    {
      icon: <FaChartLine />,
      title: "Proven Track Record",
      description: "Consistent success in delivering quality HR and visa services"
    },
    {
      icon: <FaShieldAlt />,
      title: "Compliance Assured",
      description: "Strict adherence to international labor laws and regulations"
    },
    {
      icon: <FaHandshake />,
      title: "Personalized Service",
      description: "Tailored solutions to meet your specific business needs"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-[#212121]">
            Why Choose KeyStone
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-gilroy-regular">
            Your trusted partner in workforce solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 bg-white border border-gray-100 rounded-lg 
                shadow-[0_4px_20px_rgba(0,106,255,0.12)] 
                hover:shadow-[0_4px_25px_rgba(0,106,255,0.25)]
                transition-all duration-1000 ease-in-out
                flex flex-col items-center text-center
                transform
                ${isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : index < 3 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
                }
                ${index < 3 
                  ? 'hover:-translate-x-3' 
                  : 'hover:translate-x-3'
                }`}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;