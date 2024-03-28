import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
};

const CustomLink = ({ className, href, title }: CustomLinkProps) => {
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span className="h-0.5 inline-block bg-white absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease-in duration-300"></span>
    </Link>
  );
};

export default CustomLink;
