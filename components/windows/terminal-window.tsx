"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export function TerminalWindow() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to Arnav OS Terminal v2.0",
    'Type "help" for available commands',
    "",
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  whoami     - Display user information",
      "  projects   - List my projects",
      "  skills     - Show technical skills",
      "  resume     - Open resume link",
      "  contact    - Display contact information",
      "  clear      - Clear terminal screen",
      "  help       - Show this help message",
    ],
    whoami: ["Arnav Joshi | Full-Stack Developer", "Cloud & AI Enthusiast", "Location: Available Remotely"],
    projects: [
      "Recent Projects:",
      "  • E-Commerce Platform (Next.js, Stripe)",
      "  • AI Chat Assistant (React, OpenAI)",
      "  • Cloud Dashboard (Vue.js, AWS)",
      "  • Mobile Task Manager (React Native)",
      "",
      "GitHub: github.com/arnvjshi",
    ],
    skills: [
      "Technical Skills:",
      "  Frontend: React, Next.js, TypeScript, Vue.js",
      "  Backend: Node.js, Python, Express, FastAPI",
      "  Cloud: AWS, Docker, Kubernetes, Terraform",
      "  AI/ML: OpenAI API, TensorFlow, PyTorch",
    ],
    resume: ["Opening resume...", "Resume available at: resume.arnavjoshi.dev"],
    contact: [
      "Contact Information:",
      "  Email: arnvjshi@gmail.com",
      "  LinkedIn: https://www.linkedin.com/in/arnav-joshi-aj05/",
      "  GitHub: github.com/arnvjshi",
      "  Twitter: @arnavjoshi_dev",
    ],
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()

    if (command === "clear") {
      setHistory([])
      return
    }

    const output = commands[command] || [`Command not found: ${cmd}`, 'Type "help" for available commands']

    setHistory((prev) => [...prev, `$ ${cmd}`, ...output, ""])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="bg-black/80 rounded-lg p-4 font-mono text-sm h-80 overflow-y-auto">
      <div className="space-y-1">
        {history.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-green-400" : "text-gray-300"}>
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center mt-2">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent text-white outline-none flex-1"
          autoComplete="off"
        />
      </form>
    </div>
  )
}
