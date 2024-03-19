import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Logo = {
  url: string;
};

const Logo = ({ url }: Logo) => {
  return (
    <div className="w-32 h-32 flex cursor-pointer">
      <Link href="/">
        <Image
          src={url}
          alt="/"
          width="200"
          height="200"
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
