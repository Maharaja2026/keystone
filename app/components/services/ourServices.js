import React from 'react';
import { FaUsers, FaGlobeAmericas, FaFileAlt } from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Manpower Supply",
      description: "Expert staffing solutions across industries with verified professionals. We handle recruitment, screening, and placement to meet your workforce needs.",
      features: [
        "Temporary & Permanent Staffing",
        "Technical & Professional Recruitment",
        "Workforce Management",
        "Skills Assessment & Verification"
      ]
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8 text-blue-600" />,
      title: "HR Solutions",
      description: "Comprehensive HR management services to streamline your operations and enhance workplace efficiency.",
      features: [
        "Payroll Management",
        "HR Consulting",
        "Employee Training & Development",
        "Performance Management Systems"
      ]
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-blue-600" />,
      title: "Visa Services",
      description: "End-to-end visa processing and immigration support for businesses and professionals worldwide.",
      features: [
        "Work Permit Processing",
        "Visa Application Support",
        "Immigration Consulting",
        "Document Verification"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-gilroy-semibold text-[#212121]">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Streamlining your business growth with expert HR solutions, reliable manpower supply, 
            and seamless visa services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-gilroy-semibold text-[#212121] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;