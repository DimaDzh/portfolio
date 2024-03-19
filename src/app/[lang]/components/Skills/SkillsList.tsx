"use client";
import React, { FC } from "react";
import SkillsItem, { SkillsItemProps } from "./SkillsItem";
import { motion } from "framer-motion";
import Link from "next/link";

type SkillsListData = {
  header: string;
  data: {
    id: number;
    attributes: SkillsItemProps;
  }[];
  isShowMore?: boolean;
};

const SkillsList: FC<SkillsListData> = ({ data, header, isShowMore }) => {
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
        <h2 className="py-4">{header}</h2>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data &&
            data.map(({ attributes, id }, index) => (
              <motion.li key={"skill" + id} variants={itemVariants}>
                <SkillsItem
                  name={attributes.name}
                  icon={attributes.icon}
                  link={attributes.link}
                  locale={attributes.locale}
                />
              </motion.li>
            ))}
        </motion.ul>
      </main>
      {isShowMore && (
        <div className="flex items-center justify-center w-full mx-auto my-6 lg:my-12">
          <Link
            className="px-6 py-3 text-cyan-50 bg-[#5651e5] bg-opacity-70 hover:bg-opacity-90 w-fit rounded-2xl shadow-md focus:ring-2 transition-opacity"
            href={"/skills"}
          >
            Show more skills
          </Link>
        </div>
      )}
    </section>
  );
};

export default SkillsList;
