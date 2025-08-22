import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NeoCare",
      description: "Developed a mobile app and website designed to support pregnant women throughout their pregnancy journey, featuring a chatbot that allows easy consultation with an OB-GYN.",
      technologies: ["React-Native", "React.js", "Chatbot"],
      image: "https://media.discordapp.net/attachments/1242839180506038373/1315935239989624832/NeoCare.png?ex=68a4c8f2&is=68a37772&hm=4557c354b0e4d2d52ca5f04c6c4611664ec7ccb2d3af7caa68b7b703cc991679&=&format=webp&quality=lossless&width=958&height=958",
      github: "https://github.com/keanulaw/NeoCare-App.git",
      live: "#",
      featured: true,
      period: "2023 - 2025"
    },
    {
      id: 2,
      title: "3D Website",
      description: "Immerse yourself in a new dimension of design with our interactive 3D experience powered by Spline and React. Built for modern creators and innovators like you.",
      technologies: ["React.js", "Spline"],
      image: "https://images.unsplash.com/photo-1606813902914-8d8d0b3eebf9?w=400&h=300&fit=crop", // sample 3D abstract render
      github: "https://github.com/keanulaw/my-3d-website",
      live: "https://my-3d-website-krqk.vercel.app/", // once deployed to GitHub Pages
      featured: true,
      period: "2025"
    },
    {
      id: 3,
      title: "Avalio",
      description: "Developed a mobile application for motor renters and owners to securely list, browse, book, and manage rentals with verified profiles and in-app communication.",
      technologies: ["React Native"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      github: "https://github.com/keanulaw",
      live: "#",
      featured: false,
      period: "2024 - 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are the projects I've built during my academic journey. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-200 text-sm mb-2">{project.description}</p>
                    <p className="text-blue-300 text-xs font-medium">{project.period}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800 dark:bg-slate-700 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"
                    >
                      View Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-8 text-center">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.period}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                    >
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
