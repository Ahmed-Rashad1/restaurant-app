import React from "react";
import Logo from "./img/logo.png"
import { MdShoppingBasket } from 'react-icons/md'
const Header = () => {
  return (
    <div className="w-screen fixed z-50 p-6 px-16">
      {/* desktop & tablet*/}
      <div className=" hidden md:flex w-full h-full items-center justify-between">
        <div className="flex item-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </div>
        <div className=" items-center flex">
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services</li>
        </ul>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
          <div className=" absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center  rounded-full bg-cartNumBg">
            <p className=" text-xm text-white font-semibold">2</p>
          </div>
        </div>
        </div>
      </div>
      {/* mobile*/}
      <div className=" md:hidden flex w-full h-full"></div>
    </div>
  );
};

export default Header;
