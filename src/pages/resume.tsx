import React, { FC } from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume: FC = () => {
  return (
    <>
      <Head>
        <title>Dzharty Dmytro | Resume</title>
        <meta name="description" content="I’m a front-end web developer." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <section className="max-w-[940px] mx-auto p-4 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <header className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Dzharty Dmytro</h2>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/dzhartyds/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </Link>
            <a
              href="https://github.com/DimaDzh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </header>

        <main className="text-center py-4 ">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>SASS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Ant-design
            <span className="px-2">|</span> RESTAPI
          </p>
        </main>
        <section>
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
          {/* Experience */}
          <div className="py-6">
            <p className="italic">
              <span className="font-bold italic">ТОВ "Метакон": </span>
              <span className="font-bold italic">
                Deputy head of production
              </span>
              <span className="px-2">|</span>Kyiv, Ukraine |{" "}
              <span className="py-1 italic">03.2018-02.2022</span>
            </p>
            <p className="italic">
              <span className="font-bold italic">ТОВ "Метакон": </span>
              <span className="font-bold italic"> Production master</span>
              <span className="px-2">| Kyiv, Ukraine |</span>
              <span className="py-1 italic">06.2017 - 02.2018 </span>
            </p>
          </div>
        </section>
        {/* { Additional education} */}
        <section>
          <h5 className="text-center underline text-[18px] py-4">
            Additional education
          </h5>
          <div className="py-6">
            <p className="italic">
              <span className="font-bold italic">A-level Ukraine </span>
              <span className="font-bold italic">Front-end developer</span>
              <span className="px-2">| Kyiv, Ukraine |</span>
              <span className="py-1 italic">February 2022 – October 2022 </span>
            </p>
          </div>
        </section>
        {/* { higher education} */}
        <section>
          <h5 className="text-center underline text-[18px] py-4">
            Higher education
          </h5>
          <div className="py-6">
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
        </section>
        {/* additional info */}
        <section>
          <h5 className="text-center underline text-[18px] py-4">
            Additional information
          </h5>
          <div className="py-6">
            <h6>Languages:</h6>
            <p className="italic">English: </p>
            <span className="font-bold italic">
              B1 (speaking-B1, reading-B2, listening-B1, writening-B1);
            </span>
            <p className="italic">Italian: </p>
            <span className="font-bold italic">in the process of study.</span>
          </div>
        </section>
        {/* hobbies*/}
        <section>
          <h5 className="text-center underline text-[18px] py-4">Hobbies</h5>
          <div className="py-1">
            <p className="italic">
              Foreign languages, football, reading professional literature,
              movies
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default resume;
