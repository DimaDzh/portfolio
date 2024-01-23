"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import Logo from "./Logo";
import { scroller } from "react-scroll";
import { scrollToSection } from "@/app/utils/scrollers";
const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("#bfd4df");
  const [linkColor, setLinkColor] = useState<string>("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#8fa3ad");
      } else {
        setShadow(false);
        setNavBg("#bfd4df");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <section
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full  z-[100] h-24 ${
        shadow ? " shadow-xl ease-in-out duration-300" : "fixed"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full container">
        <Logo />
        <>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden lg:flex gap-x-10 text-sm"
          >
            <li
              onClick={() => {
                scrollToSection("home");
              }}
              className=" uppercase border-b border-white/0 hover:border-white hover:text-sm"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection("about");
              }}
              className=" uppercase border-b border-white/0 hover:border-white hover:text-sm"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection("skills");
              }}
              className="uppercase border-b border-white/0 hover:border-white hover:text-sm"
            >
              <Link href="/#skills">Skills</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection("projects");
              }}
              className=" uppercase border-b border-white/0 hover:border-white hover:text-sm"
            >
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="uppercase border-b border-white/0 hover:border-white hover:text-sm">
              <Link href="/resume">Resume</Link>
            </li>
            <li
              onClick={() => {
                scrollToSection("contact");
              }}
              className="uppercase border-b border-white/0 hover:border-white hover:text-sm"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </>
      </div>
    </section>
  );
};

export default Navbar;
