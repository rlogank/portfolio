import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Toggle from "../context/ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import Btn from "./Btn";
AOS.init();

const Nav = () => {

  const scrollToBottom = () => {
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-aos="fade"
      className="fixed z-[900] h-[60px] flex w-full items-center bg-white border-b dark:border-transparent backdrop-blur-lg p-5 dark:bg-bgDarkest sm:transition-all"
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <h1
          tabIndex="0"
          className="heading transition hover:text-blue-500 flex w-2/6 items-center text-lg gap-1.5 font-semibold text-neutral-600 dark:text-light sm:transition-all"
        >
          <Link to="/" className="transition whitespace-nowrap">Logan</Link>
        </h1> 
        <div
          className="flex items-center justify-end gap-2.5"
        >
          <Toggle />


        </div>
      </div>
    </nav>
  );
};

export default Nav;
