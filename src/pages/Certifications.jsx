import React from "react";

function Certifications() {
  const certifications = [
    {
      name: "Safe Spaces Act",
      issuer: "UC Banilad",
      date: "2025",
      description: "Certification in understanding and implementing the Safe Spaces Act for creating inclusive and respectful environments.",
      logo: "🛡️",
      level: "Government",
      verification: "#",
      badge: "#"
    },
    {
      name: "Cybersecurity",
      issuer: "UC Banilad",
      date: "2025",
      description: "Professional certification in cybersecurity fundamentals, best practices, and threat prevention strategies.",
      logo: "🔒",
      level: "Professional",
      verification: "#",
      badge: "#"
    },
    {
      name: "Career in the IT Industry",
      issuer: "UC Banilad",
      date: "2025",
      description: "Comprehensive certification covering career development, industry trends, and professional growth in Information Technology.",
      logo: "💼",
      level: "Professional",
      verification: "#",
      badge: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Professional Certifications
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Industry-recognized credentials that validate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cert.level === "Professional" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" :
                      cert.level === "Government" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {cert.issuer}
                </p>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Issued: {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Actions */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
}

export default Certifications;