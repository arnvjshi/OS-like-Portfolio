"use client"

import { FuturisticIcon } from "../futuristic-icon"

export function ExperienceWindow() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Youniformwala",
      period: "May 2025 – Aug 2025 (10 weeks)",
      location: "Remote",
      description: "Developed and deployed a full-stack e-commerce platform using Next.js, Flask, and SQLAlchemy.",
      achievements: [
        "Implemented secure, token-based JWT authentication",
        "Led end-to-end debugging, resolving 50+ critical bugs",
        "Ensured stable product launch with zero downtime",
      ],
    },
    {
      role: "Technical Co-Head",
      company: "Colosseum 15.0",
      period: "Jan 2025 – Feb 2025 (4 weeks)",
      location: "Nagpur, Maharashtra",
      description: "Led a team of 5 developers to launch the official event website.",
      achievements: [
        "Handled 2,000+ visitors with zero downtime",
        "Developed JavaScript game increasing engagement by 40%",
        "Reduced backend API response time by 30% through optimization",
      ],
    },
    {
      role: "Tech Intern",
      company: "CompEx 2025",
      period: "Jan 2025 (2 weeks)",
      location: "Nagpur, Maharashtra",
      description: "Deployed real-time scoreboard and managed technical setup for gaming competitions.",
      achievements: [
        "Built real-time scoreboard using Firebase and React",
        "Managed technical setup for 100+ participants",
        "Achieved zero downtime during competitions",
      ],
    },
    {
      role: "Technical Coordinator",
      company: "Rotaract Club RBU",
      period: "Jul 2024 – Present (~57 weeks)",
      location: "Nagpur, Maharashtra",
      description: "Managed technical logistics for events and developed club website.",
      achievements: [
        "Increased online reach by 50% through live streaming",
        "Developed and maintained club website",
        "Streamlined event registration and member communication",
      ],
    },
  ]

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <FuturisticIcon type="briefcase" className="w-6 h-6 mr-2 text-cyan-400" />
          Work & Leadership Experience
        </h2>
        <div className="text-sm text-gray-400">5+ Leadership Roles</div>
      </div>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-blue-300 font-medium">{exp.company}</p>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{exp.location}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded">{exp.period}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-cyan-400 text-sm font-medium flex items-center">
                <FuturisticIcon type="zap" className="w-3 h-3 mr-1" />
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <FuturisticIcon type="file-text" className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-medium">Additional Information</span>
        </div>
        <p className="text-gray-300 text-sm">
          Full resume with detailed experience and references available upon request. Open to new opportunities and
          collaborations.
        </p>
      </div>
    </div>
  )
}
