import { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaGithub,
  FaEye,
  FaChevronCircleDown,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import NextSectionButton from "./NextSectionButton";
import SectionHeader from "./SectionHeader";
import blaster from "./ss/blaster.png";
import browser from "./ss/browser.png";
import builder from "./ss/builder.png";
import burbl from "./ss/burbl.png";
import frozens from "./ss/frozen-s.webp";
import frozen from "./ss/frozen.png";
import openai from "./ss/openai.png";
import pern from "./ss/pern.png";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Twitter Bot",
    type: "Personal",
    body: `An app I made that can autonomously like tweets for you. Type a query, hit go, and it will like all related tweets while adhering to rate limits. Uses Twitter's Oauth 1.0a 3-legged authorization API.`,
    stack: ["React", "Tailwind", "Express"],
    screenshot: blaster,
  },
  {
    title: "AI Discord Bot (GPT-3)",
    URL: "",
    type: "Personal",
    body: "I recently applied for access to OpenAI's GPT-3 API and was approved. In conjuction with DiscordJS, I made this Discord bot that generate smart replies using GPT-3 artifical intelligence.",
    stack: ["React", "Tailwind", "Express"],
    screenshot: openai,
  },
  {
    title: "Frozen Freebies App",
    type: "Client",
    body: "A software that automatically finds good deals on Amazon. The lead developer reached out to me to make the app pretty, and so I made it pretty. Uses Electron, React, and Tailwind.",
    stack: ["React", "Tailwind", "Express"],
    screenshot: frozens,
  },
  {
    title: "Frozen Freebies Website",
    URL: "https://frozensoftware.com/",
    type: "Client",
    body: "In addition to redesigning the Frozen Freebies software, I was also hired to redesign their website to match the new design system of their application.",
    stack: ["React", "Tailwind", "Express"],
    screenshot: frozen,
  },
  {
    title: "Browser for Reddit",
    URL: "https://browser-for-reddit.vercel.app",
    type: "Personal",
    body: "A Reddit browser I'm making that averages the sentiments of each comment in each post, averages them together, and tells you how positive or negative the post is. Uses the Reddit API.",
    stack: ["React", "Tailwind", "Express"],
    sourceCode: "https://github.com/rlogank/browser-for-reddit",
    screenshot: browser,
  },
  {
    title: "Website Builder",
    URL: "https://rlogank.com/site-builder",
    type: "Personal",
    body: "A React website builder I'm making that lets you customize your site and gives you the customized build files that can be deployed to your server. Uses React Context API and Express.",
    stack: ["React", "Tailwind", "Express"],
    sourceCode: "https://github.com/rlogank/builder-app",
    screenshot: builder,
  },
  {
    title: "Social Media App",
    URL: "https://rlogank.com/burbl",
    type: "Personal",
    body: "My first big project - a real-time social app with hashtags, sections, mentions, notifications, likes, user tagging, statuses, and online statuses. Uses Firebase, React, and Tailwind.",
    stack: ["React", "Tailwind", "Firebase"],
    screenshot: burbl,
  },
  {
    title: "Tiny Message Board",
    URL: "https://rlogank.com/pern",
    type: "Personal",
    body: "I built this app when I started learning Websockets, PostgreSQL, Express, and a Ubuntu VPS using Nginx. The",
    stack: ["Next", "Tailwind"],
    sourceCode: "https://github.com/rlogank/pern-post",
    screenshot: pern,
  },
];

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    if (imageOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!imageOpen) {
      document.body.style.overflow = "auto";
    }
  }, [imageOpen]);

  console.log(activeImage);

  return (
    <>
      {imageOpen && (
        <div
          onClick={() => {
            setImageOpen(!imageOpen);
          }}
          className="fixed top-0 z-[1000] h-[2000px] w-screen bg-black bg-opacity-90"
          data-aos="fade-up"
        >
          <div className="fixed inset-0 flex h-screen items-center justify-center">
            <p className="absolute top-5 right-5 ml-auto cursor-pointer text-2xl text-white">
              <FaTimes />
            </p>
            <img
              src={activeImage}
              alt="My project screenshot"
              className="fixed flex max-w-[90vw] justify-center self-center"
            />
          </div>
        </div>
      )}
      <section className="flex w-full flex-col gap-10 border-y bg-white px-5 py-20 text-neutral-600 dark:border-[#111216] dark:bg-bgDarkest dark:bg-opacity-100 dark:text-light sm:px-5 sm:transition-all">
        {/* <SectionHeader
          title={<span>These are my <span className="text-blue-500 dark:text-blue-400">current projects</span></span>}
          body="What you will find below is a variety of personal or client projects I have built, or am building. I am usually working at multiple projects at the same time. If you ask, I'll tell you all about them!"
        /> */}
        <section className="mx-auto flex max-w-screen-lg flex-col">
          <div data-aos="fade" className="grid gap-5 sm:grid-cols-3">
            {projects.map((x, i) => {
              return (
                <article
                  onMouseOver={() => {
                    setActiveImage(x.screenshot);
                  }}
                  onMouseOut={() => {
                    if (!imageOpen) setActiveImage(null);
                  }}
                  data-aos="fade"
                  key={i}
                >
                  <div
                    href={x.URL}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                    className="flex flex-col justify-between rounded-[4px] border dark:border-[#111216] dark:bg-bgDarker dark:bg-opacity-100 sm:transition"
                  >
                    <div className="flex flex-col">
                      <div className="flex w-full items-baseline justify-between border-b p-5 dark:border-[#111216]">
                        <h4 className="heading font-semibold">{x.title}</h4>
                        <h5 className="text-xs text-neutral-500 dark:text-gray-400">
                          {x.type}
                        </h5>
                      </div>
                      <img
                        src={x.screenshot}
                        alt=""
                        className="relative h-[165px] object-cover object-top"
                      />
                      {activeImage === x.screenshot && (
                        <div
                          onClick={() => {
                            setImageOpen(!imageOpen);
                          }}
                          data-aos="fade"
                          className="absolute top-0 mt-[65px] flex h-[165px] w-full cursor-pointer items-center justify-center text-white transition"
                        >
                          <button className="pointer-events-none inline-flex items-center justify-center gap-2.5 self-center rounded-md bg-black px-4 py-2.5 text-white">
                            <FaEye />
                            View full
                          </button>
                        </div>
                      )}
                      {/* <p className="h-[140px] bg-white p-5 text-left text-sm dark:bg-bgDarker dark:text-gray-200">
                        {x.body}
                      </p> */}
                    </div>
                    {/* <div className="flex items-center gap-2.5 border-t dark:bg-bgDark p-5 text-[0.75rem] dark:border-[#111216] dark:text-gray-200">
                      {x.sourceCode && (
                        <a href={x.sourceCode} target="_blank" rel="noreferrer" className="flex bg-white dark:bg-bgDarker px-3.5 py-2 rounded-md cursor-pointer select-none items-center gap-1.5 text-xs transition hover:text-blue-500 dark:hover:text-blue-400 border dark:border-transparent">
                          <FaGithub className="text-xs" /> GitHub
                        </a>
                      )}
                      {x.URL && (
                        <a href={x.URL} target="_blank" rel="noreferrer" className="flex bg-white dark:bg-bgDarker px-3.5 py-2 rounded-md cursor-pointer select-none items-center gap-1.5 text-xs transition hover:text-blue-500 dark:hover:text-blue-400 border dark:border-transparent">
                          <FaExternalLinkAlt className="text-xs" /> Live
                        </a>
                      )}
                      <span
                        onMouseOver={() => {
                          setActiveImage(x.screenshot);
                        }}
                        onClick={() => {
                          setImageOpen(!imageOpen);
                        }}
                        className="flex bg-white dark:bg-bgDarker px-3.5 py-2 rounded-md cursor-pointer select-none items-center gap-1.5 text-xs transition hover:text-blue-500 dark:hover:text-blue-400 border dark:border-transparent"
                      >
                        <FaEye className="text-base" /> Screenshot
                      </span>
                    </div> */}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <NextSectionButton />
      </section>
    </>
  );
};

export default Projects;
