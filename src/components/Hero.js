import Skills from "./Skills";
import AOS from "aos";
import resume from "../logan-keene-resume.pdf";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
  const scrollToBottom = () => {
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="flex min-h-[calc(100vh-112px)] w-full lg:items-center border-b px-5 dark:border-borderDark sm:px-5 sm:transition-all py-20">
      <section className="mx-auto mb-[56px] flex max-w-screen-lg flex-col items-center justify-center md:gap-5 lg:flex-row lg:gap-10">
        <div className="w-full">
          <h2
            data-aos="fade"
            data-aos-delay="400"
            className="heading mx-auto flex w-full justify-center whitespace-nowrap text-center text-4xl font-bold tracking-tight sm:transition-all md:text-5xl lg:justify-start lg:text-left lg:text-6xl"
          >
            Nice to meet you,
          </h2>
          <h2
            data-aos="fade"
            data-aos-delay="500"
            className="heading text-center text-4xl font-bold tracking-tight ts text-blue-600 dark:text-blue-400 sm:transition-all md:text-5xl lg:text-left lg:text-6xl"
          >
            I'm Logan
          </h2>
          <p
            data-aos="fade"
            data-aos-delay="600"
            className="mx-auto mt-2.5 max-w-[535px] text-center lg:mt-5 lg:text-left"
          >
            Thank you for visiting my site. I am a frontend web-developer that
            uses tools like React and Tailwind to construct concise, functional
            web applications.
          </p>
          <nav
            data-aos="fade"
            data-aos-delay="700"
            className="mx-auto mt-4 flex justify-center gap-2.5 text-sm lg:justify-start"
          >
            <button
              onClick={scrollToBottom}
              className="rounded-md bg-blue-600 px-3.5 py-2 font-medium text-white active:shadow-none dark:bg-blue-400 dark:text-bgDarkest sm:transition-all sm:hover:shadow-md sm:active:scale-95 sm:active:shadow-none"
            >
              Contact
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gray-200 px-3.5 py-2 active:shadow-none dark:bg-bgDark sm:transition-all sm:hover:shadow-md sm:active:scale-95 sm:active:shadow-none"
            >
              Resume
            </a>
          </nav>
        </div>
        <section
          data-aos="fade"
          data-aos-delay="800"
          className="mx-auto mr-auto flex w-full max-w-[450px] mt-20 md:mt-0 justify-center self-center md:self-start md:pt-2.5"
        >
          <Skills />
        </section>
      </section>
    </header>
  );
};

export default Hero;
