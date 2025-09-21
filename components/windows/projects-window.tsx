"use client"

import { FuturisticIcon } from "../futuristic-icon"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

export function ProjectsWindow() {
  const projects = [
    {
      name: "ThreatShield AI",
      tech: "Next.js, GROQ, Multi-modal AI",
      description:
        "Engineered a proactive threat intelligence platform improving threat detection efficiency by 40%. Architected real-time data pipeline analyzing audio, image, and text data.",
      status: "Live",
      github: "https://github.com/arnvjshi/Threat-Detection-Dashboard",
      impact: "40% efficiency improvement",
      image: "🛡️",
      metrics: { users: 1200, performance: 95 },
    },
    {
      name: "EduBot",
      tech: "Next.js, Flask, Gemini API",
      description:
        "Built a personalized AI learning companion with Next.js frontend and Flask backend. Leveraged Gemini API to generate on-demand study materials, boosting learning efficiency by 35%.",
      status: "Live",
      github: "https://github.com/arnvjshi/EduBot",
      impact: "35% learning efficiency boost",
      image: "🤖",
      metrics: { users: 800, performance: 92 },
    },
    {
      name: "Smart-Shop",
      tech: "Next.js, AWS Lambda, Serverless",
      description:
        "Revolutionized retail experience with frictionless checkout system cutting customer wait times by 100%. Serverless backend with event-driven Lambda functions.",
      status: "Live",
      github: "https://github.com/arnvjshi/Smart-Shop",
      impact: "100% wait time reduction",
      image: "🛒",
      metrics: { users: 2000, performance: 98 },
    },
    {
      name: "Infinity Quest",
      tech: "Pure JavaScript, Custom Engine",
      description:
        "Developed a captivating retro adventure game in pure JavaScript, engineering a performant engine from scratch with tile-based rendering and custom collision detection.",
      status: "Complete",
      github: "https://github.com/arnvjshi/infinity-quest",
      impact: "60 FPS gameplay",
      image: "🎮",
      metrics: { users: 500, performance: 88 },
    },
  ]

  const performanceData = projects.map((project) => ({
    name: project.name.split(" ")[0],
    performance: project.metrics.performance,
    users: project.metrics.users / 100,
  }))

  const impactData = [
    { month: "Jan", projects: 1 },
    { month: "Mar", projects: 2 },
    { month: "Jun", projects: 3 },
    { month: "Sep", projects: 4 },
  ]

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <FuturisticIcon type="rocket" className="w-6 h-6 mr-2 text-cyan-400" />
          Featured Projects Portfolio
        </h2>
        <div className="text-sm text-gray-400">4 Major Projects</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 font-semibold mb-4">Project Performance Metrics</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="performance" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 font-semibold mb-4">Development Timeline</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/70"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-2xl">{project.image}</div>
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : project.status === "Complete"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-blue-300 text-xs font-medium">{project.tech}</p>
                  <div className="text-xs text-cyan-400 font-medium">{project.impact}</div>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                  <span>👥 {project.metrics.users} users</span>
                  <span>⚡ {project.metrics.performance}% performance</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded text-xs transition-colors"
              >
                <FuturisticIcon type="github" className="w-3 h-3" />
                <span>View Code</span>
              </a>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <FuturisticIcon type="zap" className="w-3 h-3" />
                <span>High Impact</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <FuturisticIcon type="github" className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-medium">More Projects</span>
        </div>
        <p className="text-gray-300 text-sm">
          Explore additional projects and contributions on my GitHub profile. Always working on something new!
        </p>
      </div>
    </div>
  )
}
