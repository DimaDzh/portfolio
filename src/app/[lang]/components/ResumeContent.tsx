"use client";
import Link from "next/link";
import React, { FC } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SavePdfCvButton from "./SavePdfCvButton";

const ResumeContent: FC = () => {
  return (
    <section className="max-w-5xl mx-auto p-4 py-32">
      <h2 className="text-center">Resume</h2>
      <header className="bg-[#d0d4d6] my-4 p-4 w-full flex rounded shadow flex-col lg:flex-row gap-5 justify-between items-center">
        <h2 className="text-center">Dzharty Dmytro</h2>
        <div className="flex gap-5 lg:gap-0 items-center">
          <Link
            href="https://www.linkedin.com/in/dzhartyds/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={20} className="m-2" />
          </Link>
          <a href="https://github.com/DimaDzh" target="_blank" rel="noreferrer">
            <FaGithub size={20} className="m-2" />
          </a>
          <div className="m-2">
            <SavePdfCvButton />
          </div>
        </div>
      </header>

      <main className="text-center py-4">
        <h5 className="text-center underline text-lg py-1">Technical Skills</h5>
        <div className="flex items-center justify-center flex-wrap py-2">
          <span>Next JS</span>
          <span className="px-2">|</span>
          <span>React</span>
          <span className="px-2">|</span>
          <span>Javascript</span>
          <span className="px-2">|</span>
          <span>Typescript</span>
          <span className="px-2">|</span>
          <span>HTML</span>
          <span className="px-2">|</span>
          <span>CSS</span>
          <span className="px-2">|</span>
          <span>Redux</span>
          <span className="px-2">|</span>
          <span>Zustand</span>
          <span className="px-2">|</span>
          <span>Tailwind</span>
          <span className="px-2">|</span>
          <span>SASS</span>
          <span className="px-2">|</span>
          <span>Strapi CMS</span>
        </div>
      </main>
      <>
        <h5 className="text-center underline text-lg py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-2 lg:py-6">
          <p className="italic">
            <span className="font-bold italic">FRENCH4 DEV </span>
            <span className="font-bold italic">Front-end Developer</span>
            <span className="px-1">|</span>{" "}
            <span className="px-1">Krakow Poland</span>
            <span className="py-1 italic"> 03.2023 – until now </span>
          </p>
          <p className="italic">
            <span className="font-bold italic">ТОВ &quot;Метакон&quot;: </span>
            <span className="font-bold italic">Deputy head of production</span>
            <span className="px-2">|</span>Kyiv, Ukraine |{" "}
            <span className="py-1 italic">03.2018-02.2022</span>
          </p>
          <p className="italic">
            <span className="font-bold italic">ТОВ &quot;Метакон&quot;: </span>
            <span className="font-bold italic"> Production master</span>
            <span className="px-2">| Kyiv, Ukraine |</span>
            <span className="py-1 italic">06.2017 - 02.2018 </span>
          </p>
        </div>
      </>
      {/* { Additional education} */}
      <>
        <h5 className="text-center underline text-lg py-4">
          Additional education
        </h5>
        <div className="py-2 lg:py-6">
          <p className="italic">
            <span className="font-bold italic">A-level Ukraine </span>
            <span className="font-bold italic">Front-end developer</span>
            <span className="px-2">| Kyiv, Ukraine |</span>
            <span className="py-1 italic">February 2022 – October 2022 </span>
          </p>
        </div>
      </>
      {/* { higher education} */}
      <>
        <h5 className="text-center underline text-lg py-4">Higher education</h5>
        <div className="py-2 lg:py-6">
          <p className="italic">
            <span className="font-bold italic">
              Donetsk National Technical University{" "}
            </span>
            <span className="font-bold italic">
              Faculty of Electrical Engineering{" "}
            </span>
            <span className="font-bold italic">
              Department of Electrical Systems
            </span>
            <span className="font-bold italic">
              Master degree Electrical Power Systems
            </span>
            <span className="px-2">| Donetck, Ukraine |</span>
            <span className="py-1 italic">2011 – October 2017 </span>
          </p>
        </div>
      </>
      {/* additional info */}
      <>
        <h5 className="text-center underline text-lg py-4">
          Additional information
        </h5>
        <div className="py-2 lg:py-6">
          <h6>Languages:</h6>
          <p className="italic">English: </p>
          <span className="font-bold italic">
            B1 (speaking-B1, reading-B2, listening-B1, writening-B1);
          </span>
          <p className="italic">Italian: </p>
          <span className="font-bold italic">in the process of study.</span>
        </div>
      </>
      {/* hobbies*/}
      <>
        <h5 className="text-center underline text-lg py-4">Hobbies</h5>
        <div className="py-2 lg:py-6">
          <p className="italic">
            Foreign languages, football, reading professional literature, movies
          </p>
        </div>
      </>
    </section>
  );
};

export default ResumeContent;
