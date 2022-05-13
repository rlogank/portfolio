import Builder from "../images/builder.webp";
import Burbl from "../images/burbl.webp";
import Exchange from "../images/exchange.webp";
import Hollowverse from "../images/hollowverse.webp";
import Pern from "../images/pern.webp";
import WrapperTop from "../wrappers/WrapperTop";
import AOS from "aos";
import "aos/dist/aos.css";
import DividerBottom from "../components/DividerBottom";
import {
  FaChevronCircleRight,
  FaChevronRight,
  FaExternalLinkAlt,
  FaPlusCircle,
} from "react-icons/fa";
AOS.init();

const Portfolio = () => {
  const projects = [
    {
      title: "Hollowverse",
      image: Hollowverse,
      description:
        "Read facts about popular celebrities. I was hired to convert the site from SCSS to TailwindCSS with a design overhaul.",
      link: "https://hollowverse.com/elon-musk",
      type: "Commercial",
      primary: "NextJS",
      secondary: "TailwindCSS",
      third: "API",
    },
    {
      title: "Tedex",
      image: Exchange,
      description:
        "Trade cryptocurrencies easily. I was hired to lead the frontend development and design.",
      link: "",
      type: "Commercial",
      primary: "ReactJS",
      secondary: "TailwindCSS",
      third: "API",
    },
    {
      title: "Builder App",
      image: Builder,
      description:
        "A React website builder that builds React websites. The goal is to make it impossible to create an ugly website.",
      link: "",
      type: "Personal",
      primary: "ReactJS",
      secondary: "TailwindCSS",
      third: "API",
    },
    {
      title: "Burbl",
      image: Burbl,
      description:
        "My first big project - a social media application with all data updated in realtime - down to the profile view counter.",
      link: "burbl",
      type: "Personal",
      primary: "ReactJS",
      secondary: "TailwindCSS",
      third: "Firebase",
    },
    {
      title: "PERN Post",
      image: Pern,
      description:
        "The tiniest chat platform ever. My learning project for PostgreSQL, Websockets, and Devops.",
      link: "pern",
      type: "Personal",
      primary: "ReactJS",
      secondary: "PSQL",
      third: "ExpressJS",
    },
  ];

  return (
    <>
      <DividerBottom />
      <WrapperTop>
        <div className="flex min-h-[50vh] w-full flex-col items-start justify-center gap-2.5 text-neutral-700">
          <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div data-aos="fade-up" data-aos-delay="300">
              My <span className="text-blue-600">portfolio</span>.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="mb-10 max-w-[595px] pb-1.5 text-center text-lg"
          >
            A collection of my latest works; both commercial and personal.
          </div>
          <div className="grid w-full gap-5 lg:grid-cols-2 lg:gap-10 xl:grid-cols-2">
            {projects.map((i, index) => {
              return (
                <div data-aos="fade-up" data-aos-delay="600" key={index} className>
                  <div className="flex shrink cursor-pointer select-none flex-col justify-between gap-5 border-t-4 border-blue-600 bg-gray-100 p-5 transition hover:scale-[98%] active:scale-[96%] lg:p-10 h-full duration-100">
                    <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
                      <img
                        src={i.image}
                        alt={i.name}
                        className="aspect-square w-60 rounded-full border object-cover lg:w-40"
                      />
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold">{i.title}</h2>
                          <a
                            href={i.link}
                            rel="noreferrer"
                            target="_blank"
                            className="flex items-center gap-1.5 rounded-md bg-gray-200 px-2 py-1"
                          >
                            Visit
                            <FaChevronRight className="text-xs" />
                          </a>
                        </div>

                        <div className="absolute top-0 bg-black text-2xl font-bold text-black">
                          {i.name}
                        </div>
                        <p>{i.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="flex h-full shrink cursor-pointer select-none flex-col items-center justify-center gap-2.5 border-t-4 border-blue-600 bg-gray-100 p-5 text-2xl text-gray-400  transition hover:scale-[98%] active:scale-[96%] lg:p-10">
                <FaPlusCircle />
                Add a project
              </div>
            </div>
          </div>
        </div>
      </WrapperTop>
    </>
  );
};

export default Portfolio;
