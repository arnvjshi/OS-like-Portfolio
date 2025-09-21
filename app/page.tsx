"use client"

import { useState, useEffect } from "react"
import { Desktop } from "@/components/desktop"
import { StartMenu } from "@/components/start-menu"
import { WindowManager } from "@/components/window-manager"
import { BootScreen } from "@/components/boot-screen"

export default function HomePage() {
  const [isBooting, setIsBooting] = useState(true)
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const bootTimer = setTimeout(
      () => {
        setIsBooting(false)
      },
      isMobile ? 1500 : 3000,
    )

    return () => {
      clearTimeout(bootTimer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile, isBooting])

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId])
    }
    setShowStartMenu(false)
  }

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId))
  }

  if (isBooting) {
    return <BootScreen />
  }

  return (
    <div className="h-screen w-screen gradient-bg relative overflow-hidden">
      <Desktop onOpenWindow={openWindow} onToggleStartMenu={() => setShowStartMenu(!showStartMenu)} />

      <StartMenu
        isOpen={showStartMenu}
        onClose={() => setShowStartMenu(false)}
        onOpenWindow={openWindow}
        isMobile={isMobile}
      />

      <WindowManager openWindows={openWindows} onCloseWindow={closeWindow} />
    </div>
  )
}
