import React from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#252525] text-white py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid md:grid-cols-3 gap-10">
          {/* Left Section - Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">CODEWORK</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              We connect companies with top talent and help candidates find their next career opportunity.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/client" className="text-gray-400 hover:text-white transition">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-gray-400 p-2 rounded-full shadow">
                  <HiOutlineLocationMarker size={22} className="text-white" />
                </div>
                <span className="text-white">
                  Level 3, Akshaya HQ, OMR, Kazhipattur, Chennai, Tamilnadu, 603103.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gray-400 p-2 rounded-full shadow">
                  <HiOutlinePhone size={22} className="text-white" />
                </div>
                <span className="text-white">+91 75989 81500</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gray-400 p-2 rounded-full shadow">
                  <HiOutlineMail size={22} className="text-white" />
                </div>
                <span className="text-white">support@codework.ai</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  
      <div className="bg-[#202020] py-8 px-10 w-full text-gray-300 text-center">
        <p>
          &copy; <span>{currentYear}</span> All rights reserved |{" "}
          <a
            href={"https://www.codework.ai/"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#6581b9] hover:text-white duration-300"
          >
            CODEWORK <span className="sr-only">Opens in a new tab</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;