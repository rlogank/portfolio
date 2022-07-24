const Btn = ({ icon, text, func }) => {
  return (
    <button
      onClick={func}
      className="flex items-center bg-white gap-1.5 rounded-md border border-transparent bg-opacity-95 px-4 py-2.5 text-xs lg:text-sm font-semibold transition active:border-gray-100 active:shadow-none dark:bg-bgDarkest dark:shadow-none dark:active:border-transparent text-neutral-600 self-start dark:text-light dark:hover:text-white hover:text-black"
    >
      <span className="text-xs">{icon}</span>
      {text}
    </button>
  );
};

export default Btn;
