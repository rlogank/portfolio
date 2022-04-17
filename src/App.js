import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Reviews from "./sections/Reviews";
import { Toaster } from "react-hot-toast";
import Contact from "./sections/Contact";
import DividerTop from "./components/DividerTop";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div data-aos="fade-up" data-aos-delay="900">
        <Portfolio />
      </div>
      <Reviews />
      <Skills />
      <DividerTop />
      <Contact />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
