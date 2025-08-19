import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Contact</span> Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Team-oriented and communication-driven professional with a strong foundation in programming
            and a passion for collaboration. Known for active listening, problem-solving, and delivering
            meaningful results.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 text-center">
          {/* Profile Image */}
          <div className="relative mx-auto mb-6 w-32 h-32">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full overflow-hidden">
                <img 
                  src="https://media.discordapp.net/attachments/828982363576729660/1407225388018438214/assets_task_01jwwqz5ykexw9fh13ch3ax65z_1749016420_img_0.webp?ex=68a55445&is=68a402c5&hm=6afed50d846a7e8b7b5888e77d354a4b6441f0fbdd87ce23e4319e571ae4fd3b&=&format=webp&width=638&height=958"
                  alt="Shannon Keanu A. Yase"
                  className="w-full h-100 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mb-8">
            <button className="bg-slate-700 dark:bg-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg">
              CONTACT ME
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 text-slate-600 dark:text-slate-400">📱</div>
              <span className="text-slate-800 dark:text-white font-medium">09942239150</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 text-slate-600 dark:text-slate-400">📧</div>
              <span className="text-slate-800 dark:text-white font-medium">shannonkeanu1@gmail.com</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 text-slate-600 dark:text-slate-400">📍</div>
              <div className="text-center">
                <span className="text-slate-800 dark:text-white font-medium">Villa Melissa Curva, Yati,</span><br />
                <span className="text-slate-800 dark:text-white font-medium">Liloan, Cebu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="tel:09942239150" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
          >
            📱 Call Now
          </a>
          <a 
            href="mailto:shannonkeanu1@gmail.com" 
            className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 text-center"
          >
            📧 Send Email
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Quick Response</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">I respond to messages within 24 hours</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Collaborative</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Team-oriented approach to every project</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Solution-Focused</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Creative problem-solving mindset</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;