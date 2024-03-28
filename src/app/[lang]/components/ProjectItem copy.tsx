import React, { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { StrapiImage } from "../types";
import { getStrapiImageUrl } from "../utils/getStrapiMedia";
import { motion, useScroll, useTransform } from "framer-motion";

export type ProjectItemProps = {
  title: string;
  bgImage: StrapiImage;
  tech: string;
  link: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ title, bgImage, tech, link }) => {
  const imageUrl: string = getStrapiImageUrl(bgImage);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <li className="my-12 mx-auto max-w-4xl z-10">
      <div className="relative my-12 bg-slate-300 overflow-hidden flex items-center justify-center  lg:h-auto mx-10 pb-2  shadow-xl shadow-gray-400 rounded-xl">
        {/* <Image
          className="rounded-xl w-full h-full object-cover group-hover:opacity-10"
          width={500}
          height={500}
          src={imageUrl}
          alt={title}
        /> */}
        <div className="imageContainer h-[500px] flex-1" ref={ref}>
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <motion.div
          className="flex flex-1 flex-col gap-5 textContainer"
          style={{ y }}
          // className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <Link href={link} target={"_blank"}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Show more
            </p>
          </Link>
        </motion.div>
      </div>
    </li>
  );
};

export default ProjectItem;
