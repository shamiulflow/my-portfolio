import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-indigo-600" : "text-white"
          }`}
        >
          Your Name
        </h1>
        <ul className="flex space-x-6 text-lg font-medium">
          {["home", "about", "skills", "projects", "blogs", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`hover:text-indigo-600 transition-colors duration-300 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
