import { useState } from "react";
import reactLogo from "./assets/svg/react.svg";
import viteLogo from "/vite.svg";
import { Routes } from "./utils";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-gray-200 ">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="z-0">
        <Routes />
      </div>
    </div>
  );
}

export default App;
