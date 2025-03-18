"use client";
import { useState, useEffect } from "react";
import Nav from "./nav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={`flex items-center justify-between w-full fixed top-0 h-16 py-4 z-[20] mx-auto bg-white ${
        scrollY === 0 ? "md:bg-transparent" : "md:bg-white"
      }`}
      style={{ transition: "background-color 0.4s ease" }}
    >
      <Link href="/">
        <div className="flex items-center cursor-pointer" style={{ marginLeft: "30px" }}> 
          <Image
            src="/fulllogo.svg"
            alt="Company Logo"
            width={150} 
            height={40} 
          />
        </div>
      </Link>
      <Nav nav={nav} setNav={setNav} />
    </header>
  );
};

export default Header;