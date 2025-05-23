import React from "react";

const projects = [
  {
    title: "Web3 Teaching Evaluation System",
    description:
      "A blockchain-based teaching evaluation system using Ethereum.",
    link: "#",
  },
  {
    title: "Mobile Finder",
    description: "An API & JavaScript DOM project to search mobile phones.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map(({ title, description, link }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-700 mb-5">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

