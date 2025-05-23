import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto bg-gray-100 text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-4">Email: your.email@example.com</p>
      <p className="text-lg text-gray-700 mb-6">Phone: +8801XXXXXXXXX</p>
      <div className="flex justify-center space-x-8 text-indigo-600">
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
    </section>
  );
};

export default Contact;
