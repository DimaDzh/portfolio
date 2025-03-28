import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import React from "react";

const SocialsList = () => {
  return (
    <ul className="flex gap-x-4">
      <li>
        <Link
          href="https://www.linkedin.com/in/dzhartyds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={24}
            className="hover:text-blue-600 transition-colors"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/DimaDzh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={24}
            className="hover:text-gray-800 transition-colors"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialsList;
