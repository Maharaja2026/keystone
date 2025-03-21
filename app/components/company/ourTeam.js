import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/team/ceo.jpg",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      position: "HR Director",
      image: "/team/hr-director.jpg",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      position: "Visa Services Head",
      image: "/team/visa-head.jpg",
      linkedin: "#"
    },
    {
      name: "Emma Williams",
      position: "Operations Manager",
      image: "/team/operations.jpg",
      linkedin: "#"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-[#212121]">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-gilroy-regular">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-gilroy-semibold text-[#212121]">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {member.position}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-700"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;