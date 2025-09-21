"use client"

import { useState, useEffect } from "react"
import { FuturisticIcon } from "./futuristic-icon"
import { WeatherWidget } from "./weather-widget"

interface TaskbarProps {
  onToggleStartMenu: () => void
}

export function Taskbar({ onToggleStartMenu }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(85)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
      setCurrentDate(
        now.toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Simulate battery level changes
    const batteryInterval = setInterval(() => {
      setBatteryLevel((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(20, Math.min(100, prev + change))
      })
    }, 30000)

    return () => {
      clearInterval(interval)
      clearInterval(batteryInterval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 ${isMobile ? "h-16" : "h-14"} glass border-t border-blue-400/30 flex items-center justify-between px-4 backdrop-blur-xl`}
    >
      {/* Left Section - Start Button and Quick Access */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleStartMenu}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105 ${isMobile ? "min-h-[44px]" : ""} border border-blue-400/30 hover:border-blue-400/50`}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg relative">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              <circle cx="12" cy="12" r="2" fill="white" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-white"></div>
          </div>
          {!isMobile && <span className="text-sm text-white font-medium">Start</span>}
        </button>

        {/* Quick Access Icons */}
        {!isMobile && (
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
              <FuturisticIcon type="globe" className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
              <FuturisticIcon type="terminal" className="w-5 h-5 text-green-400 group-hover:text-green-300" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
              <FuturisticIcon type="file-text" className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
            </button>
          </div>
        )}
      </div>

      {/* Center Section - Running Applications (placeholder) */}
      <div className="flex items-center space-x-2">
        {/* Placeholder for running apps */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Right Section - System Tray */}
      <div className="flex items-center space-x-3">
        {!isMobile && <WeatherWidget />}

        {/* System Status Icons */}
        <div className="flex items-center space-x-2">
          {/* Network Status */}
          <div className="flex items-center space-x-1 text-green-400 hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zM8.5 16.5l2 2 2-2C11.34 15.34 10.66 15.34 8.5 16.5zM5 12l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 8.14 8.86 8.14 5 12z" />
            </svg>
            {!isMobile && <span className="text-xs">WiFi</span>}
          </div>

          {/* Battery Status */}
          {!isMobile && (
            <div className="flex items-center space-x-1 text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">
              <div className="relative">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
                  <path d="M23 13v-2" />
                </svg>
                <div
                  className="absolute top-1 left-1 h-2 bg-green-400 rounded-sm transition-all duration-300"
                  style={{ width: `${(batteryLevel / 100) * 14}px` }}
                />
              </div>
              <span className="text-xs">{batteryLevel}%</span>
            </div>
          )}

          {/* Volume */}
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          </button>
        </div>

        <div className="text-right">
          <div className="text-sm text-white font-mono font-medium">{currentTime}</div>
          <div className="text-xs text-blue-300">{currentDate}</div>
        </div>

        {/* Settings/Notifications */}
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
          <FuturisticIcon
            type="settings"
            className="w-5 h-5 text-white group-hover:text-blue-300 group-hover:rotate-90 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  )
}
