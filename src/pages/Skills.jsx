import React from "react";

function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Kotlin", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML5", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "React Native", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "Express.js", level: 70, color: "from-gray-500 to-gray-600" }
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Android Studio", level: 80, color: "from-green-500 to-green-600" },
        { name: "Git", level: 75, color: "from-orange-500 to-orange-600" },
        { name: "VS Code", level: 85, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      name: "Specialized Skills",
      skills: [
        { name: "Cybersecurity", level: 70, color: "from-red-500 to-red-600" },
        { name: "Video Editing", level: 75, color: "from-purple-500 to-purple-600" },
        { name: "Photoshop", level: 70, color: "from-blue-500 to-blue-600" }
      ]
    }
  ];

  const softSkills = [
    "Adaptability", "Teamwork", "Communication", "Problem Solving", 
    "Active Listening", "Mutual Respect", "Open-mindedness", "Time Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I've developed a diverse skill set through hands-on experience and continuous learning. 
            Here's what I bring to the table.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">
                    {categoryIndex + 1}
                  </span>
                </div>
                {category.name}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <div 
                        className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Professional & Soft Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900 dark:hover:to-blue-800 transition-all duration-200">
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Always Learning
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm constantly expanding my skill set and exploring new technologies
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full">
            <span>🚀</span>
            <span className="font-semibold">Currently Learning: Advanced React & Cloud Technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
