import clsx from "clsx";
import { FaBullhorn, FaMusic, FaPencilAlt, FaSmileWink } from "react-icons/fa";
import {
  SiHtml5,
  SiAntdesign,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiCsswizardry,
  SiMongodb,
  SiElectron,
  SiW3C,
  SiOpenai,
  SiFirebase,
  SiWordpress,
  SiGoogle,
} from "react-icons/si";

const Skills = () => {
  const skillsList = [
    {
      title: <SiW3C />,
      name: "Accessibility",
      color: "text-indigo-600",
    },
    {
      title: <SiAntdesign />,
      name: "UX/UI",
      color: "text-blue-600",
      break: false,
    },
    {
      title: <SiCsswizardry />,
      name: "CSS",
      color: "text-sky-600 ",
      break: false,
    },
    {
      title: <SiTailwindcss />,
      name: "Tailwind",
      color: "text-cyan-600",
      break: false,
    },
    {
      title: <SiElectron />,
      name: "Electron",
      color: "text-teal-600",
      break: false,
    },
    {
      title: <SiMongodb />,
      name: "Mongo",
      color: "text-emerald-600",
      break: false,
    },
    {
      title: <SiExpress />,
      name: "Express",
      color: "text-blue-600",
      break: false,
    },
    {
      title: <SiReact />,
      name: "React",
      color: "text-sky-600",
      break: false,
    },
    {
      title: <SiJavascript />,
      name: "JavaScript",
      color: "text-cyan-600",
      break: false,
    },
    {
      title: <SiHtml5 />,
      name: "HTML5",
      color: "text-teal-600",
      break: false,
    },
    {
      title: <SiOpenai />,
      name: "OpenAI",
      color: "text-emerald-600",
      break: false,
    },
    {
      title: <SiFirebase />,
      name: "Firebase",
      color: "text-green-600",
      break: false,
    },
    {
      title: <SiWordpress />,
      name: "E-commerce",
      color: "text-sky-600",
      break: false,
    },
    {
      title: <SiGoogle />,
      name: "SEO",
      color: "text-cyan-600",
      break: false,
    },
    {
      title: <FaPencilAlt className="text-3xl" />,
      name: "Copywriting",
      color: "text-teal-600",
      break: false,
    },
    {
      title: <FaBullhorn className="text-3xl" />,
      name: "Marketing",
      color: "text-emerald-600",
      break: true,
    },
    {
      title: <FaMusic className="text-3xl" />,
      name: "Logic Pro X",
      color: "text-green-600",
      break: true,
    },
    {
      title: <FaSmileWink className="text-3xl" />,
      name: "Friendly person",
      color: "text-lime-600",
      break: true,
    },
  ];

  return (
    <section className="w-full text-neutral-700 dark:text-light sm:transition-all">
      <div className="grid w-full grid-cols-3 justify-center justify-items-center gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-10">
        {skillsList.map((x, i) => {
          return (
            <div
              data-aos="fade"
              key={i}
              data-aos-delay={i * 100}
              className={clsx(
                `relative z-20 flex aspect-square w-full flex-col items-center justify-center gap-2.5 truncate rounded-[4px] bg-gradient-to-br from-blue-600 to-blue-500 text-white dark:border-bgDark dark:bg-bgDark dark:to-blue-600 dark:shadow-none sm:p-10 sm:transition-all`,
                x.break === true && "hidden md:flex"
              )}
            >
              <span
                className={`translate-z heading select-none text-2xl font-bold tracking-tight sm:transition-all md:text-3xl lg:text-4xl`}
              >
                {x.title}
              </span>
              <h3 className="heading select-none text-center text-[0.7rem] tracking-tight ">
                {x.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
