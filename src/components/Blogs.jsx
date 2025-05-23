import React from "react";

const blogs = [
  {
    title: "Understanding Blockchain Technology",
    date: "April 10, 2025",
    excerpt: "Intro to how blockchain works and why it's powerful.",
  },
  {
    title: "Getting Started with React and Tailwind CSS",
    date: "March 22, 2025",
    excerpt: "How to set up your first project with Tailwind and React.",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-6 max-w-4xl mx-auto bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Blogs</h2>
      <div className="space-y-8 text-left">
        {blogs.map(({ title, date, excerpt }) => (
          <article key={title} className="border-b pb-4">
            <h3 className="text-2xl font-semibold mb-1">{title}</h3>
            <time className="block text-gray-500 mb-2">{date}</time>
            <p className="text-gray-700">{excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
