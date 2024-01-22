import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImage from "../../public/assets/contactiamge.png";
import TelegramLogo from "../../public/assets/telegram.svg";

const Contact: FC = () => {
  return (
    <section id="contact" className="w-full lg:h-screen">
      <main className="max-w-[1240px] m-auto  px-2 py-16 w-full ">
        <article>
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </article>
        <div className="w-full h-full ">
          <div className="'col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <section className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-lg hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Dzharty Dmytro</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let`s
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/dzhartyds/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/DimaDzh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link
                    href="https://t.me/dzhartyds"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Image src={TelegramLogo} alt="/" className="h-6 w-6" />
                    </div>
                  </Link>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:dzhartyds@gmail.com?subject=Mail from Our Site">
                      {" "}
                      <AiOutlineMail />
                    </a>
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Contact;
