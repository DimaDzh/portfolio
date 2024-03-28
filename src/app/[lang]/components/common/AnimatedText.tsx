import { animate, delay, motion } from "framer-motion";
import React from "react";

type AnimatedTextProps = {
  text: string;
  className: string;
};

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      straggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const AnimatedText = ({ className, text }: AnimatedTextProps) => {
  return (
    <div className="w-full mx-auto flex h-fit items-center justify-center text-center overflow-hidden">
      <motion.div
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            variants={singleWord}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
