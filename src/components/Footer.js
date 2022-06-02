import { FaEnvelope, FaLocationArrow, FaPaperclip } from "react-icons/fa";
import { SiCoderwall } from "react-icons/si";
import resume from "../logan-keene-resume.pdf";
const Footer = () => {
  return (
    <footer
      data-aos-offset="1000"
      className="select-none py-10 px-5 dark:bg-bgDarker lg:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-screen-lg">
        <div className="grid gap-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <section className="col-span-2 grid sm:flex sm:flex-col md:col-span-4 lg:col-span-1">
            <h4
              data-aos="fade"
              className="mb-2.5 flex items-center gap-1.5 font-semibold"
            >
              <SiCoderwall className="rotate-90 text-xs text-rose-600 dark:text-rose-400" />
              Logan Keene
            </h4>
            <p
              data-aos="fade"
              className="flex self-start text-sm text-gray-600 dark:text-gray-300 sm:w-3/5 lg:w-full"
            >
              I am a frontend web-developer that uses tools like React and
              Tailwind to construct concise, functional web applications. I am
              currently looking for a job.
            </p>
          </section>
          <section data-aos="fade" data-aos-delay="100">
            <h4 className="mb-2.5 font-semibold">Work</h4>
            <div className="flex flex-col items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://rlogank.com/chat"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Chat
              </a>
              <a
                href="https://rlogank.com/site-builder"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Site Builder
              </a>
              <a
                href="https://rlogank.com/social-media"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Social Media
              </a>
              <a
                href="https://rlogank.com/online-store"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Online Store
              </a>
              <a
                href="https://hollowverse.com/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Hollowverse
              </a>
              <a
                href="https://rlogank.com/crypto-exchange"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Crypto Exchange
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
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rlogank/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rlogank"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Twitter
              </a>
              <a
                href="https://www.fiverr.com/logansservices"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                Fiverr
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01088dae6645688131"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-start justify-start self-start transition-all hover:text-rose-600 dark:hover:text-rose-400"
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
                className="inline-flex cursor-pointer select-none flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                <FaLocationArrow className="text-xs" />
                Florida, Eastern Timezone
              </div>
              <a
                href="mailto:rlogank@icloud.com"
                rel="noreferrer"
                target="_blank"
                className="inline-flex flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                <FaEnvelope className="text-xs" />
                rlogank@icloud.com
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-nowrap items-center justify-start gap-1.5 self-start whitespace-nowrap transition-all hover:text-rose-600 dark:hover:text-rose-400"
              >
                <FaPaperclip className="text-xs" />
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
