"use client"
import { FuturisticIcon } from "./futuristic-icon"

interface StartMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenWindow: (windowId: string) => void
  isMobile?: boolean
}

export function StartMenu({ isOpen, onClose, onOpenWindow, isMobile = false }: StartMenuProps) {
  const menuItems = [
    {
      id: "about",
      label: "About Me",
      icon: "user",
      description: "IT undergrad specializing in full-stack development, cloud computing, and AI. CGPA: 9.0",
      size: "large",
      category: "Personal",
    },
    {
      id: "projects",
      label: "Projects",
      icon: "rocket",
      description: "ThreatShield AI, EduBot, Smart-Shop, Infinity Quest - Innovative solutions with real impact",
      size: "large",
      category: "Portfolio",
    },
    {
      id: "skills",
      label: "Tech Stack",
      icon: "zap",
      description: "JavaScript, Python, React, Next.js, AI/ML, Cloud Computing (AWS, Azure), 100+ LeetCode problems",
      size: "medium",
      category: "Technical",
    },
    {
      id: "experience",
      label: "Experience",
      icon: "briefcase",
      description: "Full-Stack Developer Intern at Youniformwala, Technical Co-Head at Colosseum 15.0",
      size: "medium",
      category: "Professional",
    },
    {
      id: "resume",
      label: "Resume",
      icon: "file-text",
      description: "Download complete resume with all credentials and achievements",
      size: "small",
      category: "Documents",
    },
    {
      id: "github",
      label: "GitHub",
      icon: "github",
      description: "Explore code repositories and open source contributions",
      size: "small",
      category: "Links",
    },
    {
      id: "contact",
      label: "Contact",
      icon: "mail",
      description: "arnvjshi@gmail.com | +91 9356351894 | LinkedIn",
      size: "small",
      category: "Contact",
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: "terminal",
      description: "Interactive command line interface",
      size: "small",
      category: "Tools",
    },
    {
      id: "browser",
      label: "Browser",
      icon: "globe",
      description: "Browse GitHub, LinkedIn and other websites",
      size: "small",
      category: "Tools",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
      description: "System preferences and configuration",
      size: "small",
      category: "System",
    },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`fixed ${
          isMobile ? "bottom-16 left-4 right-4 top-1/3" : "bottom-12 left-4 right-1/2 top-1/4"
        } glass-strong rounded-lg window-shadow z-50 animate-in slide-in-from-bottom-4 duration-300 border border-blue-400/30`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AJ</span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-xl">Arnav Joshi</div>
              <div className="text-cyan-300 text-sm">Full-Stack Developer | Cloud & AI Enthusiast</div>
              <div className="text-blue-300 text-xs mt-1">B.Tech IT (2023-2027) | CGPA: 9.0 | RCOEM Nagpur</div>
              <div className="text-green-400 text-xs mt-1 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 auto-rows-min mb-6">
            {menuItems.map((item) => {
              const sizeClasses = {
                large: "col-span-2 row-span-2 p-4",
                medium: "col-span-2 row-span-1 p-3",
                small: "col-span-1 row-span-1 p-2",
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onOpenWindow(item.id)}
                  className={`${sizeClasses[item.size as keyof typeof sizeClasses]} rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-blue-400/40 flex flex-col justify-center items-center text-center group relative overflow-hidden`}
                >
                  {/* Category badge */}
                  <div className="absolute top-1 right-1 text-xs text-blue-300 opacity-60">{item.category}</div>

                  <div className={`mb-2 group-hover:scale-110 transition-transform duration-200`}>
                    <FuturisticIcon
                      type={item.icon}
                      className={`${item.size === "large" ? "w-12 h-12" : item.size === "medium" ? "w-8 h-8" : "w-6 h-6"}`}
                    />
                  </div>

                  <span className={`text-white font-semibold ${item.size === "large" ? "text-lg" : "text-sm"} mb-1`}>
                    {item.label}
                  </span>

                  {item.size !== "small" && (
                    <span className="text-blue-200 text-xs leading-tight opacity-80 line-clamp-3">
                      {item.description}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="pt-4 border-t border-white/20">
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg">4+</div>
                <div className="text-white/70 text-xs">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg">100+</div>
                <div className="text-white/70 text-xs">LeetCode Problems</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-lg">5+</div>
                <div className="text-white/70 text-xs">Leadership Roles</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => onOpenWindow("settings")}
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded"
              >
                <FuturisticIcon type="settings" className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <div className="text-xs text-white/50">Last updated: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
