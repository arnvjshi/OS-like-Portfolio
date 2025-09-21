"use client"

import { useState, useEffect } from "react"
import { FuturisticIcon } from "./futuristic-icon"

interface DesktopIconProps {
  id: string
  label: string
  icon: string
  position: { x: number; y: number }
  onDoubleClick: () => void
}

export function DesktopIcon({ id, label, icon, position, onDoubleClick }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleClick = () => {
    if (isMobile) {
      onDoubleClick() // Single tap opens on mobile
    } else {
      setIsSelected(!isSelected)
    }
  }

  const handleDoubleClick = () => {
    if (!isMobile) {
      onDoubleClick()
    }
  }

  return (
    <div
      className={`absolute cursor-pointer select-none group z-20 ${isSelected ? "bg-blue-500/20 backdrop-blur-sm" : ""}`}
      style={{ left: position.x, top: position.y }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex flex-col items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm group-hover:scale-110 min-w-[70px] min-h-[70px] justify-center border border-transparent hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-400/20">
        <div className="mb-2 transform group-hover:rotate-12 transition-transform duration-200">
          <FuturisticIcon type={icon} className="w-10 h-10" />
        </div>
        <span className="text-xs text-blue-100 text-center max-w-16 leading-tight drop-shadow-lg font-medium group-hover:text-white transition-colors">
          {label}
        </span>
      </div>
    </div>
  )
}
