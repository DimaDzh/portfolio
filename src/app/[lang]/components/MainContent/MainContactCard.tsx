import getIconComponent from "@/[lang]/utils/getReactIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import Icon from "../common/IconReact";

type MainContactCardProps = {
  name: string;
  link: string;
  icon: string;
};

const MainContactCard = ({ icon, link }: MainContactCardProps) => {
  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01, rotate: 380 },
  };

  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="Add my contact"
      >
        <motion.div
          className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer transform transition-transform duration-300"
          variants={containerVariants}
          whileHover="hover"
        >
          <motion.div whileHover={{ y: -1 }} className="text-2xl">
            <Icon iconName={icon} />
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
};

export default MainContactCard;
