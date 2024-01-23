"use client";
import React, { FC } from "react";
import SkillsItem from "./SkillsItem";
import { skillsData } from "./data";
import { motion } from "framer-motion";

const SkillsList: FC = () => {
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
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((item, index) => (
            <motion.div key={"skill" + index} variants={itemVariants}>
              <SkillsItem title={item.title} icon={item.icon} />
            </motion.div>
          ))}
        </motion.section>
      </main>
    </section>
  );
};

export default SkillsList;
