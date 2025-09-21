"use client"

export function ResumeWindow() {
  const downloadResume = () => {
    // Create a downloadable resume file
    const resumeContent = `
ARNAV JOSHI
Full-Stack Developer | Cloud & AI Enthusiast
Nagpur, MH, India • 9356351894 • arnvjshi@gmail.com

EDUCATION
B.Tech in Information Technology (with Honors) - CGPA: 9.0
Shri Ramdeobaba College of Engineering and Management (2023-2027)

TECHNICAL SKILLS
• Programming: JavaScript, Python, C, Java
• Frontend: HTML, CSS, React, Next.js, Tailwind CSS
• Backend: Node.js, Express, Flask
• Database: MongoDB, SQL, Firebase
• AI/ML: TensorFlow, PyTorch, Hugging Face, OpenCV
• Cloud: AWS, Azure, Google Cloud
• Tools: Git, GitHub, Docker, Kubernetes

PROJECTS
• ThreatShield AI - Proactive threat intelligence platform
• EduBot - AI learning companion with personalized content
• Smart-Shop - Frictionless checkout system with AWS Lambda
• Infinity Quest - Retro adventure game in pure JavaScript

EXPERIENCE
• Full Stack Developer Intern - Youniformwala (May-Aug 2025)
• Technical Co-Head - Colosseum 15.0 (Jan-Feb 2025)
• Tech Intern - CompEx 2025 (Jan 2025)
• Technical Coordinator - Rotaract Club RBU (Jul 2024-Present)
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = "https://raw.githubusercontent.com/arnvjshi/arnvjshi/main/Resume.pdf"
    a.download = "Arnav_Joshi_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-6 bg-gray-900/95 text-white h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b border-gray-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            ARNAV JOSHI
          </h1>
          <p className="text-xl text-blue-300 mb-2">Full-Stack Developer | Cloud & AI Enthusiast</p>
          <p className="text-gray-400">Nagpur, MH, India • 9356351894 • arnvjshi@gmail.com</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/arnav-joshi-aj05/" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://github.com/arnvjshi" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            href="https://raw.githubusercontent.com/arnvjshi/arnvjshi/main/Resume.pdf"
            onClick={downloadResume}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            📄 Download Resume
          </button>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">🎓 Education</h2>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-white">B.Tech in Information Technology (with Honors)</h3>
            <p className="text-blue-300">Shri Ramdeobaba College of Engineering and Management</p>
            <p className="text-gray-400">2023-2027 • CGPA: 9.0</p>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">⚡ Core Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Development</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Full-Stack Development</li>
                <li>• REST APIs / API Development</li>
                <li>• Microservices Architecture</li>
                <li>• Serverless Computing</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Cloud & AI</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Cloud Computing (AWS, Azure)</li>
                <li>• Machine Learning Models</li>
                <li>• Computer Vision</li>
                <li>• Natural Language Processing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">🚀 Key Projects</h2>
          <div className="space-y-4">
            {[
              {
                name: "ThreatShield AI",
                description:
                  "Proactive threat intelligence platform using Next.js and GROQ, improving threat detection efficiency by 40%",
              },
              {
                name: "EduBot",
                description:
                  "AI learning companion with Next.js frontend and Flask backend, boosting user learning efficiency by 35%",
              },
              {
                name: "Smart-Shop",
                description:
                  "Frictionless checkout system using Next.js and AWS Lambda, cutting customer wait times by 100%",
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">💼 Experience Highlights</h2>
          <div className="space-y-4">
            {[
              {
                role: "Full Stack Developer Intern",
                company: "Youniformwala",
                period: "May 2025 – Aug 2025",
                achievement: "Resolved 50+ critical bugs, implemented JWT authentication",
              },
              {
                role: "Technical Co-Head",
                company: "Colosseum 15.0",
                period: "Jan 2025 – Feb 2025",
                achievement: "Led team of 5 developers, handled 2,000+ visitors with zero downtime",
              },
            ].map((exp, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-blue-300">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-300 text-sm">{exp.achievement}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
