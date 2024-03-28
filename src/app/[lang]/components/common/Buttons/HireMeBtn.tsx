import React from "react";
import spinedImage from "../../../../../../public/spin-hireme.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HireMeBtn = (props: Props) => {
  return (
    <div className="fixed left-4 bottom-0 flex items-center group justify-center z-[300]">
      <div className="flex items-center justify-center relative">
        <Link
          href={"mailto:dzhartyds@gamil.com"}
          className="flex items-center justify-center font-semibold text-sm z-10 size-12 bg-blue-300 group-hover:bg-blue-500 p-8 text-center rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Hire me
        </Link>
        <Image
          src={spinedImage}
          alt="spinedImage"
          width={100}
          height={100}
          className="animate-spin-slow size-36 "
        />
      </div>
    </div>
  );
};

export default HireMeBtn;
