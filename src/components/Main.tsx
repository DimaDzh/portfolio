import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import TelegramLogo from "../../public/assets/telegram.svg";

const Main: FC = () => {
  return (
    <section id="home" className="w-full h-screen text-center">
      <main className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
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
              I’m a beginner in front-end development. I’m a quick learner and
              can pick up new tech stacks as needed.
            </p>
          </main>
          <section className="flex items-center flex-wrap justify-between max-w-[500px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/dzhartyds/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/DimaDzh"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="https://t.me/dzhartyds"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Image src={TelegramLogo} alt="/" className="h-6 w-6" />
              </div>
            </Link>
            <Link href="mailto:dzhartyds@gmail.com?subject=Mail from Our Site">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </section>
        </section>
      </main>
    </section>
  );
};

export default Main;
