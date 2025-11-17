import { useEffect, useState } from "react";

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

function ProjectCard({ title, description, tech, imageColor }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <div className={`h-32 ${imageColor} rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
        {title[0]}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-blue-600 font-semibold mb-4">{tech}</p>
      
      <div className="flex gap-2">
        <button 
          onClick={() => setLikes(likes + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
         Like ({likes})
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
          View Details
        </button>
      </div>
    </div>
  );
}

function Projects({ projectsList }) {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsList);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsList);
    } else {
      setFilteredProjects(projectsList.filter(project => 
        project.tech.toLowerCase().includes(filter.toLowerCase())
      ));
    }
  }, [filter, projectsList]);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
      
      <div className="mb-6 flex gap-3">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded transition ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('react')}
          className={`px-4 py-2 rounded transition ${filter === 'react' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          React
        </button>
        <button 
          onClick={() => setFilter('javascript')}
          className={`px-4 py-2 rounded transition ${filter === 'javascript' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          JavaScript
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            imageColor={project.imageColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;