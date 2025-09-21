"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export function SkillsWindow() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      proficiency: 90,
      color: "#06b6d4",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
      proficiency: 85,
      color: "#3b82f6",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      proficiency: 80,
      color: "#8b5cf6",
    },
    {
      category: "AI & ML",
      skills: ["OpenAI API", "TensorFlow", "PyTorch", "Langchain", "Vector DBs"],
      proficiency: 75,
      color: "#10b981",
    },
  ]

  const chartData = skillCategories.map((cat) => ({
    name: cat.category,
    proficiency: cat.proficiency,
    fill: cat.color,
  }))

  const pieData = [
    { name: "Frontend", value: 35, fill: "#06b6d4" },
    { name: "Backend", value: 30, fill: "#3b82f6" },
    { name: "Cloud/DevOps", value: 20, fill: "#8b5cf6" },
    { name: "AI/ML", value: 15, fill: "#10b981" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-4">Technical Skills & Expertise</h2>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-4">Skill Proficiency Levels</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
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
              <Bar dataKey="proficiency" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills breakdown */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{category.category}</h3>
                <span className="text-sm text-cyan-400 font-medium">{category.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${category.proficiency}%`,
                    backgroundColor: category.color,
                  }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 font-semibold mb-4">Skill Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-4">Technology Stack</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {[
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "📘" },
            { name: "Node.js", icon: "🟢" },
            { name: "Python", icon: "🐍" },
            { name: "AWS", icon: "☁️" },
            { name: "Docker", icon: "🐳" },
            { name: "AI/ML", icon: "🤖" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <span className="text-xs text-gray-300 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 glass rounded-lg">
        <p className="text-gray-300 text-sm">
          💡 Always learning new technologies and staying updated with industry trends
        </p>
      </div>
    </div>
  )
}
