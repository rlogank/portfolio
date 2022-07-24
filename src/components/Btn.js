const Btn = ({ icon, text, func }) => {
  return (
    <button
      onClick={func}
      className="flex items-center bg-white gap-1.5 rounded-md border border-transparent bg-opacity-95 px-4 py-2.5 text-xs lg:text-sm font-semibold shadow-md transition active:border-gray-100 active:shadow-none dark:bg-bgDarkest dark:shadow-none dark:active:border-transparent"
    >
      <span className="text-xs">{icon}</span>
      {text}
    </button>
  );
};

export default Btn;
