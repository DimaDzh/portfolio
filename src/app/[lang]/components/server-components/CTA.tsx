"use client";
import { cn } from "@/[lang]/lib/cn";
import Link from "next/link";
import React, { FC } from "react";
import LinkAnimate from "../common/LinkAnimate";

type Data = {
  data: {
    data: {
      text: string;

      buttonLabel: string;
      buttonLink: string;
    };
  };
};

const CTA: FC<Data> = ({ data }) => {
  const { buttonLabel, buttonLink, text } = data.data;
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{text}</h2>

        <LinkAnimate
          href={buttonLink}
          className="inline-block w-fit bg-white text-primary font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-secondary hover:text-white transition duration-300"
          title={buttonLabel}
        />
      </div>
    </section>
  );
};

export default CTA;
