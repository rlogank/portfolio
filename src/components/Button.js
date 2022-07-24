import clsx from "clsx";

const Button = ({ icon, text, primary }) => {
  return (
    <button className="relative ml-auto flex items-center gap-1.5 rounded-md bg-blue-500 px-4 py-2.5 text-[0.8rem] text-sm font-semibold text-white duration-150 hover:border-blue-500 hover:text-blue-500 active:border-blue-700 active:text-blue-700   active:shadow-none dark:border-transparent dark:bg-bgDarker dark:hover:text-blue-400 dark:active:text-blue-400 sm:transition-all">
      <span className="">{icon}</span>
      {text}
    </button>
  );
};

export default Button;
