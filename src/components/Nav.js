import Services from "../sections/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiCoderwall } from "react-icons/si";
AOS.init();

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="nav"
      data-aos="fade-up"
      className="absolute left-0 right-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between py-5 px-5 text-white"
    >
      <a
        href="/"
        className="mt-1 select-none text-3xl font-extrabold tracking-tight"
      >
        <AnimatePresence>
          {!open && (
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                stiffness: 0,
              }}
              className="flex cursor-pointer items-center gap-2 text-2xl font-bold"
            >
              <SiCoderwall className="relative z-[9999] rotate-90 text-lg" />
              Logan
            </motion.h1>
          )}
        </AnimatePresence>
      </a>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{
            stiffness: 0,
          }}
          className="absolute right-5 top-5 flex items-center justify-between text-lg font-medium"
        >
          <Services open={open} setOpen={setOpen} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Nav;
