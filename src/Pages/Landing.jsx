import React from "react";
import portrait from "../assets/images/portrait-person-with-depression.jpg";
import { PiCaretDown } from "react-icons/pi";

const Landing = () => {
  return (
    <div className="bg-[#001118] text-white">
      <div
        className="flex flex-col h-full items-center justify-center z-0 min-h-[100vh] bg-[url('./assets/images/portrait-person-with-depression.jpg')] bg-cover bg-center relative"
        style={{
          WebkitMaskImage: `linear-gradient(to top, transparent, #001118 30%)`,
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-[100vh] backdrop-filter backdrop-blur-sm text-white">
          <div className="font-barcode text-8xl text-center  relative">
            <h1>
              LEARN THE SIGNS OF
              <br />
              TRAFFICKING
            </h1>
          </div>
          <div className="flex flex-col items-center relative top-10">
            <button className="border bg-none px-10 py-1.5 relative">
              WATCH THE VIDEO
            </button>
            <button className="border bg-none px-2.5 py-1.5 relative top-10">
              <PiCaretDown />
              <PiCaretDown />
              <PiCaretDown />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[600px]">Content</div>
      </div>
    </div>
  );
};

export default Landing;
