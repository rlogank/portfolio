import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-600 dark:bg-bgDarker dark:text-light sm:transition-all">
      <Nav />
      <div className="pt-[60px]" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
