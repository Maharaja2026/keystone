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
      className={`flex items-center justify-between w-full fixed top-0 h-16 py-4 z-[20] mx-auto bg-white ${scrollY === 0 ? "md:bg-transparent" : "md:bg-white"} px-4 sm:px-6 md:px-8 lg:px-12`}
      style={{ transition: "background-color 0.4s ease" }}
    >
      <Link href="/">
        <div className="flex items-center cursor-pointer ml-4 sm:ml-6 md:ml-8 lg:ml-12"> 
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={190} 
            height={50} 
          />
        </div>
      </Link>
      <Nav nav={nav} setNav={setNav} />
    </header>
  );
};

export default Header;