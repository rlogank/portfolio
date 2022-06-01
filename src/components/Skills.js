import {
  SiHtml5,
  SiAntdesign,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiCsswizardry,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const skillsList = [
    {
      title: <SiAntdesign />,
      name: "UX/UI",
      color: "bg-indigo-500 ",
      colorblur: "bg-indigo-500 ",
      darkText: false,
      border: "md:border-indigo-500 ",
      body: "I aim to build sites that are a pleasure to look at and use.",
    },

    {
      title: <SiCsswizardry />,
      name: "CSS",
      color: "bg-[#379AD5] ",
      colorblur: "bg-[#379AD5] ",
      darkText: false,
      border: "md:border-[#379AD5] ",
      body: "My strong-suit. I can do anything on a webpage with!",
    },

    {
      title: <SiReact />,
      name: "React ",
      color: "bg-[#61DBFB] ",
      colorblur: "bg-[#61DBFB] ",
      darkText: true,
      border: "md:border-[#61DBFB] ",
      body: "My favorite library for creating functional web applications.",
    },
    {
      title: <SiTailwindcss />,
      name: "Tailwind",
      color: "bg-[#16BECB] ",
      colorblur: "bg-[#16BECB] ",
      darkText: false,
      border: "md:border-[#16BECB] ",
      body: "Another favorite. Tailwind makes my workflow more efficient.",
    },
    {
      title: <SiMongodb />,
      name: "Mongo",
      color: "bg-[#589636] ",
      colorblur: "bg-[#589636] ",
      darkText: false,
      border: "md:border-[#589636] ",
      body: "This website runs on a dedicated VPS running Nginx, PM2, and Node.",
    },
    {
      title: <SiExpress />,
      name: "Express ",
      color: "bg-[#90C53F] ",
      colorblur: "bg-[#90C53F] ",
      darkText: true,
      border: "md:border-[#90C53F] ",
      body: "I have recently started learning and practicing Express .",
    },
    {
      title: <SiJavascript />,
      name: "JavaScript",
      color: "bg-yellow-500 ",
      colorblur: "bg-yellow-500",
      darkText: true,
      border: "md:border-yellow-500",
      body: "I know intermediate JavaScript concepts and DOM manipulation.",
    },
    {
      title: <SiHtml5 />,
      name: "HTML5",
      color: "bg-[#E54D26]",
      colorblur: "bg-[#E54D26]",
      darkText: false,
      border: "md:border-[#E54D26] ",
      body: "I write clean and semantic HTML that makes sense.",
    },
  ];

  return (
    <div className="w-full text-neutral-600 transition-all dark:text-light">
      <div className="grid grid-cols-4 gap-2.5">
        {skillsList.map((x) => {
          return (
            <>
              <button
                className={`${
                  x.color
                } relative z-20 aspect-square h-[105px] w-full cursor-pointer rounded-[4px] bg-white bg-opacity-30 p-5 transition-all hover:bg-opacity-100 hover:shadow-lg focus:shadow-none dark:border-bgDark dark:bg-bgDark dark:shadow-none dark:hover:text-rose-400 sm:p-10  ${
                  x.darkText
                    ? "text-neutral-700 transition-all hover:text-black dark:text-light "
                    : "text-neutral-700 hover:text-white dark:text-light "
                } flex w-full flex-col items-center justify-center gap-2.5 p-2.5 transition-all md:aspect-square`}
              >
                <div
                  className={`heading select-none text-2xl font-bold tracking-tight transition-all md:text-3xl lg:text-4xl`}
                >
                  {x.title}
                </div>
                <div className="heading select-none text-center text-[0.7rem] tracking-tight">
                  {x.name}
                </div>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
