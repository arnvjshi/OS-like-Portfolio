"use client"

import { FuturisticIcon } from "./futuristic-icon"

interface DesktopIconsProps {
  onOpenWindow: (windowId: string) => void
}

export function DesktopIcons({ onOpenWindow }: DesktopIconsProps) {
  const desktopIcons = [
    { id: "about", label: "About Me", icon: "user", position: { x: 50, y: 100 } },
    { id: "projects", label: "Projects", icon: "briefcase", position: { x: 50, y: 200 } },
    { id: "experience", label: "Experience", icon: "zap", position: { x: 50, y: 300 } },
    { id: "skills", label: "Skills", icon: "settings", position: { x: 180, y: 100 } },
    { id: "resume", label: "Resume", icon: "file-text", position: { x: 180, y: 200 } },
    { id: "contact", label: "Contact", icon: "mail", position: { x: 180, y: 300 } },
    { id: "browser", label: "Browser", icon: "globe", position: { x: 310, y: 100 } },
    { id: "terminal", label: "Terminal", icon: "terminal", position: { x: 310, y: 200 } },
    { id: "settings", label: "Settings", icon: "settings", position: { x: 310, y: 300 } },
  ]

  return (
    <>
      {desktopIcons.map((icon) => (
        <button
          key={icon.id}
          onClick={() => onOpenWindow(icon.id)}
          className="absolute flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group animate-float"
          style={{
            left: icon.position.x,
            top: icon.position.y,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
            <FuturisticIcon type={icon.icon} className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </div>
          <span className="text-white text-xs font-medium group-hover:text-cyan-300 transition-colors">
            {icon.label}
          </span>
        </button>
      ))}
    </>
  )
}
