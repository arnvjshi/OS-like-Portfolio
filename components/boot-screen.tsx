"use client"

import { useEffect, useState } from "react"

export function BootScreen() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [progress, setProgress] = useState(0)

  const bootLines = [
    "Initializing Arnav OS v2.0...",
    "Loading system modules...",
    "Mounting file systems...",
    "Starting network services...",
    "Loading user profile...",
    "Initializing desktop environment...",
    "Starting applications...",
    "System ready!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootLines.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 600)

    // Show progress bar after first few lines
    const progressTimeout = setTimeout(() => {
      setShowProgress(true)
    }, 2000)

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + Math.random() * 15
        }
        return 100
      })
    }, 200)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
      clearTimeout(progressTimeout)
    }
  }, [])

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-start px-8 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      <div className="mb-8 flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">AJ</span>
        </div>
        <div>
          <h1 className="text-cyan-400 text-2xl font-bold">ARNAV OS</h1>
          <p className="text-green-400 text-sm">Professional Portfolio System v2.0</p>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {bootLines.slice(0, currentLine + 1).map((line, index) => (
          <div
            key={index}
            className={`text-green-400 text-sm flex items-center space-x-2 ${
              index === currentLine ? "animate-pulse" : ""
            }`}
          >
            <span className="text-cyan-400">[{String(index + 1).padStart(2, "0")}]</span>
            <span>{line}</span>
            {index === currentLine && <div className="w-2 h-4 bg-green-400 animate-pulse ml-1"></div>}
          </div>
        ))}
      </div>

      {showProgress && (
        <div className="w-full max-w-md mb-6">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Loading...</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, progress)}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-xs">
          {currentLine >= bootLines.length - 1 ? "System Ready - Click to continue" : "Booting..."}
        </span>
      </div>

      <div className="absolute bottom-8 left-8 text-xs text-gray-500 space-y-1">
        <div>Build: 2024.12.21</div>
        <div>Kernel: AJ-Linux 6.0</div>
        <div>Memory: 16GB Available</div>
      </div>
    </div>
  )
}
