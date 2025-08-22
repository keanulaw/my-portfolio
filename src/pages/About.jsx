// src/pages/About.jsx
import React from "react";
import meImage from "../assets/me.webp";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Shannon Keanu A. Yase</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300">
                  Aspiring IT Professional | Mobile & Web Developer
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                Team-oriented and communication-driven professional with a strong foundation in programming and a passion for collaboration. Known for active listening, mutual respect, and maintaining a positive, open-minded attitude. Skilled in problem-solving and delivering meaningful results under pressure.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image/Illustration */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Main Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-2xl"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-xl">
                  <img 
                    src={meImage}
                    alt="Shannon Keanu A. Yase"
                    className="w-full h-100 object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">💡</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-ping">
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Details Section */}
      <div className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              More About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Let me tell you a bit more about my journey and what drives me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I started my IT journey at UC Banilad, where I've been developing my skills in programming, 
                mobile development, and web technologies. My passion for technology drives me to continuously 
                learn and adapt to new challenges.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe in the power of collaboration and maintaining positive relationships with colleagues. 
                My approach combines technical skills with strong communication and problem-solving abilities.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                What I Value
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Teamwork</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Collaborating effectively with diverse teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Adaptability</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Quickly learning and adapting to new technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Problem Solving</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Finding creative solutions under pressure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;