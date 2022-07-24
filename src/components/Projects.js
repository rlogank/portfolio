import blaster from "../assets/blaster.webp";
import browser from "../assets/browser.webp";
import builder from "../assets/builder.webp";
import burbl from "../assets/burbl.webp";
import frozens from "../assets/frozen-s.webp";
import frozen from "../assets/frozen.webp";
import openai from "../assets/openai.webp";
import pern from "../assets/pern.webp";
import getAverageColor from "get-average-color";
import { FaChevronRight } from "react-icons/fa";
import SectionWrapper from "../wrappers/SectionWrapper";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const projects = [
  {
    title: "Twitter Bot",
    type: "Personal",
    body: `An app I made that can autonomously like tweets for you. Type a query, hit go, and it will like all related tweets while adhering to rate limits. Uses Twitter's Oauth 1.0a 3-legged authorization API.`,
    stack: ["React", "Tailwind", "Express"],
    screenshot: blaster,
  },
  {
    title: "AI Discord Bot",
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
  useEffect(() => {
    projects.forEach((project) => {
      getAverageColor(project.screenshot).then((rgb) => {
        document.getElementById(
          project.title.replaceAll(" ", "-").toLowerCase()
        ).style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      });
    });
  }, []);

  return (
    <SectionWrapper
      id="portfolio"
      nextId="reviews"
      title="My"
      span="current projects"
      body="What you will find below is a variety of personal or client projects I have built, or am building. I am usually working at multiple projects at the same time. If you ask, I'll tell you all about them!"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => {
          return (
            <Link
              data-aos="fade-in"
              to={`/project/${p.title.replaceAll(" ", "-").toLowerCase()}`}
              key={i}
              className="flex w-full gap-5 overflow-hidden rounded-md p-5 dark:border-borderDark"
              id={p.title.replaceAll(" ", "-").toLowerCase()}
            >
              <img
                src={p.screenshot}
                alt="Project screenshot"
                className="pointer-events-none h-28 w-28 rounded-md bg-bgDarkest object-cover object-left-top"
              />
              <div className="flex justify-between">
                <div className="flex w-full items-start justify-between self-center">
                  <div className="flex flex-col gap-2 mix-blend-color-dodge">
                    <div className="text-lg font-bold brightness-[2.3] dark:text-neutral-700">
                      {p.title}
                    </div>
                    <div className="text-sm brightness-[2.3] line-clamp-2 dark:brightness-100">
                      {p.body}
                    </div>
                    <button className="flex items-center gap-1.5 text-sm brightness-[2.7] dark:brightness-100">
                      More info <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              {/* <img
                id={p.title.replaceAll(" ", "-").toLowerCase() + "-img"}
                src={p.screenshot}
                alt="Project screenshot"
                className="w-full bg-bgDarkest object-cover object-left-top"
              /> */}
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
