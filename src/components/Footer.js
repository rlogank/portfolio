import { FaEnvelope, FaLocationArrow, FaPaperclip } from "react-icons/fa";
import { SiCoderwall } from "react-icons/si";
import resume from "../logan-keene-resume.pdf";

const Footer = () => {
  return (
    <footer
      data-aos-offset="1000"
      className="select-none bg-white py-10 px-5 dark:bg-bgDarker lg:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-screen-lg">
        <div className="grid gap-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <section className="col-span-2 grid sm:flex sm:flex-col md:col-span-4 lg:col-span-1">
            <h4
              data-aos="fade"
              className="mb-2.5 flex items-center gap-1.5 font-semibold"
            >
              <SiCoderwall className="rotate-90 text-xs text-blue-500 dark:text-blue-500" />
              Logan Keene
            </h4>
            <p
              data-aos="fade"
              className="flex self-start text-sm text-gray-600 dark:text-gray-300 sm:w-3/5 lg:w-full"
            >
              I am a frontend web-developer that uses tools like React and
              Tailwind to construct concise, functional web applications.
            </p>
          </section>
          <section data-aos="fade" data-aos-delay="100">
            <h4 className="mb-2.5 font-semibold">Work</h4>
            <div className="flex flex-col items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://rlogank.com/site-builder"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Site Builder
              </a>
              <a
                href="https://rlogank.com/burbl"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Burbl
              </a>
              <a
                href="https://rlogank.com/pern"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                PERN Post
              </a>
              <a
                href="https://hollowverse.com/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Hollowverse
              </a>
            </div>
          </section>
          <section data-aos="fade" data-aos-delay="200">
            <h4 className="mb-2.5 font-semibold">External</h4>
            <div className="flex flex-col items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://github.com/rlogank"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rlogank/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rlogank"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Twitter
              </a>
              <a
                href="https://www.fiverr.com/logansservices"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Fiverr
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01088dae6645688131"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                Upwork
              </a>
            </div>
          </section>
          <section data-aos="fade" offset="-1000" data-aos-delay="300">
            <h4 className="mb-2.5 font-semibold">Information</h4>
            <div className="flex flex-col items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <div
                rel="noreferrer"
                target="_blank"
                className="inline-flex cursor-pointer select-none flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                <FaLocationArrow className="text-xs text-blue-500" />
                Florida, Eastern Timezone
              </div>
              <a
                href="mailto:rlogank@icloud.com"
                rel="noreferrer"
                target="_blank"
                className="inline-flex flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                <FaEnvelope className="text-xs text-blue-500" />
                rlogank@icloud.com
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap hover:text-blue-500 dark:hover:text-blue-400 sm:transition-all"
              >
                <FaPaperclip className="text-xs text-blue-500" />
                Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
