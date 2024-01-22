import React, { FC } from "react";
import Image from "next/image";

import ReactLogo from "../../public/assets/skills/react.svg";
import TypescriptLogo from "../../public/assets/skills/typescript.svg";
import JavascriptLogo from "../../public/assets/skills/javascript.svg";
import ReduxLogo from "../../public/assets/skills/redux-logo.svg";
import NextjsLogo from "../../public/assets/skills/nextjs.svg";
import NodejsLogo from "../../public/assets/skills/nodejs.svg";
import AntdesignLogo from "../../public/assets/skills/ant-design.svg";
import MaterialUILogo from "../../public/assets/skills/material-ui.svg";
import TailwindLogo from "../../public/assets/skills/tailwindcss.svg";
import SassLogo from "../../public/assets/skills/sass.svg";

const Skills: FC = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2">
      <main className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">My skills</h2>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TypescriptLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JavascriptLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReduxLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextjsLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NodejsLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AntdesignLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ant-design</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MaterialUILogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SassLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Skills;
