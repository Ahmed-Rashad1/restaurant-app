import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <header className="w-screen fixed z-50 p-3 px-8 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet*/}
      <div className=" hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex item-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor flex items-center text-xl font-bold">
            city
          </p>
        </Link>
        <div className=" items-center flex">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 ml-auto"
          >
            <Link
              to="/"
              className="text-base text-textColor hover:text-black duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <li className="text-base text-textColor hover:text-black hover:text-b duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-black hover:text-b duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-black hover:text-b duration-100 transition-all ease-in-out cursor-pointer">
              Services
            </li>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center  rounded-full bg-cartNumBg">
                <p className=" text-xm text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] ml-8 drop-shadow-xl cursor-pointer rounded-full"
              alt="profile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                className=" cursor-pointer w-40 flex flex-col bg-gray-50 rounded-lg absolute top-12 right-3"
              >
                {user && user.email === "a7medra4aad3@gmail.com" && (
                  <Link to="/CreateItem">
                    <p
                      className="px-4 py-2 flex gap-5 items-center hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out rounded-lg text-base text-textColor"
                      onClick={() => setIsMenu()}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex gap-10 items-center hover:bg-slate-700 hover:text-cyan-50 transition-all duration-200 ease-in-out rounded-lg text-base text-textColor"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center  rounded-full bg-cartNumBg">
              <p className=" text-xm text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to="/" className="flex item-center gap-2 ml-3">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor flex items-center text-xl font-bold">
            city
          </p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.7 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="profile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              className=" cursor-pointer w-40 flex flex-col bg-gray-50 rounded absolute top-12 right-3 shadow-xl"
            >
              {user && user.email === "a7medra4aad3@gmail.com" && (
                <Link to="/CreateItem">
                  <p
                    className="px-4 py-2 flex gap-5 items-center hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out text-base text-textColor"
                    onClick={() => setIsMenu()}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li
                  className="text-base text-textColor hover:bg-slate-500 hover:text-slate-50 duration-100 transition-all ease-in-out cursor-pointer  px-4 py-2 "
                  onClick={() => setIsMenu()}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:bg-slate-500 hover:text-slate-50 hover:text-b duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                  onClick={() => setIsMenu()}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:bg-slate-500 hover:text-slate-50 hover:text-b duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                  onClick={() => setIsMenu()}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:bg-slate-500 hover:text-slate-50 hover:text-b duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                  onClick={() => setIsMenu()}
                >
                  Services
                </li>
              </ul>
              <p
                className="m-2 p-2 shadow-xl flex gap-5 hover:bg-slate-800 justify-center items-center hover:text-cyan-50 transition-all duration-200 ease-in-out rounded text-base text-textColor bg-gray-200"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
