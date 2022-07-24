import Toggle from "../context/ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init({ disable: "mobile" });

const Nav = () => {
  return (
    <nav
      data-aos="fade"
      className="fixed z-[900] flex h-[60px] w-full items-center border-b bg-white p-5 backdrop-blur-lg dark:border-transparent dark:bg-bgDarkest sm:transition-all"
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <h1
          tabIndex="0"
          className="heading flex w-2/6 items-center gap-1.5 text-lg font-semibold text-neutral-600 transition hover:text-blue-500 dark:text-light sm:transition-all"
        >
          <Link to="/" className="whitespace-nowrap transition">
            Logan
          </Link>
        </h1>
        <div className="flex items-center justify-end gap-2.5">
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
