import Image from "next/image";
import React, { FC } from "react";
import AboutMeImage from "../../../public/assets/aboutme.png";

const AboutMe: FC = () => {
  return (
    <div
      id="about"
      className="w-full py-12 lg:py-24 flex items-center container"
    >
      <div className="m-auto md:grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] mb-4">
            About
          </p>
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I bring commercial experience in web application development using
            NextJS and StrapiJS, establishing a strong foundation in front-end
            development. Having successfully completed the Advanced course at an
            A-Level IT school, I've acquired essential skills and hands-on
            experience in development.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            I am eager to collaborate with forward-thinking teams and companies.
            With a quick learning pace, I can readily embrace new technology
            stacks as required. I firmly believe that true development
            excellence lies not in sticking to a single programming language but
            in choosing the best tool for each task.
          </p>
        </div>

        <div className="w-full h-fit m-auto shadow-xl shadow-gray-400 rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
          <Image
            src={AboutMeImage}
            className="rounded-xl object-fill"
            width={2000}
            height={2000}
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
