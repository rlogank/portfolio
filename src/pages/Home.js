import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("/project/")) {
      document.getElementById("main").style.backgroundColor = "white";
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
