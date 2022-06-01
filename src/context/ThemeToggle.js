import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition-all ease-in-out">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex aspect-square h-[36px] items-center justify-center rounded-md bg-gray-100 p-2.5 text-sm text-neutral-600 transition-all hover:scale-105 hover:shadow-md focus:scale-100 focus:shadow-none active:shadow-none dark:bg-bgDarker dark:text-light"
        >
          <FaSun />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex aspect-square h-[36px] items-center justify-center rounded-md bg-gray-100 p-2.5 text-xs text-neutral-600 transition-all hover:scale-105 hover:shadow-md focus:scale-100 focus:shadow-none active:shadow-none dark:bg-bgDarker dark:text-light"
        >
          <FaMoon />
        </button>
      )}
    </div>
  );
};

export default Toggle;
