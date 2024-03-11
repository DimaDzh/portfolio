import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";

type MainContactCardProps = {
  link: string;
  icon: ReactNode;
};

const MainContactCard = ({ icon, link }: MainContactCardProps) => {
  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01, rotate: 380 },
  };
  return (
    <li>
      <Link href={link} target="_blank" rel="noreferrer">
        <motion.div
          className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer transform transition-transform duration-300"
          variants={containerVariants}
          whileHover="hover"
        >
          <motion.div whileHover={{ y: -1 }} className="text-2xl">
            {icon}
          </motion.div>
        </motion.div>
      </Link>
    </li>
  );
};

export default MainContactCard;
