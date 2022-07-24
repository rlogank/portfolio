import React from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-screen-lg justify-end">
      <button
        onClick={() => {
          const element = document.getElementById("hero");
          window.scrollIntoView({ element, behavior: "smooth" });
        }}
        className="flex items-center gap-2.5 rounded-md border border-neutral-300 p-2.5 text-neutral-400 duration-150 focus:border-blue-500  focus:text-blue-500 dark:border-transparent dark:bg-bgDark dark:text-light dark:focus:border dark:focus:border-blue-400 dark:focus:bg-bgDarker dark:focus:text-blue-400 sm:transition-all"
      >
        <div className="ml-auto text-sm">Back to top</div>
        <FaChevronUp className="text-xs" />
      </button>
    </div>
  );
};

export default BackToTop;
