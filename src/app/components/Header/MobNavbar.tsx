import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "./Logo";
type Props = {};

const MobNavbar = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  const [linkColor, setLinkColor] = useState<string>("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <aside
      className={
        nav
          ? "lg:hidden fixed left-0 top-0 w-full h-screen z-50 bg-black/70"
          : ""
      }
    >
      <div className="w-full h-fit flex items-center justify-between container">
        <Logo />
        {/* Hamburger Icon */}
        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className="lg:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* Side Drawer Menu */}
      <section
        className={
          nav
            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen md:w-[45%] bg-[#ecf0f3] px-4 ease-in duration-500"
            : "fixed left-[-100%] top-0 px-4 ease-in duration-500"
        }
      >
        <header className="">
          <div className="flex w-full items-center justify-between">
            <Logo />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
        </header>
        <main className="py-2 flex flex-col">
          <ul className="uppercase">
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/#about">About</Link>
            </li>
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/#skills">Skills</Link>
            </li>
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/#projects">Projects</Link>
            </li>
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/resume">Resume</Link>
            </li>
            <li onClick={() => setNav(false)} className="py-2 text-sm">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <section className="pt-15">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let`s Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <a
                href="https://www.linkedin.com/in/dzhartyds/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/DimaDzh"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>

              <div
                onClick={() => setNav(!nav)}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <a href="mailto:dzhartyds@gmail.com?subject=Mail from Our Site">
                  {" "}
                  <AiOutlineMail />
                </a>
              </div>

              <Link href="/resume">
                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </section>
        </main>
      </section>
    </aside>
  );
};

export default MobNavbar;
