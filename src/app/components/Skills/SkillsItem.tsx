import React, { ReactNode } from "react";
import Image from "next/image";

type SkillsItemProps = {
  title: string;
  icon: string;
};

const SkillsItem = ({ icon, title }: SkillsItemProps) => {
  return (
    <div className="p-4 lg:p-6 shadow-xl flex items-center justify-center rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={icon} width={64} height={64} alt={title} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
