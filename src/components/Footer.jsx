import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-indigo-600 text-white">
      <p>© 2025 Your Name. All rights reserved.</p>
      <div className="mt-2 space-x-6">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
