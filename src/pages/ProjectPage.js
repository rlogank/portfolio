import { useLocation, useParams } from "react-router-dom";
import ProjectWrapper from "../wrappers/ProjectWrapper";
import blaster from "../assets/full-res/blaster.png";
import browser from "../assets/full-res/browser.png";
import builder from "../assets/full-res/builder.png";
import burbl from "../assets/full-res/burbl.png";
import frozens from "../assets/full-res/frozen-s.webp";
import frozen from "../assets/full-res/frozen.png";
import openai from "../assets/full-res/openai.png";
import pern from "../assets/full-res/pern.png";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import {
  FaChevronRight,
  FaExpandAlt,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import Btn from "../elements/Btn";
import { useEffect } from "react";
import getAverageColor from "get-average-color";
import { AnimatePresence } from "framer-motion";

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

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    projects.forEach((project) => {
      if (id === project.title.replaceAll(" ", "-").toLowerCase()) {
        console.log("match");
        getAverageColor(project.screenshot).then((rgb) => {
          document.getElementById(
            project.title.replaceAll(" ", "-").toLowerCase()
          ).style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
          document.getElementById(
            "main"
          ).style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        });
      }
    });
  }, [navigate, location, id]);

  return (
    <>
      <AnimatePresence>
        {projects.map((project, i) => {
          if (project.title.replaceAll(" ", "-").toLowerCase() === id) {
            return (
              <ProjectWrapper
                key={i}
                id={id}
                next={true}
                title={
                  <span className="flex w-full items-center justify-between gap-5 text-white">
                    {project.title}
                    <button
                      onClick={() => {
                        navigate(
                          project === projects[projects.length - 1]
                            ? `/project/${projects[0].title
                                .replaceAll(" ", "-")
                                .toLowerCase()}`
                            : `/project/${projects[i + 1].title
                                .replaceAll(" ", "-")
                                .toLowerCase()}`
                        );
                      }}
                      className="flex items-center gap-1.5 rounded-full bg-black bg-opacity-20 p-5 text-base text-white transition-all duration-300 hover:bg-opacity-25 active:bg-opacity-30"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </span>
                }
                body={
                  <div className="flex flex-col gap-5">
                    <span className="text-white">{project.body}</span>
                    <div className="flex gap-2.5 ">
                      <a
                        href={project.screenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Btn text="Full screen" icon={<FaExpandAlt />} />
                      </a>
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Btn text="Code" icon={<FaGithub />} />
                        </a>
                      )}
                      {project.URL && (
                        <a
                          href={project.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Btn text="Live" icon={<FaExternalLinkAlt />} />
                        </a>
                      )}
                    </div>
                  </div>
                }
              >
                <div className="flex flex-col gap-5 py-20 px-5">
                  <Tilt
                    className=""
                    perspective={1800}
                    transitionSpeed={5000}
                    trackOnWindow={true}
                  >
                    <img
                      src={project.screenshot}
                      alt=""
                      className="mx-auto w-full max-w-screen-lg rounded-md object-contain"
                    />
                  </Tilt>
                </div>
              </ProjectWrapper>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </>
  );
};

export default ProjectPage;
