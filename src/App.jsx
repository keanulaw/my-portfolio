// src/App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import "./tailwind.css";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="featured">
          <FeaturedWork />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        <p>© 2026 Shannon Keanu A. Yase · Built with Vite + React + Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
