import { useEffect, useState } from "react";
const items = [
  ["projects", "Work"],
  ["experience", "Experience"],
  ["about", "About"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const [id] of items) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 180)
          current = id;
      }
      setActive(current);
    };
    const close = (event) => {
      if (
        event.key === "Escape" &&
        document
          .getElementById("menu-toggle")
          ?.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", close);
    };
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="shell nav" aria-label="Primary">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Shannon, home"
        >
          shannon<span className="accent">.</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/keanulaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
