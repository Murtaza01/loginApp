import React, { useState } from "react";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ show }) {
  const [isClicked, SetIsClicked] = useState(false);

  function handleClick() {
    SetIsClicked(!isClicked);
  }
  return (
    <>
      <nav
        className={`mobile bg-indigo-600 sm:tablet  md:desktop md:bg-transparent
         ${
           isClicked
             ? "translate-x-[0] sm:right-0"
             : "translate-x-[-100%] sm:right-[-100%] md:right-0"
         }`}
      >
        <a href="#" className="min-h-16 min-w-16">
          <Logo />
        </a>
        <ul className="nav-list text-2xl font-mono text-slate-100 md:flex-row ">
          <li>
            <a href="#" className="hover:text-indigo-950 duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-950 duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-950 duration-200">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-950 duration-200 ">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-transparent border-[1px] py-2 px-6
               hover:bg-indigo-950 duration-500 rounded-md"
              onClick={show}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div
        onClick={handleClick}
        className={`block md:hidden fixed top-6 right-6`}
      >
        {isClicked ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
    </>
  );
}
