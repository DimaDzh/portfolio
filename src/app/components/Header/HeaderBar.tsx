import React from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const HeaderBar = () => {
  return (
    <>
      <div id="header" className="hidden overflow-hidden lg:flex">
        <Navbar />
      </div>
      <div id="header" className="lg:hidden  ">
        <MobNavbar />
      </div>
    </>
  );
};

export default HeaderBar;
