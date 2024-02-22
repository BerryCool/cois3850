import React from "react";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import { PiList } from "react-icons/pi";


const Navbar = () => {
  return (
    <div className="h-full z-10 fixed h-[100vh] w-full h-16 flex justify-between">
      <h1 className="text-2xl text-white p-10">logo</h1>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
