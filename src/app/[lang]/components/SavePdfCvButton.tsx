import React, { FC } from "react";
import { savePdfToUser } from "../utils/savePdfToDevice";
import { FaFileAlt } from "react-icons/fa";

const SavePdfCvButton: FC = () => {
  const handlSave = () => {
    savePdfToUser();
  };

  return (
    <>
      <button onClick={handlSave} className="p-1">
        <FaFileAlt />
      </button>
    </>
  );
};

export default SavePdfCvButton;
