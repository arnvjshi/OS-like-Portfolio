"use client"

import { DesktopIcon } from "./desktop-icon"
import { Taskbar } from "./taskbar"
import { ThreeWallpaper } from "./three-wallpaper"

interface DesktopProps {
  onOpenWindow: (windowId: string) => void
  onToggleStartMenu: () => void
}

export function Desktop({ onOpenWindow, onToggleStartMenu }: DesktopProps) {
  const desktopIcons = [
    { id: "about", label: "About Me", icon: "user", position: { x: 50, y: 50 } },
    { id: "projects", label: "Projects", icon: "rocket", position: { x: 50, y: 150 } },
    { id: "skills", label: "Skills", icon: "zap", position: { x: 50, y: 250 } },
    { id: "experience", label: "Experience", icon: "briefcase", position: { x: 50, y: 350 } },
    { id: "contact", label: "Contact", icon: "mail", position: { x: 50, y: 450 } },
    { id: "resume", label: "Resume", icon: "file-text", position: { x: 150, y: 50 } },
    { id: "terminal", label: "Terminal", icon: "terminal", position: { x: 150, y: 150 } },
    { id: "browser", label: "Browser", icon: "globe", position: { x: 150, y: 250 } },
    { id: "settings", label: "Settings", icon: "settings", position: { x: 150, y: 350 } },
  ]

  return (
    <>
      <ThreeWallpaper />

      {/* Desktop Icons */}
      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          id={icon.id}
          label={icon.label}
          icon={icon.icon}
          position={icon.position}
          onDoubleClick={() => onOpenWindow(icon.id)}
        />
      ))}

      {/* Taskbar */}
      <Taskbar onToggleStartMenu={onToggleStartMenu} />
    </>
  )
}
