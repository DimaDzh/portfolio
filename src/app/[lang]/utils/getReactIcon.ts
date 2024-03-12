import { ReactNode } from "react";
import { IconType } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram, FaGithub } from "react-icons/fa";

// Create a function to map icon names to their corresponding React Icons
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "FaLinkedinIn":
      return FaLinkedinIn;
    case "FaTelegram":
      return FaTelegram;
    case "AiOutlineMail":
      return AiOutlineMail;
    case "BsFillPersonLinesFill":
      return BsFillPersonLinesFill;
    case "FaGithub":
      return FaGithub;
    default:
      console.warn(`Icon "${iconName}" not found`);
      return null;
  }
};

export default getIconComponent;
