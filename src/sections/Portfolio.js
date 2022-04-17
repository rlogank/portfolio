// Other projects

import burbl from "../images/burbl.png";
import pern from "../images/pern.png";
import burblSite from "../images/burbl-site.png";
import bpSite from "../images/bp-site.png";
import oldSite from "../images/old-site.png";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { FaFolder, FaGithub, FaReact } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import WrapperTop from "../wrappers/WrapperTop";
import AOS from "aos";
import "aos/dist/aos.css";
import DividerBottom from "../components/DividerBottom";
AOS.init();

const Portfolio = () => {
  const projects = [
    {
      title: "Burbl",
      body: "Realtime social media platform using Firebase. Featuring a full notification system, user mentions, replies, likes, online statuses, and more.",
      image: burbl,
      sitePic: burblSite,
      stack: [<SiFirebase />, <FaReact />, <SiTailwindcss />],
      link: "https://rlogank.com/burbl",
      source: "https://github.com/rlogank/burbl",
      completed: true,
      type: "Social media",
      visit: true,
    },
    {
      title: "Finder UI",
      body: "Since I develop on Mac, I made another portfolio that looks like Mac OS's Finder application! It has been a fun project so far, will be adding more features.",
      sitePic: bpSite,
      stack: [<FaReact />, <SiTailwindcss />],
      link: "https://rlogank.com/finder-ui",
      completed: true,
      type: "Static",
      source: "https://github.com/rlogank/OSX-Filesystem-UI-Portfolio",
      visit: true,
    },
    {
      title: "PERN Post",
      body: "My learning project for Websockets, PostgreSQL, ExpressJS, and the basics of devops. Hosted on a dedicated VPS with NGINX and PM2.",
      image: pern,
      sitePic: oldSite,
      stack: [<FaReact />, <SiTailwindcss />],
      link: "https://rlogank.com/pern",
      completed: true,
      type: "Static",
      source: "https://github.com/rlogank/PERN-post",
      visit: true,
    },
  ];

  return (
    <>
      <DividerBottom />
      <WrapperTop>
        <div className="-mt-[-10px] flex min-h-[50vh] w-full flex-col items-center justify-center gap-5">
          <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-2.5 text-center text-base font-medium tracking-normal text-gray-400"
            >
              PORTFOLIO
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              My <span className="text-blue-600">recent projects</span>.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="max-w-[595px] pb-1.5 text-center text-lg"
          >
            These are my latest and greatest projects so far. I've got some more
            on the way!
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="grid w-full gap-5 rounded-lg p-5 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3"
          >
            {projects.map((i) => {
              return (
                <>
                  <div className="flex h-full flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-gray-100 p-8 text-neutral-700">
                    <div className="">
                      <div className="flex h-full w-full items-center justify-between">
                        <div className="flex aspect-square h-[40px] w-[40px] shrink-0 cursor-pointer rounded-lg transition">
                          {i.image ? (
                            <img
                              src={i.image}
                              alt="project"
                              className="cursor-pointer"
                            />
                          ) : (
                            <FaFolder className="flex self-center text-3xl text-amber-500" />
                          )}
                        </div>
                        <div className="flex w-full items-center ">
                          <div className="ml-5 flex flex-col text-xl font-semibold tracking-tight">
                            {i.title}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">{i.body}</div>
                    <div className="ml-auto flex gap-5">
                      {i.source && (
                        <a
                          href={i.source}
                          target="_blank"
                          rel="noreferrer"
                          className="flex cursor-pointer items-center gap-1 rounded-lg bg-gray-100 p-2 text-blue-600 transition hover:bg-gray-200 active:bg-gray-300"
                        >
                          <FaGithub />
                          <div className="text-xs">Source code</div>
                        </a>
                      )}
                      {i.visit && (
                        <a
                          href={i.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex cursor-pointer items-center gap-1 rounded-lg bg-blue-600 p-2 text-white outline-blue-300 transition hover:bg-blue-700 focus:outline active:bg-blue-800"
                        >
                          <GoLinkExternal />
                          <div className="text-xs">Visit {i.name}</div>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </WrapperTop>
    </>
  );
};

export default Portfolio;
