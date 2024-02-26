import React, {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiList, PiX } from "react-icons/pi";
import { Link } from "wouter";

const navItems = [{id: 'home', link:"/", label:'Home'}, {id: 'about', link:"/about", label:'About'}, {id: 'learn', link:"/learn", label: 'Learn More'}];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const childVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};


const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="z-10 fixed flex justify-end w-full p-10 gap-10">

  <AnimatePresence>
     { isToggled && <motion.ul variants={variants} initial="closed" animate={"open"} exit={"closed"}
        className="flex gap-10 text-lg over:cursor-pointer"
        >
          {navItems.map(item => (
            <motion.li key={item.id} variants={childVariants}
            className="hover:cursor-pointer "
            >
              <Link href={item.link} onClick={() => setToggle(!isToggled)}>{item.label}</Link>
            </motion.li>
          ))}
        </motion.ul>}
  </AnimatePresence>
    
      <motion.div 
      onClick={() => setToggle(!isToggled)}
      animate={{ rotate: isToggled ? 90 : 0 }}
      className="hover:cursor-pointer"
    >
      {isToggled ? <PiX size={24} /> : <PiList size={24} />}
    </motion.div>
      

      

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
