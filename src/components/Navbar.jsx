import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyText from '@carefully-coded/react-text-gradient'
import DarkModeToggle from "./DarkModeToggle";


import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 dark:bg-primary light: bg-purple-100`}
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
      gradient={{ from: '#b50717', to: '#ad3c69', type: 'linear' }}
      animateTo={{ from: '#794980', to: '#372f53' }}
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
        <ul className=" list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "dark:text-white light: text-midnight-100" : "dark:text-secondary light: text-coral-400"
              } dark:hover:text-white text-[18px] font-medium cursor-pointer  light: hover:text-midnight-100`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
