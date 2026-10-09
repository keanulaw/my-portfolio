import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="shell footer">
        <p>© {new Date().getFullYear()} Shannon Keanu A. Yase</p>
        <p>Built with React, Vite & Tailwind CSS</p>
        <a className="text-link" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
