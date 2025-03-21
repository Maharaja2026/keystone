"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <HiOutlineLocationMarker className="w-6 h-6" />,
      title: "Visit Us",
      info: "South street, Chennai - 632208.",
      link: "https://maps.app.goo.gl/tQui8dUqJEv7ytBu9"
    },
    {
      icon: <HiOutlinePhone className="w-6 h-6" />,
      title: "Call Us",
      info: "+91 123 456 7890",
      link: "tel:+911234567890"
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: "Email Us",
      info: "info@keystone.com",
      link: "mailto:info@keystone.com"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600">{item.icon}</span>
              </div>
              <h3 className="text-xl font-gilroy-semibold text-[#212121] mb-3">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.info}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-gilroy-semibold text-[#212121] mb-6">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;