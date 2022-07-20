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
          className="relative ml-auto flex items-center gap-1.5 rounded-md font-semibold duration-150 hover:border-blue-500 hover:text-blue-500 active:border-blue-600 active:text-blue-600 active:shadow-none sm:transition-all text-sm dark:hover:text-blue-400 dark:active:text-blue-400 border px-4 py-2.5 dark:bg-bgDarker dark:border-transparent"
        >
          <FaSun className="text-xs" />
          <span className="whitespace-nowrap sm:block">Light mode</span>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative ml-auto flex items-center gap-1.5 rounded-md font-semibold  duration-150 hover:border-blue-500 hover:text-blue-500 active:border-blue-600 active:text-blue-600 active:shadow-none sm:transition-all text-sm dark:hover:text-blue-400 dark:active:text-blue-400 border px-4 py-2.5 dark:bg-bgDarker dark:border-transparent"
        >
          <FaMoon className="text-xs" />{" "}
          <span className="whitespace-nowrap sm:block">Dark mode</span>
        </button>
      )}
    </div>
  );
};

export default Toggle;
