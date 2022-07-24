import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "../wrappers/SectionWrapper";
AOS.init();

const Hero = () => {
  return (
    <SectionWrapper
      id="hero"
      nextId="portfolio"
      title="Professional"
      span="web development"
      body="Welcome to my portfolio website. I am a passionate full-stack web
          developer, specializing in making blazing-fast, streamlined
          applications with modern frameworks and libraries like React and
          Tailwind."
    >
      <Tilt perspective={1800} transitionSpeed={5000} trackOnWindow={true}>
        <Skills />
      </Tilt>
    </SectionWrapper>
  );
};

export default Hero;
