import { FaChevronRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Chat",
    URL: "https://rlogank.com/chat",
    type: "Personal",
    body: "Real-time, Discord-esque chat application with channels and typing indicators.",
    stack: ["React", "Tailwind", "Mongo", "Websockets"],
  },
  {
    title: "Site Builder",
    URL: "https://rlogank.com/site-builder",
    type: "Personal",
    body: "My website builder. Customize your site, click build, and it gives you the custom build files.",
    stack: ["React", "Tailwind", "Express"],
  },
  {
    title: "Social Media",
    URL: "https://rlogank.com/social-media",
    type: "Personal",
    body: "My first big project - real-time social app with hashtags, mentions, and notifications.",
    stack: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Online Store",
    URL: "https://rlogank.com/online-store",
    type: "Personal",
    body: "Landing page for a site that allows people to open online stores and sell products.",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Hollowverse",
    URL: "https://hollowverse.com/",
    type: "Client",
    body: "I was hired to convert the site from SCSS to Tailwind with a design overhaul.",
    stack: ["Next", "Tailwind"],
  },
  {
    title: "Crypto Exchange",
    URL: "https://rlogank.com/crypto-exchange",
    type: "Client",
    body: "I was hired to start constructing the frontend of a private crypto exchange.",
    stack: ["React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-gray-200 px-2.5 py-10 text-neutral-600 transition-all dark:bg-bgDarkest dark:bg-opacity-100 dark:text-light sm:px-5 md:py-20 lg:py-40">
      <div className="mx-auto mb-10 flex max-w-screen-lg flex-col items-center md:items-start">
        <div
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight transition-all md:text-left md:text-4xl lg:text-5xl"
        >
          These are my
        </div>
        <div
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight text-rose-500 transition-all dark:text-rose-400 md:text-left md:text-4xl lg:text-5xl"
        >
          current projects
        </div>
        <div
          data-aos="fade"
          className="mt-2.5 max-w-[535px] text-center md:text-left"
        >
          What you will find below is a variety of personal or client projects I
          have built, or am building.
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-lg flex-col">
        <div data-aos="fade" className="grid gap-2.5 sm:grid-cols-2 sm:gap-5">
          {projects.map((x, i) => {
            return (
              <div data-aos="fade">
                <a
                  href={x.URL}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="flex min-h-[138px] cursor-pointer select-none flex-col justify-between rounded-[4px] border-t-4 border-rose-500 bg-white bg-opacity-70 shadow-md transition-all lg:hover:scale-105 hover:shadow-lg focus:!scale-100 focus:shadow-none active:shadow-none dark:border-bgDark dark:bg-bgDarker dark:bg-opacity-100"
                >
                  <div className="flex flex-col gap-1 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2.5">
                        <div className="heading font-semibold">{x.title}</div>
                        <div className="text-xs text-neutral-500 transition-all dark:text-grayed">
                          {x.type}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-rose-600 transition-all dark:text-rose-400">
                        Visit <FaChevronRight className="text-xs" />
                      </div>
                    </div>
                    <div className="text-left text-sm dark:text-grayed">
                      {x.body}
                    </div>
                  </div>
                  {/* <div>{x.type}</div> */}
                  <div className="flex items-center justify-between gap-2.5 px-5 pb-5 text-[0.75rem] transition-all dark:text-grayed">
                    <div className="hidden text-base text-neutral-400 transition-all hover:text-rose-500 dark:hover:text-rose-400 sm:block">
                      <FaGithub />
                    </div>
                    <div className="flex gap-2.5 text-[0.67rem] xs:text-[0.75rem]">
                      {x.stack.map((x, i) => {
                        return (
                          <div
                            className="bg-gray-200 bg-opacity-50 py-0.5 px-2 shadow-sm transition-all dark:bg-bgDark xs:py-1 xs:px-2.5"
                            key={i}
                          >
                            {x}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
