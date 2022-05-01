import React from "react";
import Form from "../components/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiFiverr,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiUpwork,
} from "react-icons/si";
import { FaChevronCircleUp } from "react-icons/fa";
AOS.init();

export default function Contact() {
  const scrollToTop = () => {
    document.getElementById("nav").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex min-h-[50vh] w-full items-center justify-center self-center justify-self-center px-5 pt-20 pb-20 lg:pb-40 lg:pt-0"
      >
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl"
          >
            Get in touch.
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="max-w-[595px] pb-1.5 text-center text-lg"
          >
            I am looking for my first web development job. In the meantime I am
            doing freelance work.
          </div>
          <Form />
        </div>
      </div>
      <div
        id="contact"
        className="flex h-[96px] w-full justify-between items-center bg-black bg-opacity-10 px-5 text-2xl text-white"
      >
        <div className="text-3xl font-extrabold tracking-tight hidden lg:block">rlogank</div>
        <div className="flex items-center justify-between lg:justify-center lg:gap-10 w-full">
          <a target="_blank" rel="noreferrer" href="https://github.com/rlogank"><div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            <SiGithub />
          </div></a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/rlogank"><div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            <SiTwitter />
          </div></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/logan-keene-830b5522a/"><div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            <SiLinkedin />
          </div></a>
          <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01088dae6645688131"><div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            <SiUpwork />
          </div></a>
          <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/logansservices"><div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            <SiFiverr />
          </div></a>
          <div onClick={scrollToTop} className="justify-center lg:hidden flex aspect-square w-10 cursor-pointer items-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
          <FaChevronCircleUp />
        </div>
        </div>
        <div onClick={scrollToTop} className="ml-[63.7px] justify-center hidden lg:flex aspect-square w-10 cursor-pointer items-center self-center rounded-xl transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
          <FaChevronCircleUp />
        </div>
      </div>
    </>
  );
}
