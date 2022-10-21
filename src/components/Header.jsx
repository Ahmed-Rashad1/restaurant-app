import React from "react";
import Logo from "./img/logo.png"
const Header = () => {
  return (
    <div className="w-screen fixed z-50 p-6 px-16">
      {/* desktop & tablet*/}
      <div className=" hidden md:flex w-full h-full">
        <div className="flex item-center gap-2"></div>
        <img src={Logo} alt="logo" className="w-10 object-cover" />
      </div>
      {/* mobile*/}
      <div className=" md:hidden flex w-full h-full"></div>
    </div>
  );
};

export default Header;
