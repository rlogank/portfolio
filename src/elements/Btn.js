import clsx from "clsx";

const Btn = ({ icon, text, func, noPadding, white }) => {
  return (
    <button
      onClick={func}
      className={clsx(
        "flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-neutral-600 transition hover:text-black dark:text-light dark:hover:text-white",
        noPadding ? "!p-0" : "bg-white px-4 py-2.5 dark:bg-bgDarkest",
        white && "text-white"
      )}
    >
      <span className="text-xs">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default Btn;
