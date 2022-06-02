import clsx from "clsx";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Toggle from "../context/ThemeToggle";
import { SiCoderwall } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Nav = () => {
  const [activeItem, setActiveItem] = useState("");
  const social = [
    {
      name: "Github",
      url: "https://github.com/rlogank",
      icon: <FaGithub />,
      active: false,
      color: "!text-[#5C005C] dark:!text-light transition-all",
      bg: "hover:bg-[#5C005C] dark:hover:bg-opacity-50 transition-all",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rlogank/",
      icon: <FaLinkedin />,
      active: false,
      color: "!text-[#0077B5] dark:!text-light transition-all",
      bg: "hover:bg-[#0077B5] dark:hover:bg-opacity-50 transition-all",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rlogank",
      icon: <FaTwitter />,
      active: false,
      color: "!text-[#1CA1F1] dark:!text-light transition-all",
      bg: "hover:bg-[#1CA1F1] dark:hover:bg-opacity-50 transition-all",
    },
  ];

  const scrollToBottom = () => {
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-aos="fade"
      className="fixed z-[9999] flex h-[56px] w-full items-center border-b bg-white px-2.5 transition-all dark:border-borderDark dark:bg-bgDark"
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <h1
          tabindex="0"
          data-aos="fade"
          data-aos-delay="100"
          className="heading flex w-2/6 items-center gap-1.5 text-lg font-semibold text-neutral-600 transition-all dark:text-light"
        >
          <SiCoderwall className="rotate-90 text-xs text-rose-600 dark:text-rose-400" />
          <a href="https://rlogank.com/">rlogank</a>
        </h1>
        <div
          data-aos="fade"
          data-aos-delay="200"
          className="flex w-full items-center justify-center sm:mx-auto"
        >
          {social.map((s) => {
            return (
              <button>
                <a
                  onMouseOver={() => setActiveItem(s.name)}
                  onMouseOut={() => setActiveItem("")}
                  target="_blank"
                  rel="noreferrer"
                  href={s.url}
                  className={`text-neutral-500  ${s.bg} flex h-[56px] items-center gap-1 self-center px-3.5 text-[0.8rem] !transition-all !duration-200 hover:bg-opacity-5 hover:text-black dark:text-light dark:hover:bg-bgDarker sm:px-5`}
                >
                  <div
                    className={clsx(
                      activeItem === s.name && `${s.color} transition-all`,
                      "text-base text-neutral-500 transition-all dark:text-light sm:text-sm"
                    )}
                  >
                    {s.icon}
                  </div>
                  <div className="hidden sm:block">{s.name}</div>
                </a>
              </button>
            );
          })}
        </div>
        <div
          data-aos="fade"
          data-aos-delay="300"
          className="flex w-2/6 items-center justify-end gap-2.5 transition-all"
        >
          <Toggle />
          <button
            onClick={scrollToBottom}
            className="flex h-[36px] items-center justify-center rounded-md bg-rose-600 p-2.5 text-xs text-white 
          transition-all gap-1.5 hover:shadow-md active:shadow-none dark:bg-bgDarker dark:text-light  font-medium"
          >
            <FaEnvelope /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
