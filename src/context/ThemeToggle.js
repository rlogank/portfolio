import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="ease-in-out sm:transition-all">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-[36px] items-center justify-center gap-1.5 rounded-md bg-gray-100 p-2.5 text-xs font-medium text-neutral-600 active:shadow-none dark:bg-bgDarker dark:text-light sm:transition-all sm:hover:shadow-md sm:active:scale-95"
        >
          <FaSun />
          <span className="hidden whitespace-nowrap sm:block">Light mode</span>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-[36px] items-center justify-center gap-1.5 rounded-md bg-gray-100 p-2.5 text-xs font-medium text-neutral-600 active:shadow-none dark:bg-bgDarker dark:text-light sm:transition-all sm:hover:shadow-md sm:active:scale-95"
        >
          <FaMoon className="text-[0.75rem]" />{" "}
          <span className="hidden whitespace-nowrap sm:block">Dark mode</span>
        </button>
      )}
    </div>
  );
};

export default Toggle;
