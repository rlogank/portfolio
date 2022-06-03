import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-neutral-600 dark:bg-bgDarker dark:text-light sm:transition-all">
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
