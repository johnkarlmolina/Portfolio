import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlyingBackground from "./components/FlyingBackground";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 dark:bg-zinc-950 light:bg-white text-zinc-50 dark:text-zinc-50 light:text-zinc-900 selection:bg-indigo-500/30 transition-colors duration-300">
      <FlyingBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
