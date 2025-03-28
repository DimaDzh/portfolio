"use client";
import React, { FC } from "react";
import MainContactCard from "./MainContactCard";
import myPhoto from "../../../../../public/assets/my-photo.webp";
import Image from "next/image";
import NavigationSkills from "../NavigationSkills";
export type SocialContactData = {
  data: {
    id: number;
    attributes: {
      name: string;
      link: string;
      icon: string;
    };
  }[];
};

const Main: FC = () => {
  return (
    <section id="home" className="container flex items-center h-screen py-6">
      <main className="grid grid-cols-3 gap-24 items-center w-full h-full">
        <section className="flex flex-col gap-4 font-bold w-full">
          <span className="text-[#0c0c0c] text-2xl"> Hello There,</span>
          <p className="uppercase text-sm tracking-widest flex flex-col gap-3 text-gray-600">
            <span className="text-2xl">LET`S BUILD</span>
            <span className="text-3xl text-primary"> SOMETHING TOGETHER</span>
          </p>
          <NavigationSkills />
        </section>
        <section className="flex flex-col">
          <div className="w-[270px] h-[285px] relative translate-x-1/4 translate-y-1/4 z-10">
            <Image
              src={myPhoto.src}
              alt="my-photo"
              width={2000}
              height={2000}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="bg-[#687943]  -translate-y-1/4 w-[270px] h-[285px] flex items-center justify-center"></span>
        </section>
        <section className="flex flex-col gap-6">
          <h1 className="py-4 text-gray-700">
            I am <span className="text-[#69697a]">Dmytro</span>
          </h1>
          <h2 className=" text-gray-700">A Front-End Web Developer</h2>
          <p className=" text-gray-600 ">
            I have a strong foundation in front-end and experience in web
            application development. I&apos;m fast learner, easily adaptable to
            new technology stacks, and eager to join innovative projects to
            contribute to innovative projects.
          </p>
        </section>
      </main>
    </section>
  );
};

export default Main;
