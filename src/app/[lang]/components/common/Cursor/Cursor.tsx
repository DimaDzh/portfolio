"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor size-11 rounded-[50px] border-2 border-black bg-white fixed z-[1000]"
      animate={{ x: position.x + 5, y: position.y + 5 }}
    ></motion.div>
  );
};

export default Cursor;
