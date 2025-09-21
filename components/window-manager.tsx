"use client"

import { Window } from "./window"
import { AboutWindow } from "./windows/about-window"
import { ProjectsWindow } from "./windows/projects-window"
import { SkillsWindow } from "./windows/skills-window"
import { ExperienceWindow } from "./windows/experience-window"
import { ContactWindow } from "./windows/contact-window"
import { TerminalWindow } from "./windows/terminal-window"
import { ResumeWindow } from "./windows/resume-window"
import { BrowserWindow } from "./windows/browser-window"
import { SettingsWindow } from "./windows/settings-window"

interface WindowManagerProps {
  openWindows: string[]
  onCloseWindow: (windowId: string) => void
}

export function WindowManager({ openWindows, onCloseWindow }: WindowManagerProps) {
  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case "about":
        return <AboutWindow />
      case "projects":
        return <ProjectsWindow />
      case "skills":
        return <SkillsWindow />
      case "experience":
        return <ExperienceWindow />
      case "contact":
        return <ContactWindow />
      case "terminal":
        return <TerminalWindow />
      case "resume":
        return <ResumeWindow />
      case "browser":
        return <BrowserWindow />
      case "github":
        return <BrowserWindow url="https://github.com/arnavjoshi" title="GitHub Profile" />
      case "linkedin":
        return <BrowserWindow url="https://linkedin.com/in/arnavjoshi" title="LinkedIn Profile" />
      case "leetcode":
        return <BrowserWindow url="https://leetcode.com/arnavjoshi" title="LeetCode Profile" />
      case "settings":
        return <SettingsWindow />
      default:
        return <div className="text-white p-4">Unknown window: {windowId}</div>
    }
  }

  const getWindowTitle = (windowId: string) => {
    const titles: Record<string, string> = {
      about: "About Me - Arnav Joshi",
      projects: "Projects Portfolio",
      skills: "Technical Skills & Stack",
      experience: "Work & Leadership Experience",
      contact: "Contact Information",
      terminal: "Terminal - AJ OS",
      resume: "Resume & Credentials",
      browser: "AJ Browser - Web Explorer",
      github: "GitHub - Code Repository",
      linkedin: "LinkedIn - Professional Profile",
      leetcode: "LeetCode - Coding Practice",
      settings: "System Settings & Preferences",
    }
    return titles[windowId] || "Window"
  }

  const getInitialPosition = (index: number) => {
    const baseX = 120
    const baseY = 80
    const offsetX = (index % 5) * 60
    const offsetY = Math.floor(index / 5) * 60

    return {
      x: baseX + offsetX,
      y: baseY + offsetY,
    }
  }

  return (
    <>
      {openWindows.map((windowId, index) => (
        <Window
          key={windowId}
          title={getWindowTitle(windowId)}
          onClose={() => onCloseWindow(windowId)}
          initialPosition={getInitialPosition(index)}
        >
          {getWindowContent(windowId)}
        </Window>
      ))}
    </>
  )
}
