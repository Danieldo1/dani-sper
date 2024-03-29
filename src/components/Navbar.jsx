import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyText from "@carefully-coded/react-text-gradient";
import DarkModeToggle from "./DarkModeToggle";
import { Sling as Hamburger } from "hamburger-react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggle]);

  const variants = {
    hidden: { x: "100vh", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 dark:bg-primary light: bg-purple-100`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* LOGO GOES HERE */}
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <FancyText
            gradient={{ from: "#b50717", to: "#ad3c69", type: "linear" }}
            animateTo={{ from: "#794980", to: "#372f53" }}
            animateDuration={2000}
          >
            <p className="  dark:text-white text-[25px] font-bold cursor-pointer flex light: text-coral-400">
              Daniil&nbsp;
              <span className="sm:block hidden">| Web Developer</span>
            </p>
          </FancyText>
          {/* ENDS HERE */}
        </Link>
        <DarkModeToggle />
        {/* ADD SWITCH HERE */}
        <ul className=" list-none hidden lg:flex flex-row gap-10 ">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "dark:text-white light: text-midnight-100 transition-all duration-300 ease-in-out"
                  : "dark:text-secondary light: text-coral-400 transition-all duration-300 ease-in-out"
              } dark:hover:text-white text-[18px] font-medium cursor-pointer  light: hover:text-midnight-100`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Hamburger
            toggled={toggle}
            toggle={() => setToggle(!toggle)}
            color="#C99EC0"
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={variants} // Pass the variants object
                initial="hidden" // Set the initial state to the 'hidden' variant
                animate="visible" // Set the animate state to the 'visible' variant
                exit="hidden" // Set the exit state to the 'hidden' variant
                transition={{ type: "", stiffness: 100 }}
                className={`${
                  !toggle ? "hidden" : ""
                } px-12 py-5 bg-gradient-to-b bg-black/70 from-black flex to-transparent absolute w-full items-center h-screen justify-center top-20 right-0 my-0`}
              >
                <ul className=" list-none text-white mb-80 flex justify-center text-center items-center flex-col gap-16 ">
                  {navLinks.map((Link) => (
                    <li
                      key={Link.id}
                      className={`${active === Link.title ? "text-white" : ""} 
                  ${
                    active !== Link.title &&
                    "text-white/60 hover:text-white transition-all duration-300 ease-in-out"
                  }
                  font-poppins font-bold  tracking-wide cursor-pointer text-[16px]`}
                      onClick={() => {
                        setActive(Link.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${Link.id}`} className="text-4xl">
                        {Link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
