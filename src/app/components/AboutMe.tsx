import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import AboutMeImage from "../../../public/assets/aboutme.png";

const AboutMe: FC = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a beginner in front-end development. I was recently completed
            the Front-end &quot;Advanced&quot; course at an A-Level IT school,
            and gained basic skills and experience in development. I am
            currently actively looking for my first commercial experience. I am
            a quick learner and can pick up new tech stacks as needed. I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              This is one of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutMeImage} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
