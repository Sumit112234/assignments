import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ userName, tagline }) {
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const skills = [
    { title: "Design", description: "Creating beautiful and user-friendly interfaces", icon: "🎨" },
    { title: "Development", description: "Building responsive and functional websites", icon: "💻" },
    { title: "Problem Solving", description: "Finding creative solutions to challenges", icon: "🧩" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className={`text-center py-20 transition-opacity duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to {userName}'s Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {tagline}
        </p>
        <Link to="/projects">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View My Work
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ title, description, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;
