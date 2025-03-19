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
  <img 
    src="\logowhite.png" 
    alt="Codework Logo" 
    className="w-60 h-36" 
  />
  <p className="text-gray-400 mt-3 leading-relaxed">
    We connect companies with top talent and help candidates find their next career opportunity.
  </p>
</div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={"/our-company"} className="text-gray-400 hover:text-white transition">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href={"/vison-mission"} className="text-gray-400 hover:text-white transition">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href={"/our-services"} className="text-gray-400 hover:text-white transition">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-full shadow">
                  <HiOutlineLocationMarker size={22} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm font-gilroy-regular">
                  <a 
                    href="https://maps.app.goo.gl/tQui8dUqJEv7ytBu9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    South street, Chennai - 632208.
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-full shadow">
                  <HiOutlinePhone size={22} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm font-gilroy-regular">
                  <a 
                    href="tel:+917598981500" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 95479 29370
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-full shadow">
                  <HiOutlineMail size={22} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm font-gilroy-regular">
                  <a 
                    href="mailto:keystone@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    keystone@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  
      <div className="bg-[#202020] py-8 px-10 w-full text-gray-300 text-center">
        <p>
          © <span>{currentYear}</span> All rights reserved |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#6581b9] hover:text-white duration-300"
          >
            KeyStone <span className="sr-only">Opens in a new tab</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;