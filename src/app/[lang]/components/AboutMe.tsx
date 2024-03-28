import Image from "next/image";
import React, { FC } from "react";
import AboutMeImage from "../../../../public/assets/aboutme.png";

const AboutMe: FC = () => {
  const currentYear = new Date().getFullYear();
  const startWork = 2023;
  const experienceYears = currentYear - startWork;

  return (
    <section
      id="about"
      className="w-full h-fit my-12 lg:my-24 flex items-center flex-col container"
    >
      <div className="mx-auto text-center mb-4 lg:mb-8">
        <p className="text-base font-light text-gray-700">Get To Know More</p>
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
      </div>
      <div className="flex w-full flex-col lg:flex-row justify-between gap-12 items-center">
        <div className="lg:w-1/2 flex items-center justify-center">
          <Image
            src={AboutMeImage}
            className="rounded-3xl object-fill w-2/3 h-full"
            width={2000}
            height={2000}
            alt="About Me"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <div className="flex w-full mx-auto justify-center mb-5">
            <div className="flex flex-col py-4 px-8 justify-center gap-4 rounded-3xl border text-center items-center">
              <span className="font-bold text-xl">Experience</span>
              <span>{experienceYears}+ years</span>{" "}
              <span>Frontend Development</span>
            </div>
          </div>
          <div className="">
            <p className="text-gray-700 leading-relaxed mb-6">
              I bring commercial experience in web application development using
              NextJS and StrapiJS, establishing a strong foundation in front-end
              development. Having successfully completed the Advanced course at
              an A-Level IT school, I&apos;ve acquired essential skills and
              hands-on experience in development.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I am eager to collaborate with forward-thinking teams and
              companies. With a quick learning pace, I can readily embrace new
              technology stacks as required. I firmly believe that true
              development excellence lies not in sticking to a single
              programming language but in choosing the best tool for each task.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
