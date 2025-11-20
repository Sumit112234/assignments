import React, { use, useEffect, useState } from "react";

const Welcome = ({ title, subtitle }) => (
  <div className="mb-6">
    <h1 className="text-3xl font-bold mb-2">{title}</h1>
    <p className="text-gray-700">{subtitle}</p>
  </div>
);

const RandomMotivationalQuote = ({ isDark }) => {

  const [quote, setQuote] = useState({text: "Loading...", author: ""});



  useEffect(() => {
    const fetchQuote = async () => {
      try {
        let res = await fetch("https://dummyjson.com/quotes/random");//https://dummyjson.com/quotes/random
      if (res.ok) {
        let data = await res.json();
        console.log("Motivational Quote:", data.quote, "—", data.author);
        setQuote({text: data.quote, author: data.author});
      }
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote({text: "Failed to load quote.", author: ""});
      }
    }
    fetchQuote();
    
  },[]);

  return (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">

      <div>
        <h3 className={`${isDark ? "text-purple-500" : "text-gray-900"} text-2xl font-bold pb-10 pt-1 `}>Motivation Quotes </h3>
      </div>
     <div>
       <p className="text-sm text-blue-800">
        “{quote.text}” 
      </p>
      <p className="text-sm text-blue-900">
        — {quote.author}
      </p>
     </div>
    </div>
  );
};

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const containerClasses = isDark
    ? "bg-gray-900 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div className={`rounded-lg shadow p-6 ${containerClasses}`}>
      <Welcome
        title="Welcome to Student Management Dashboard"
        subtitle="Track students, view details, and manage your favorites."
      />

      {/* Developer intro */}
      <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Developed by Sumit Baghel
        </h3>
        <p className="text-gray-700 mb-3">
          I'm a passionate full-stack web developer with a love for building clean, user-friendly applications. This dashboard is crafted to help educators and admins manage student data efficiently, using modern React, Tailwind CSS, and Redux Toolkit.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-blue-100 text-blue-700">
            React
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-purple-100 text-purple-700">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-emerald-100 text-emerald-700">
            Redux Toolkit
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-amber-100 text-amber-700">
            DummyJSON API
          </span>
        </div>
      </div>

      {/* Theme toggle */}
      <div className="mt-6 flex items-center justify-between">
        <span className="font-medium">Theme:</span>
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Motivational quote */}
      <RandomMotivationalQuote isDark={isDark} />

      {/* Project highlights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Dynamic student listing with API integration</li>
            <li>View detailed student profiles</li>
            <li>Favorite students management with Redux</li>
            <li>Responsive UI with Tailwind CSS</li>
            <li>Light/Dark mode toggle</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-2">About Me</h4>
          <p className="text-sm text-gray-700">
            I specialize in building full-stack web applications using React, Next.js, and modern JavaScript frameworks. I enjoy solving real-world problems with clean code and intuitive design.
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href="https://github.com/sumitbaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sumitbaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
