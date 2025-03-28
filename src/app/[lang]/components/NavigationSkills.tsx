import React from "react";
import Link from "next/link";
import useAnimatedNavigation from "../hooks/useAnimatedNavigation";

type Props = {};

const NavigationSkills = (props: Props) => {
  const { handleLink } = useAnimatedNavigation();

  return (
    <section className="flex flex-col uppercase text-white">
      <Link
        href="/projects"
        onClick={(e) => handleLink(e, "/projects")}
        className="flex px-2 py-4 w-full bg-[#F57059] hover:bg-[#e05b4f] focus:ring-2 focus:ring-offset-2 focus:ring-[#F57059] transition-all"
      >
        NextJS
      </Link>
      <Link
        href="/projects"
        onClick={(e) => handleLink(e, "/projects")}
        className="flex px-2 py-3 -translate-y-1/4 w-3/4 bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
      >
        Typescript
      </Link>
      <Link
        href="/projects"
        onClick={(e) => handleLink(e, "/projects")}
        className="flex px-2 py-2 -translate-y-1/2 w-1/2 bg-[#FBB57B] hover:bg-[#e0a06d] focus:ring-2 focus:ring-offset-2 focus:ring-[#FBB57B] transition-all"
      >
        NodeJS
      </Link>
      <Link
        href="/projects"
        onClick={(e) => handleLink(e, "/projects")}
        className="flex px-2 py-1 -translate-y-7 w-[30%] bg-[#33010F] hover:bg-[#4a1218] focus:ring-2 focus:ring-offset-2 focus:ring-[#33010F] transition-all"
      >
        StrapiJs
      </Link>
    </section>
  );
};

export default NavigationSkills;
