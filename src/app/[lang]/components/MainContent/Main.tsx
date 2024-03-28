"use client";
import React, { FC } from "react";
import MainContactCard from "./MainContactCard";
import AnimatedText from "../common/AnimatedText";

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
            <AnimatedText
              text="LET`S BUILD SOMETHING TOGETHER"
              className={"uppercase text-sm tracking-widest text-gray-600"}
            />

            <AnimatedText
              text="Hello There, I am Dmytro "
              className={"text-5xl text-gray-700 py-12"}
            />
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
