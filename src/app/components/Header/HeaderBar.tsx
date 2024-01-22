import React from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const HeaderBar = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className="lg:hidden  ">
        <MobNavbar />
      </div>
    </>
  );
};

export default HeaderBar;
