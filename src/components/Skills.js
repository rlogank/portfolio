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
      color: "bg-indigo-300",
    },

    {
      title: <SiAntdesign />,
      name: "UX/UI",
      color: "bg-blue-300",
      break: false,
    },

    {
      title: <SiCsswizardry />,
      name: "CSS",
      color: "bg-sky-300 ",
      break: false,
    },

    {
      title: <SiTailwindcss />,
      name: "Tailwind",
      color: "bg-cyan-300",
      break: false,
    },
    {
      title: <SiElectron />,
      name: "Electron",
      color: "bg-teal-300",
      break: false,
    },
    {
      title: <SiMongodb />,
      name: "Mongo",
      color: "bg-emerald-300",
      break: false,
    },
    {
      title: <SiExpress />,
      name: "Express",
      color: "bg-blue-300",
      break: false,
    },
    {
      title: <SiReact />,
      name: "React",
      color: "bg-sky-300",
      break: false,
    },
    {
      title: <SiJavascript />,
      name: "JavaScript",
      color: "bg-cyan-300",
      break: false,
    },

    {
      title: <SiHtml5 />,
      name: "HTML5",
      color: "bg-teal-300",
      break: false,
    },
    {
      title: <SiOpenai />,
      name: "OpenAI",
      color: "bg-emerald-300",
      break: false,
    },

    {
      title: <SiFirebase />,
      name: "Firebase",
      color: "bg-green-300",
      break: false,
    },
    {
      title: <SiWordpress />,
      name: "E-commerce",
      color: "bg-sky-300",
      break: false,
    },
    {
      title: <SiGoogle />,
      name: "SEO",
      color: "bg-cyan-300",
      break: false,
    },
    {
      title: <FaPencilAlt className="text-3xl" />,
      name: "Copywriting",
      color: "bg-teal-300",
      break: false,
    },
    {
      title: <FaBullhorn className="text-3xl" />,
      name: "Marketing",
      color: "bg-emerald-300",
      break: true,
    },
    {
      title: <FaMusic className="text-3xl" />,
      name: "Logic Pro X",
      color: "bg-green-300",
      break: true,
    },
    {
      title: <FaSmileWink className="text-3xl" />,
      name: "Friendly person",
      color: "bg-lime-300",
      break: true,
    },
  ];

  return (
    <section className="w-full mt-5 text-neutral-700 dark:text-light sm:transition-all">
      <div
        className="grid w-full grid-cols-3 justify-center justify-items-center gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      >
        {skillsList.map((x, i) => {
          return (
            
              <div
                data-aos="fade"
                data-aos-delay={i * 100}
                className={clsx(
                  `${x.color} relative z-20 flex aspect-square w-full flex-col items-center justify-center gap-2.5 truncate rounded-[4px] bg-white bg-opacity-30 p-5 dark:border-bgDark dark:bg-bgDark dark:shadow-none sm:p-10 sm:transition-all`,
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
