import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { useState } from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";



function App() {
const [posts, setPosts] = useState(null)
  return (
    
    <div className="min-h-screen text-neutral-700 dark:bg-bgDarker dark:text-light sm:transition-all">

      <Nav />
      <div className="pt-[68px]" />
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
</div>
  );
}

export default App;
