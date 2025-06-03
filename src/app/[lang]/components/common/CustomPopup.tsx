import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/[lang]/lib/cn";

type CustomPopupProps = {
  show: boolean;
  text: string;
  type?: "success" | "failed";
};

const typeStyles = {
  success: "bg-green-500",
  failed: "bg-red-500",
};

const CustomPopup: React.FC<CustomPopupProps> = ({
  show,
  text,
  type = "success",
}) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
        className={cn(
          `fixed top-1/2 -translate-y-1/2 left-1/2 z-50 -translate-x-1/2 ${typeStyles[type]} text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold`
        )}
        role="alert"
      >
        {text}
      </motion.div>
    )}
  </AnimatePresence>
);

export default CustomPopup;
