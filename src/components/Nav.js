import clsx from "clsx";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Toggle from "../context/ThemeToggle";
import { SiCoderwall } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "./Button";
AOS.init();

const Nav = () => {
  const [activeItem, setActiveItem] = useState("");
  const social = [
    {
      name: "Github",
      url: "https://github.com/rlogank",
      icon: <FaGithub />,
      active: false,
      color: "!text-[#5C005C] dark:!text-light sm:transition-all",
      bg: "hover:bg-[#5C005C] dark:hover:bg-opacity-50 sm:transition-all",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rlogank/",
      icon: <FaLinkedin />,
      active: false,
      color: "!text-[#0077B5] dark:!text-light sm:transition-all",
      bg: "hover:bg-[#0077B5] dark:hover:bg-opacity-50 sm:transition-all",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rlogank",
      icon: <FaTwitter />,
      active: false,
      color: "!text-[#1CA1F1] dark:!text-light sm:transition-all",
      bg: "hover:bg-[#1CA1F1] dark:hover:bg-opacity-50 sm:transition-all",
    },
  ];

  const scrollToBottom = () => {
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-aos="fade"
      className="fixed z-[900] flex w-full items-center bg-white border-b dark:border-[#111216] backdrop-blur-lg p-5 dark:bg-bgDark sm:transition-all"
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <h1
          tabindex="0"
          className="heading transition hover:text-blue-500 flex w-2/6 items-center text-lg gap-1.5 font-semibold text-neutral-600 dark:text-light sm:transition-all"
        >
          <Link to="/" className="transition whitespace-nowrap">Logan</Link>
        </h1> 
        <div
          className="flex items-center justify-end gap-2.5"
        >
          <Toggle />
          <Button text="Contact" icon={<FaEnvelope/>} primary={true}/>
          {/* <button
            onClick={scrollToBottom}
            className="flex h-[36px] w-[36px] sm:w-auto items-center justify-center gap-1.5 rounded-md bg-blue-500 p-2.5 text-xs 
          font-medium text-white dark:bg-bgDarker dark:text-light sm:transition-all sm:hover:shadow-md sm:active:shadow-none"
          >
            <FaEnvelope /> <span className="hidden sm:block">Contact</span>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
