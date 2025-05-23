import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Your Name</span>
        </h1>
        <p className="text-xl mb-6">
          Full Stack Developer | Blockchain Enthusiast
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

