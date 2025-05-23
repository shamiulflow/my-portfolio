import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto text-lg text-gray-700">
        <span className="bg-gray-200 px-4 py-2 rounded">JavaScript</span>
        <span className="bg-gray-200 px-4 py-2 rounded">React</span>
        <span className="bg-gray-200 px-4 py-2 rounded">Node.js</span>
        <span className="bg-gray-200 px-4 py-2 rounded">Tailwind CSS</span>
        <span className="bg-gray-200 px-4 py-2 rounded">Solidity</span>
        <span className="bg-gray-200 px-4 py-2 rounded">Ethereum</span>
        <span className="bg-gray-200 px-4 py-2 rounded">MongoDB</span>
      </div>
    </section>
  );
};

export default Skills;

