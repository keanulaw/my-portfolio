import React from "react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "UC Banilad",
      year: "2020 – Present",
      description: "Currently pursuing my degree in Information Technology with focus on programming, mobile development, and web technologies.",
      gpa: "In Progress",
      achievements: ["Active Student", "Programming Projects", "Mobile Development Focus"],
      courses: ["Programming Fundamentals", "Web Development", "Mobile App Development", "Database Systems", "IT Fundamentals"]
    },
    {
      degree: "Senior High School",
      school: "Britech College",
      year: "2018 – 2020",
      description: "Completed senior high school with strong foundation in technology and computer science subjects.",
      gpa: "Graduated",
      achievements: ["Technology Track", "Computer Science Focus", "Academic Excellence"],
      courses: ["Computer Science", "Mathematics", "English", "Technology", "Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Education & Learning
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path that has shaped my technical foundation
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            Academic Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {education.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {item.school}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {item.year} • {item.gpa}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Key Achievements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Relevant Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              My Learning Philosophy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              Every project is an opportunity to learn something new and improve my skills.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full">
              <span>📚</span>
              <span className="font-semibold">Never Stop Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;