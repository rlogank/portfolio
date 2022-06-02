import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen select-none bg-gray-100 text-neutral-600 sm:transition-all dark:bg-bgDarker dark:text-light">
      <Nav />
      <div className="pt-[56px]" />
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
