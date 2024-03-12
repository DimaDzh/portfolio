"use client";
import React, { FC } from "react";
import SkillsItem, { SkillsItemProps } from "./SkillsItem";
import { motion } from "framer-motion";

type SkillsListData = {
  data: {
    id: number;
    attributes: SkillsItemProps;
  }[];
};

const SkillsList: FC<SkillsListData> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="w-full h-auto py-2 container">
      <main className="mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">My skills</h2>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data &&
            data.map(({ attributes, id }, index) => (
              <motion.div key={"skill" + id} variants={itemVariants}>
                <SkillsItem
                  name={attributes.name}
                  icon={attributes.icon}
                  link={attributes.link}
                  locale={attributes.locale}
                />
              </motion.div>
            ))}
        </motion.ul>
      </main>
    </section>
  );
};

export default SkillsList;
