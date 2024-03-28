"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const TransitionEffect = (props: Props) => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-fuchsia-500"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-500"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-teal-400"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
