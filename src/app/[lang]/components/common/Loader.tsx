import React, { FC } from "react";

type LoaderProps = {
  text?: string;
};

const Loader: FC<LoaderProps> = ({ text = "loading" }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-indigo-600 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <span className="text-indigo-700 font-medium">{text}</span>
      </div>
    </div>
  );
};

export default Loader;
