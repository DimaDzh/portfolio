import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Logo = () => {
  return (
    <div className="flex cursor-pointer">
      <Link className="text-[#05796B] text-[32px] font-bold" href="/">
        <span className=""> dzhartyd</span>
      </Link>
    </div>
  );
};

export default Logo;
