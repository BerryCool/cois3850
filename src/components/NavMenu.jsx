import React from "react";
import { PiList } from "react-icons/pi";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "wouter";

const NavMenu = () => {
  return (
    <>
      <Menu>
        <Menu.Button className={"flex justify-end w-full "}>
          <PiList className="hover:cursor-pointer" />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            className={
              " border rounded-lg border-black bg-opacity-50 bg-gray-800 p-5 flex flex-col gap-3 text-lg text-right "
            }
          >
            <Menu.Item className="ui-active:bg-blue-500">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item className="ui-active:bg-blue-500">
              <Link to="/about">About</Link>
            </Menu.Item>

            <Menu.Item className="ui-active:bg-blue-500">
              <Link to="/learn">Learn More</Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavMenu;
