import React, { FC } from "react";
import SkillsItem from "./SkillsItem";
import { skillsData } from "./data";

const SkillsList: FC = () => {
  return (
    <section id="skills" className="w-full h-auto py-2 container">
      <main className="mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">My skills</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillsData.map((item, index) => {
            return (
              <SkillsItem
                key={"skill" + index}
                title={item.title}
                icon={item.icon}
              />
            );
          })}
        </section>
      </main>
    </section>
  );
};

export default SkillsList;
