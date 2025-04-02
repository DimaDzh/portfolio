import useAnimatedNavigation from "@/[lang]/hooks/useAnimatedNavigation";
import { cn } from "@/[lang]/lib/cn";
import Link from "next/link";
import React, { FC } from "react";

type LinkAnimateProps = {
  href: string;
  title: string;
  className?: string;
};

const LinkAnimate: FC<LinkAnimateProps> = ({ href, title, className }) => {
  const { handleLink } = useAnimatedNavigation();
  return (
    <Link
      href={href}
      onClick={(e) => handleLink(e, href)}
      className={cn(
        "flex px-2 py-4 w-full bg-[#F57059] hover:bg-[#e05b4f] focus:ring-2 focus:ring-offset-2 focus:ring-[#F57059] transition-all",
        className && className
      )}
    >
      {title}
    </Link>
  );
};

export default LinkAnimate;
