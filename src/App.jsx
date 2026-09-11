import { useEffect } from "react";
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
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.remove("reveal-ready"));
    };
  }, []);
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
