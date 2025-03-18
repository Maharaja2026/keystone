"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";

const Nav = ({ nav, setNav }) => {
  const pathname = usePathname();

  // Reusable Navigation Link Component
  const NavLink = ({ href, title, className = "" }) => {
    const isActive = pathname === href;
    return (
      <Link
        onClick={() => setNav(false)}
        href={href}
        className={`${className} relative group ${
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }`}
      >
        {title}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center w-full px-8 py-4">
        {/* Left Spacer (for balance) */}
        <div className="flex-1 hidden md:block"></div>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex justify-center gap-12 text-[#212121] text-[18px] leading-[21.6px] font-normal font-gilroy-regular lg:text-[18px] ml-80">
          <li>
            <NavLink href={"/"} title={"Home"} />
          </li>
          <li>
            <NavLink href={"/about-us"} title={"About Us"} />
          </li>
          <li>
            <NavLink href={"/services"} title={"Services"} />
          </li>
          <li>
            <NavLink href={"/clients"} title={"Clients"} />
          </li>
        </ul>

        {/* Right Side: Contact Us Button */}
        <div className="flex-1 flex justify-center">
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Open menu"
          className="z-50 md:hidden cursor-pointer"
        >
          {nav ? (
            <RiCloseLine size={25} className="text-black" />
          ) : (
            <TbMenu size={25} className="text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <ul className="md:hidden flex flex-col items-center w-full gap-5 uppercase bg-white border-b border-gray-300 text-primaryText text-sm tracking-widest pt-8 pb-4">
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink href={"/"} title={"Home"} />
          </li>
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink href={"/about"} title={"About Us"} />
          </li>
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink href={"/services"} title={"Services"} />
          </li>
          <li className="border-b w-2/3 text-center pb-4">
            <NavLink href={"/client"} title={"Clients"} />
          </li>
          <li>
            <NavLink href={"/contact"} title={"Contact"} />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;