"use client"

import { useState, useEffect } from "react"
import { FuturisticIcon } from "./futuristic-icon"

interface WeatherData {
  temperature: number
  condition: string
  location: string
  icon: string
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate weather API call with mock data
    const fetchWeather = () => {
      setTimeout(() => {
        const mockWeather: WeatherData = {
          temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
          condition: ["Sunny", "Cloudy", "Partly Cloudy", "Clear"][Math.floor(Math.random() * 4)],
          location: "Nagpur, MH",
          icon: "sun",
        }
        setWeather(mockWeather)
        setLoading(false)
      }, 1000)
    }

    fetchWeather()
    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-blue-400">
        <div className="w-4 h-4 animate-spin">
          <FuturisticIcon type="settings" className="w-4 h-4" />
        </div>
        <span className="text-xs">Loading...</span>
      </div>
    )
  }

  if (!weather) return null

  return (
    <div className="flex items-center space-x-2 text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">
      <div className="text-yellow-400">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </div>
      <div className="text-xs">
        <div className="font-medium">{weather.temperature}°C</div>
        <div className="text-white/70 text-[10px]">{weather.location}</div>
      </div>
    </div>
  )
}
