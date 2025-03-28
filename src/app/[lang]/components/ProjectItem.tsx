import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "../utils/getStrapiMedia";

export type ProjectItemProps = {
  title: string;
  description?: string;
  technologies: string[];
  // bgImage: string; // Updated to use a string for the image URL
  githubLink?: string;
  liveDemo?: string;
};

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  description,
  technologies,

  githubLink,
  liveDemo,
}) => {
  // const imageUrl: string = getStrapiImageUrl(bgImage);

  return (
    <li className="relative flex items-center justify-center w-full h-48 mx-10 pb-2 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      {/* <Image
        className="rounded-xl w-full h-full object-cover group-hover:opacity-10"
        width={500}
        height={500}
        src={imageUrl}
        alt={title}
      /> */}
      <main className="flex flex-col items-center justify-center w-full h-full p-4 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-xl">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {technologies.join(", ")}
        </p>
        {liveDemo && (
          <Link href={liveDemo} target="_blank">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Live Demo
            </p>
          </Link>
        )}
      </main>
    </li>
  );
};

export default ProjectItem;
