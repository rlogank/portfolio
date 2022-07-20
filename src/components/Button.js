import clsx from "clsx";

const Button = ({ icon, text, primary }) => {
  return (
    <button
      className={clsx(
        primary
          ? "relative ml-auto flex items-center gap-1.5 rounded-md text-[0.8rem] text-sm font-semibold duration-150 hover:border-blue-500 hover:text-blue-500 active:border-blue-700 active:text-blue-700 active:shadow-none dark:hover:text-blue-400 dark:active:text-blue-400 sm:transition-all  border px-4 py-2.5 dark:bg-bgDarker dark:border-transparent"
          : "relative ml-auto flex items-center gap-1.5 rounded-md border-2  text-[0.8rem] text-sm font-semibold duration-150 hover:border-blue-500 hover:text-blue-500 active:border-blue-600 active:text-blue-600 active:shadow-none dark:hover:text-blue-400 dark:active:text-blue-400 sm:transition-all  border px-4 py-2.5 dark:bg-bgDarker dark:border-transparent"
      )}
    >
      <span className="">{icon}</span>
      {text}
    </button>
  );
};

export default Button;
