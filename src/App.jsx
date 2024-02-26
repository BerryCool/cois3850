import { useState } from "react";
import reactLogo from "./assets/svg/react.svg";
import viteLogo from "/vite.svg";
import { Routes } from "./utils";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
        <Navbar />
        <Routes />
    </div>
  );
}

export default App;
