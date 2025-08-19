// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <nav
        className="w-full h-16 flex items-center justify-center"
        aria-label="Primary"
      >
        {/* Centered navigation items with spacing */}
        <div className="flex justify-center items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-white hover:text-blue-400 transition-colors px-4 py-2 rounded-md hover:bg-gray-800"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      
    </header>
    
  );
}

export default Navbar;