import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import NextSectionButton from "./NextSectionButton";
import Tilt from 'react-parallax-tilt';

AOS.init();

const Hero = () => {
  const scrollToBottom = () => {
    const bottom = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Tilt perspective={1800}>
      <header

        className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 px-5 py-20 dark:border-borderDark sm:transition-all lg:justify-center relative"
      >

        {/* <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-2.5">
          <h2 className="w-full text-4xl font-bold">
            Professional <span className="text-blue-500 dark:text-blue-400">web development</span>
          </h2>
          <p className="md:w-4/6">
            Welcome to my portfolio website. I am a passionate full-stack web
            developer, specializing in making blazing-fast, streamlined
            applications with modern frameworks and libraries like React and
            Tailwind.
          </p>
        </div> */}
        <section>
          <Skills />
        </section>
        <NextSectionButton func={() => {}} />
      </header>
    </Tilt>
  );
};

export default Hero;
