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
    <header className="relative flex h-[calc(100vh-56px)] w-full items-center border-b px-2.5 transition-all dark:border-borderDark sm:px-5 md:py-40 lg:py-60">
      <section className="mx-auto mb-[56px] flex max-w-screen-lg flex-col items-center md:gap-5 lg:flex-row lg:gap-10">
        <div className="w-full md:w-7/12">
          <h2
            data-aos="fade"
            data-aos-delay="400"
            className="heading text-center text-4xl font-bold tracking-tight transition-all md:text-5xl lg:text-left lg:text-6xl"
          >
            Nice to meet you,
          </h2>
          <h2
            data-aos="fade"
            data-aos-delay="500"
            className="heading text-center text-4xl font-bold tracking-tight text-rose-600 transition-all dark:text-rose-400 md:text-5xl lg:text-left lg:text-6xl"
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
            web applications. I am currently looking for a job.
          </p>
          <nav
            data-aos="fade"
            data-aos-delay="700"
            className="mx-auto mt-4 flex justify-center gap-2.5 text-sm lg:justify-start"
          >
            <button
              onClick={scrollToBottom}
              className="rounded-md bg-rose-600 px-3.5 py-2 font-medium text-white transition-all hover:shadow-md active:shadow-none dark:bg-rose-400 dark:text-bgDarkest active:scale-95 "
            >
              Contact
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gray-200 px-3.5 py-2 transition-all hover:shadow-md active:shadow-none dark:bg-bgDark active:scale-95"
            >
              Resume
            </a>
          </nav>
        </div>
        <section
          data-aos="fade"
          data-aos-delay="800"
          className="mx-auto mr-auto flex w-full max-w-[450px] justify-center self-center pt-20 md:self-start md:pt-10 lg:pt-2.5"
        >
          <Skills />
        </section>
      </section>
    </header>
  );
};

export default Hero;
