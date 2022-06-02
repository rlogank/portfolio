import { FaChevronRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Site Builder",
    URL: "https://rlogank.com/site-builder",
    type: "Personal",
    body: "My site builder. You can customize your site and it gives you the custom build files.",
    stack: ["React", "Tailwind", "Express"],
  },
  {
    title: "Burbl",
    URL: "https://rlogank.com/burbl",
    type: "Personal",
    body: "My first big project - real-time social app with hashtags, mentions, and notifications.",
    stack: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "PERN Post",
    URL: "https://rlogank.com/pern",
    type: "Client",
    body: "PERN stands for PostgreSQL, Express, React, and Node - which are what this application was made with.",
    stack: ["Next", "Tailwind"],
  },
  {
    title: "Hollowverse",
    URL: "https://hollowverse.com/",
    type: "Client",
    body: "I was hired to convert the site from SCSS to Tailwind with a design overhaul.",
    stack: ["Next", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-gray-200 px-2.5 py-10 text-neutral-600 transition-all dark:bg-bgDarkest dark:bg-opacity-100 dark:text-light sm:px-5 md:py-20 lg:py-40">
      <header className="mx-auto mb-10 flex max-w-screen-lg flex-col items-center md:items-start">
        <h3
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight transition-all md:text-left md:text-4xl lg:text-5xl"
        >
          These are my
        </h3>
        <h3
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight text-rose-600 transition-all dark:text-rose-400 md:text-left md:text-4xl lg:text-5xl"
        >
          current projects
        </h3>
        <p
          data-aos="fade"
          className="mt-2.5 max-w-[535px] text-center md:text-left"
        >
          What you will find below is a variety of personal or client projects I
          have built, or am building.
        </p>
      </header>
      <section className="mx-auto flex max-w-screen-lg flex-col">
        <div data-aos="fade" className="grid gap-2.5 sm:grid-cols-2 sm:gap-5">
          {projects.map((x, i) => {
            return (
              <article data-aos="fade">
                <a
                  href={x.URL}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="flex min-h-[138px] cursor-pointer select-none flex-col justify-between rounded-[4px] border-t-4 border-rose-600 bg-white bg-opacity-70 shadow-md transition-all hover:shadow-lg active:shadow-none dark:border-bgDark dark:bg-bgDarker dark:bg-opacity-100 active:scale-95"
                >
                  <div className="flex flex-col gap-1 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2.5">
                        <h4 className="heading font-semibold">{x.title}</h4>
                        <h5 className="text-xs text-neutral-500 transition-all dark:text-gray-400">
                          {x.type}
                        </h5>
                      </div>
                      <p className="flex items-center gap-1 text-sm font-medium text-rose-600 transition-all dark:text-rose-400">
                        Visit <FaChevronRight className="text-xs" />
                      </p>
                    </div>
                    <p className="text-left text-sm dark:text-gray-200">
                      {x.body}
                    </p>
                  </div>
                  {/* <div>{x.type}</div> */}
                  <div className="flex items-center justify-between gap-2.5 px-5 pb-5 text-[0.75rem] transition-all dark:text-gray-200">
                    <span className="hidden text-base text-neutral-400 transition-all hover:text-rose-600 dark:hover:text-rose-400 sm:block">
                      <FaGithub />
                    </span>
                    <div className="flex gap-2.5 text-[0.67rem] xs:text-[0.75rem]">
                      {x.stack.map((x, i) => {
                        return (
                          <span
                            className="bg-gray-200 bg-opacity-50 py-0.5 px-2 shadow-sm transition-all dark:bg-bgDark xs:py-1 xs:px-2.5"
                            key={i}
                          >
                            {x}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Projects;
