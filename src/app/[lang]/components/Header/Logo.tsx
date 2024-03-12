import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import NavLogo from "../../../../../public/assets/logo/D-D.svg";

const Logo: FC = () => {
  return (
    <div className="w-32 h-32 flex cursor-pointer">
      <Link href="/">
        <Image
          src={NavLogo}
          alt="/"
          width="200"
          height="200"
          className="object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;
