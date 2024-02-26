import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="z-10 fixed flex justify-between p-10 bg-none h-14 w-full">
      <div>Logo</div>
      <div className="text-white text-4xl ">
        <NavMenu />
      </div>
    </div>
  );
};

const NavItems = () => {
  return (
     
<div>
  s
</div>
  );
}

export default Navbar;
