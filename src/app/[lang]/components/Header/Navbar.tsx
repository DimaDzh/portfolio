"use client";

import React, { FC, useEffect, useState } from "react";
import Logo from "./Logo";
import { scroller } from "react-scroll";
import { scrollToSection } from "../../utils/scrollers";
import { NavbarData } from "@/[lang]/types";
import SocialsList from "./SocialsList";
import { useTransitionRouter } from "next-view-transitions";
import { transform } from "next/dist/build/swc";
import useAnimatedNavigation from "@/[lang]/hooks/useAnimatedNavigation";
const Navbar: FC<NavbarData> = ({ logoUrl, menusList }) => {
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
        setNavBg("#687943");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const { handleLink } = useAnimatedNavigation();

  return (
    <section className={`flex items-center justify-between container py-6`}>
      <Logo />
      <ul
        style={{ color: `${linkColor}` }}
        className="hidden lg:flex gap-x-10 text-sm"
      >
        {menusList &&
          menusList.map(({ title, url, id }) => {
            return (
              <li
                key={"menus-" + id}
                onClick={() => {
                  scrollToSection(title.toLocaleLowerCase());
                }}
                className=" uppercase border-b border-white/0 hover:border-white hover:text-sm"
              >
                <a
                  onClick={(e) => {
                    handleLink(e, url);
                  }}
                  href={url}
                >
                  {title}
                </a>
              </li>
            );
          })}
      </ul>
      <SocialsList />
    </section>
  );
};

export default Navbar;
