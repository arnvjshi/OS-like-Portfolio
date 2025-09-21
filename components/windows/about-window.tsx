"use client"

import { FuturisticIcon } from "../futuristic-icon"

export function AboutWindow() {
  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-cyan-400/30">
          <img src="/images/profile.png" alt="Arnav Joshi" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Arnav Joshi</h2>
          <p className="text-cyan-300 text-lg">Full-Stack Developer | Cloud & AI Enthusiast</p>
          <p className="text-blue-300 text-sm">B.Tech IT Student • CGPA: 9.0 • Nagpur, India</p>
          <p className="text-gray-400 text-xs">📞 +91 9356351894 • 📧 arnvjshi@gmail.com</p>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
          <FuturisticIcon type="user" className="w-5 h-5 mr-2" />
          About Me
        </h3>
        <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
          <p>
            IT undergrad specializing in full-stack development, cloud computing, and AI. Experienced in building
            scalable solutions and leading teams. Seeking opportunities to contribute strong technical and leadership
            skills.
          </p>
          <p>
            My journey in tech has been driven by curiosity and a desire to solve complex problems. From developing
            AI-powered threat detection systems to creating seamless e-commerce experiences, I thrive on turning ideas
            into reality through code.
          </p>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
          <FuturisticIcon type="zap" className="w-5 h-5 mr-2" />
          Core Competencies
        </h3>
        <div className="space-y-3">
          {[
            { skill: "Full-Stack Development", level: 90 },
            { skill: "Cloud Computing", level: 85 },
            { skill: "AI/ML Integration", level: 80 },
            { skill: "System Architecture", level: 85 },
            { skill: "Team Leadership", level: 88 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{item.skill}</span>
                <span className="text-blue-300">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
          <div className="text-2xl font-bold text-cyan-400">100+</div>
          <div className="text-xs text-gray-400">LeetCode Problems</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-400">9.0</div>
          <div className="text-xs text-gray-400">CGPA</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
          <div className="text-2xl font-bold text-purple-400">4+</div>
          <div className="text-xs text-gray-400">Major Projects</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
          <div className="text-2xl font-bold text-yellow-400">5+</div>
          <div className="text-xs text-gray-400">Leadership Roles</div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
          <FuturisticIcon type="mail" className="w-5 h-5 mr-2" />
          Get In Touch
        </h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:arnvjshi@gmail.com"
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded border border-blue-500/30 transition-colors"
          >
            <FuturisticIcon type="mail" className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/arnav-joshi-aj05/"
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded border border-blue-500/30 transition-colors"
          >
            <FuturisticIcon type="user" className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/arnvjshi"
            className="flex items-center space-x-2 px-3 py-2 bg-gray-600/20 hover:bg-gray-600/30 rounded border border-gray-500/30 transition-colors"
          >
            <FuturisticIcon type="github" className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}
