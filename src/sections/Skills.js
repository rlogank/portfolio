import { FaCheckCircle } from "react-icons/fa";
import skills from "../images/skills.svg";
import Wrapper from "../wrappers/WrapperBottom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const skillsList = [
  { title: "HTML", body: "I write clean and semantic HTML that makes sense." },
  {
    title: "CSS",
    body: "My strong-suit. I can do anything on a webpage with CSS!",
  },
  {
    title: "UX/UI",
    body: "I aim to build sites that are a pleasure to look at and use.",
  },
  {
    title: "JavaScript",
    body: "I know intermediate JavaScript concepts and DOM manipulation.",
  },
  {
    title: "React",
    body: "My favorite library for creating functional web applications.",
  },
  {
    title: "TailwindCSS",
    body: "Another favorite. Tailwind makes my CSS workflow more efficient.",
  },
  {
    title: "Express",
    body: "I have recently started learning and practicing Express JS.",
  },
  {
    title: "Devops",
    body: "This website runs on a dedicated VPS running Nginx, PM2, and Node.",
  },
];

const Skills = () => {
  return (
    <Wrapper>
      <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 px-5 lg:flex-row">
        <div data-aos="fade-up" className="flex justify-center lg:w-1/2">
          <img alt="skills" src={skills} className="w-1/2" />
        </div>
        <div className="flex flex-col justify-center gap-5 lg:w-1/2">
          <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-2.5 text-left text-base font-medium tracking-normal text-gray-400"
            >
              SKILLS
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              I know a<span className="text-blue-600"> thing or two</span>.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="pb-1.5 text-lg"
          >
            Nothing makes me as excited as adding new skills to my arsenal of
            web-knowledge!
          </div>
          <div className="grid grid-cols-2 lg:gap-10">
            {skillsList.map((s) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="p-2.5 lg:p-0"
                >
                  <h3 className="flex items-center gap-1 font-semibold">
                    <FaCheckCircle className="text-blue-600" />
                    {s.title}
                  </h3>
                  <p>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
