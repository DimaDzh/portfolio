"use client";
import Image from "next/image";
import React, { FC } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImage from "../../../public/assets/contactiamge.png";
import { contactsList } from "./MainContent/data";
import MainContactCard from "./MainContent/MainContactCard";
import { scrollToSection } from "../utils/scrollers";

const Contact: FC = () => {
  return (
    <section id="contact" className="w-full container">
      <main className="max-w-5xl m-auto py-16 w-full ">
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
                <h4 className="uppercase pt-8">Connect With Me</h4>
                <div className="flex items-center flex-wrap justify-between max-w-[500px] m-auto py-4">
                  {contactsList.map((item, index) => {
                    return (
                      <MainContactCard
                        key={index}
                        icon={item.icon}
                        link={item.link}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <div
            onClick={() => {
              scrollToSection("header");
            }}
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
