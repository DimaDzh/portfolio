import { cn } from "@/[lang]/lib/cn";
import Image from "next/image";
import React, { FC } from "react";
import MyImage from "../../../../../public/assets/my-photo.webp";
type Data = {
  data: {
    data: {
      title: string;
      description: string;
      placeImage: "left" | "right";
      image: {
        url: string;
        alt: string;
      };
    };
  };
};
const Hero: FC<Data> = ({ data }) => {
  const { description, title, image, placeImage } = data.data;
  return (
    <section className=" text-gray-600 py-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div
          className={cn(
            "flex flex-col gap-24 md:flex-row items-center justify-between",
            placeImage === "left" ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* Left Section: About Me */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl mb-6">{description}</p>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/3 h-[300px] mt-10 md:mt-0 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={MyImage ?? `http://localhost:3000${image.url}`}
              width={1000}
              height={1000}
              priority
              alt={image.alt}
              className=" w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
