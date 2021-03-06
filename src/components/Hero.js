import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import NextSectionButton from "../elements/NextSectionButton";
import Btn from "../elements/Btn";
import { FaEnvelope } from "react-icons/fa";
import resume from "../logan-keene-resume.pdf";

AOS.init({ disable: "mobile" });

const Hero = () => {
  return (
    <section className="bg- w-full border-b dark:border-borderDark dark:bg-bgDarkest">
      <div className="relative mx-auto flex w-full flex-col gap-10 bg-opacity-5 bg-gradient-to-br from-blue-500 to-blue-600 px-5 text-white sm:transition-all lg:justify-center">
        <div className="relative mx-auto flex w-full max-w-screen-lg flex-col gap-10 py-20 sm:transition-all lg:justify-center">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-2.5">
            <h2 data-aos="fade" className="w-full text-4xl font-bold">
              Professional web development
            </h2>
            <p data-aos="fade" className="md:w-4/6">
              Welcome to my portfolio website. I am a passionate full-stack web
              developer, specializing in making blazing-fast, streamlined
              applications with modern frameworks and libraries like React and
              Tailwind.
            </p>
            <span className="mt-2.5 flex">
              <Btn
                func={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                text="Contact me"
                icon={<FaEnvelope />}
              />
              <a
                href={resume}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-1.5 self-start rounded-md border border-transparent bg-opacity-95 px-4 py-2.5 text-sm font-semibold text-white transition active:shadow-none dark:text-white dark:shadow-none dark:active:border-transparent"
              >
                Resume
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 py-10 px-5 lg:px-0">
        <Tilt perspective={1800} transitionSpeed={5000} trackOnWindow={true}>
          <Skills />
        </Tilt>

        <NextSectionButton nextId="portfolio" />
      </div>
    </section>
  );
};

export default Hero;
