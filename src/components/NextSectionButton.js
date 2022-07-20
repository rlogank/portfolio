import React from "react";
import { FaChevronDown } from "react-icons/fa";

const NextSectionButton = (props) => {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-screen-lg justify-end">
      <button
        onClick={props.func}
        className="flex items-center gap-2.5 rounded-md border border-neutral-300 p-2.5 text-neutral-400 duration-1000 focus:border-blue-500  focus:text-blue-500 dark:border-transparent dark:bg-bgDark dark:text-light dark:focus:border dark:focus:border-blue-400 dark:focus:bg-bgDarker dark:focus:text-blue-400 sm:transition-all"
      >
        <div className="ml-auto text-sm">Next section</div>
        <FaChevronDown className="text-xs" />
      </button>
    </div>
  );
};

export default NextSectionButton;
