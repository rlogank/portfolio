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
          className="flex h-[36px] items-center justify-center rounded-md bg-gray-100 p-2.5 text-xs text-neutral-600 transition-all active:scale-95 hover:shadow-md active:shadow-none dark:bg-bgDarker dark:text-light gap-1.5 font-medium"
        >
          <FaSun /> Light mode
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-[36px] items-center justify-center rounded-md bg-gray-100 p-2.5 text-xs text-neutral-600 transition-all active:scale-95 hover:shadow-md gap-1.5 active:shadow-none dark:bg-bgDarker dark:text-light font-medium"
        >
          <FaMoon className="text-[0.75rem]"/> Dark mode
        </button>
      )}
    </div>
  );
};

export default Toggle;
