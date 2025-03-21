"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ nav, setNav }) => {
  const pathname = usePathname();

  const NavLink = ({ href, title, className = "" }) => {
    const isActive = pathname === href;
    return (
      <Link
        onClick={() => setNav(false)}
        href={href}
        className={`${className} relative text-[#212121] hover:text-blue-600 transition-colors duration-300 ease-in-out group`}
      >
        {title}
        {/* Active state underline */}
        {isActive && (
          <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600"></span>
        )}
        {/* Hover underline effect */}
        {!isActive && (
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center w-full px-4 md:px-6 lg:px-8 py-4">
        <div className="flex-1"></div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-12 text-[#212121] text-[16px] sm:text-[17px] md:text-[18px] font-normal font-gilroy-regular">
          <li>
            <NavLink href={"/our-company"} title={"Our Company"} />
          </li>
          <li>
            <NavLink href={"/vision-mission"} title={"Vision & Mission"} />
          </li>
          <li>
            <NavLink href={"/our-services"} title={"Our Services"} />
          </li>
        </ul>

        {/* Contact Button */}
        <div className="ml-16">
          <Link href="/contact">
            <button className="group bg-blue-600 text-white px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs md:px-4 md:py-1.5 md:text-sm lg:px-5 lg:py-2 lg:text-base hover:bg-blue-700 transition-all font-bold flex items-center justify-center relative overflow-hidden h-8 sm:h-9 md:h-10 group-hover:scale-105">
              <span className="flex items-center overflow-hidden">
                <span className="inline-block group-hover:translate-y-full transition-transform duration-500 ease-in-out">C</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[700ms] ease-in-out">o</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[700ms] ease-in-out">n</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[800ms] ease-in-out">t</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[900ms] ease-in-out">a</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[1100ms] ease-in-out">c</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[950ms] ease-in-out">t</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-1000 ease-in-out"> </span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-1000 ease-in-out">U</span>
                <span className="inline-block group-hover:translate-y-full transition-transform duration-[1100ms] ease-in-out">s</span>
              </span>
              <span className="absolute flex items-center overflow-hidden">
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[750ms] ease-in-out">C</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-in-out">o</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[850ms] ease-in-out">n</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms] ease-in-out">t</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms] ease-in-out">a</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[950ms] ease-in-out">c</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[1000ms] ease-in-out">t</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[1000ms] ease-in-out"> </span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[1000ms] ease-in-out">U</span>
                <span className="inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-[1100ms] ease-in-out">s</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle menu"
          className="md:hidden w-6 h-5 relative cursor-pointer z-50"
        >
          {/* Top Line */}
          <span
            className={`absolute w-full h-[2px] bg-black transition-all duration-300 ease-in-out ${
              nav ? "top-[9px] rotate-45" : "top-0 rotate-0"
            }`}
          ></span>
          {/* Middle Line */}
          <span
            className={`absolute w-full h-[2px] bg-black transition-opacity duration-300 ease-in-out top-[9px] ${
              nav ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          {/* Bottom Line */}
          <span
            className={`absolute w-full h-[2px] bg-black transition-all duration-300 ease-in-out ${
              nav ? "top-[9px] -rotate-45" : "bottom-0 rotate-0"
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Side Navigation */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-80 w-[280px] sm:w-[300px] bg-white z-40 pt-20 flex flex-col items-center gap-6 uppercase text-black text-sm font-semibold tracking-widest transition-all duration-200 ease-in ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="w-full text-center py-2">
          <NavLink href={"/our-company"} title={"Our Company"} />
        </li>
        <li className="w-full text-center py-2">
          <NavLink href={"/vision-mission"} title={"Vision & Mission"} />
        </li>
        <li className="w-full text-center py-2">
          <NavLink href={"/our-services"} title={"Our Services"} />
        </li>
      </ul>
    </>
  );
};

export default Nav;