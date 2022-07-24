import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Btn from "../components/Btn";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="ease-in-out sm:transition-all">
      {theme === "dark" ? (
        <Btn
          text="Light mode"
          icon={<FaMoon/>}
          func={() => setTheme(theme === "dark" ? "light" : "dark")}

        >
          <FaSun className="text-xs" />
          <span className="whitespace-nowrap sm:block">Light mode</span>
        </Btn>
      ) : (
        <Btn
          text="Dark mode"
          icon={<FaMoon/>}
          func={() => setTheme(theme === "dark" ? "light" : "dark")}

        >
          <FaMoon className="text-xs" />{" "}
          <span className="whitespace-nowrap sm:block">Dark mode</span>
        </Btn>
      )}
    </div>
  );
};

export default Toggle;
