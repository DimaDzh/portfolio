import React from "react";
import Image from "next/image";
import { StrapiImage } from "@/[lang]/types";
import { getStrapiImageUrl } from "@/[lang]/utils/getStrapiMedia";
import Link from "next/link";
export type SkillsItemProps = {
  name: string;
  link: string;
  locale: string;
  icon: StrapiImage;
};

const SkillsItem = ({ icon, name, link, locale }: SkillsItemProps) => {
  const imageUrl: string = icon.url;
  return (
    <Link
      href={link}
      target="_blank"
      className="p-4 lg:p-6 shadow-xl flex items-center justify-center h-32 rounded-xl hover:scale-105 hover:ring-[1px] ring-slate-400 hover:shadow-none transition-all"
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imageUrl} width={64} height={64} alt={name + "skill"} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SkillsItem;
