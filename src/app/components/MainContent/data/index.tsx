import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import TelegramLogo from "../../../../../public/assets/telegram.svg";

export const contactsList = [
  {
    link: "https://www.linkedin.com/in/dzhartyds",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://github.com/DimaDzh",
    icon: <FaGithub />,
  },
  {
    link: "https://t.me/dzhartyds",
    icon: <Image src={TelegramLogo} alt="/" className="h-6 w-6" />,
  },
  {
    link: "mailto:dzhartyds@gmail.com?subject=Mail from Our Site",
    icon: <AiOutlineMail />,
  },
  {
    link: "/resume",
    icon: <BsFillPersonLinesFill />,
  },
];
