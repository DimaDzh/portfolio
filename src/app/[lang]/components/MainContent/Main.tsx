"use client";
import React, { FC } from "react";
import MainContactCard from "./MainContactCard";

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

const Main: FC<SocialContactData> = ({ data }) => {
  return (
    <section id="home" className="w-full h-auto mt-32 text-center">
      <main className="w-full h-full mx-auto p-2 flex justify-center items-center">
        <section>
          <header>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              LET`S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-gray-700">
              Hello There, I am <span className="text-[#69697a]">Dmytro</span>
            </h1>
          </header>
          <main>
            <h2 className="py-2 text-gray-700">A Front-End Web Developer</h2>
            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
              I have a strong foundation in front-end and experience in web
              application development. I&apos;m fast learner, easily adaptable
              to new technology stacks, and eager to join innovative projects to
              contribute to innovative projects.
            </p>
          </main>
          <section className="flex items-center flex-wrap justify-between max-w-[500px] m-auto py-4">
            {data.map(({ attributes, id }, index) => {
              return (
                <MainContactCard
                  key={id}
                  icon={attributes.icon}
                  link={attributes.link}
                  name={attributes.name}
                />
              );
            })}
          </section>
        </section>
      </main>
    </section>
  );
};

export default Main;
