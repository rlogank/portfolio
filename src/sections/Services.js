import {
  SiUpwork,
  SiTwitter,
  SiGithub,
  SiFiverr,
  SiLinkedin,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
AOS.init();

const Services = ({ open, setOpen }) => {
  return (
    <>
      <div className="hidden w-full items-center justify-center rounded-xl text-white lg:flex lg:gap-2.5 lg:text-2xl">
        <a target="_blank" rel="noreferrer" href="https://github.com/rlogank">
          <button className="flex aspect-square w-12 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
            <SiGithub />
          </button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/rlogank">
          <button className="flex aspect-square w-12 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
            <SiTwitter />
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/logan-keene-830b5522a/"
        >
          <button className="flex aspect-square w-12 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
            <SiLinkedin />
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.upwork.com/freelancers/~01088dae6645688131"
        >
          <button className="flex aspect-square w-12 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
            <SiUpwork />
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.fiverr.com/logansservices"
        >
          <button className="flex aspect-square w-12 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
            <SiFiverr />
          </button>
        </a>
      </div>
      <div className="flex w-full items-center justify-center gap-5 rounded-xl text-2xl text-white lg:hidden">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                stiffness: 0,
              }}
              className="flex w-full items-center justify-center gap-5 rounded-xl text-2xl text-white lg:hidden"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/rlogank"
              >
                <button className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
                  <SiGithub />
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/rlogank"
              >
                <button className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
                  <SiTwitter />
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/logan-keene-830b5522a/"
              >
                <button className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
                  <SiLinkedin />
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.upwork.com/freelancers/~01088dae6645688131"
              >
                <button className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
                  <SiUpwork />
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.fiverr.com/logansservices"
              >
                <button className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl outline outline-transparent transition hover:bg-black hover:bg-opacity-10 focus:outline-blue-400 active:bg-opacity-20">
                  <SiFiverr />
                </button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          <div className="rounded-md transition hover:bg-black hover:bg-opacity-10 active:bg-opacity-20">
            {open && (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -90 }}
                exit={{ rotate: 180 }}
                onClick={() => {
                  setOpen(false);
                }}
                className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl"
              >
                <FaTimes />
              </motion.div>
            )}
            {!open && (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: -180 }}
                onClick={() => {
                  setOpen(true);
                }}
                className="flex aspect-square w-10 cursor-pointer items-center justify-center self-center rounded-xl"
              >
                <BsThreeDots />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Services;
