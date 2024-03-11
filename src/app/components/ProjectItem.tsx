import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  backgroundImg: string | StaticImageData;
  tech: string;
  projectUrl: string;
};

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}) => {
  return (
    <li className="relative flex items-center justify-center w-[full] h-96 lg:w-[400px] lg:h-auto mx-10 pb-2 w-400px shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl w-full h-full object-cover group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <main className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl} target={"_blank"}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Show more
          </p>
        </Link>
      </main>
    </li>
  );
};

export default ProjectItem;
