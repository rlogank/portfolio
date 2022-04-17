import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
AOS.init();

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="150"
      className="flex w-full justify-center px-5"
    >
      <div className="flex h-[80vh] flex-col items-center justify-center gap-5 pt-20 text-white">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl"
        >
          I am a frontend web developer.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="max-w-[595px] pb-1.5 text-center text-lg"
        >
          Thank you for visiting my site. My name is Logan and I write clean web
          apps. No templates or pagebuilders. Just pure code.
        </div>
        <button
          onClick={scrollToContact}
          data-aos="fade-up"
          data-aos-delay="600"
          className="mx-auto flex self-start rounded-lg bg-black bg-opacity-10 px-4 py-3 text-base font-medium outline-blue-500 transition hover:bg-opacity-[15%] focus:bg-opacity-20 focus:outline"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Hero;
