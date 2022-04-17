import Services from "../sections/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
AOS.init();

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="nav"
      data-aos="fade-up"
      className="absolute left-0 right-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between py-5 px-5 text-white"
    >
      <div className="text-3xl font-extrabold tracking-tight">
        {!open && "rlogank"}
      </div>

      <div className="flex items-center justify-between text-lg font-medium">
        <Services open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Nav;
