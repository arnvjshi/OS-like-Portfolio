"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Minus, Square, Maximize2 } from "lucide-react"

interface WindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  initialPosition?: { x: number; y: number }
}

export function Window({ title, children, onClose, initialPosition = { x: 100, y: 100 } }: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState({ width: 800, height: 600 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeType, setResizeType] = useState<string>("")
  const [originalState, setOriginalState] = useState({ position: initialPosition, size: { width: 800, height: 600 } })
  const windowRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setIsMaximized(true)
    }
  }, [isMobile])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized || isMobile) return

    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  const handleResizeStart = (e: React.MouseEvent, type: string) => {
    if (isMaximized || isMobile) return

    e.stopPropagation()
    setIsResizing(true)
    setResizeType(type)
  }

  const handleMaximize = () => {
    if (isMobile) return // Already fullscreen on mobile

    if (isMaximized) {
      setPosition(originalState.position)
      setSize(originalState.size)
      setIsMaximized(false)
    } else {
      setOriginalState({ position, size })
      setPosition({ x: 0, y: 0 })
      setSize({ width: window.innerWidth, height: window.innerHeight - 48 }) // Account for taskbar
      setIsMaximized(true)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized && !isMobile) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }

      if (isResizing && !isMaximized && !isMobile) {
        const rect = windowRef.current?.getBoundingClientRect()
        if (!rect) return

        if (resizeType === "se") {
          setSize({
            width: Math.max(400, e.clientX - rect.left),
            height: Math.max(300, e.clientY - rect.top),
          })
        } else if (resizeType === "s") {
          setSize((prev) => ({
            ...prev,
            height: Math.max(300, e.clientY - rect.top),
          }))
        } else if (resizeType === "e") {
          setSize((prev) => ({
            ...prev,
            width: Math.max(400, e.clientX - rect.left),
          }))
        }
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
      setResizeType("")
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, dragOffset, resizeType, isMaximized, isMobile])

  if (isMinimized) {
    return null
  }

  const windowStyle =
    isMaximized || isMobile
      ? {
          left: 0,
          top: 0,
          width: "100vw",
          height: isMobile ? "100vh" : "calc(100vh - 48px)",
        }
      : {
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
        }

  return (
    <div
      ref={windowRef}
      className={`fixed glass-strong window-sharp window-shadow z-30 animate-in fade-in-0 zoom-in-95 duration-300 ${
        isMobile ? "mobile-fullscreen" : ""
      }`}
      style={windowStyle}
    >
      {/* Window Header */}
      <div
        className={`flex items-center justify-between p-3 border-b border-white/20 ${
          !isMaximized && !isMobile ? "cursor-move" : ""
        }`}
        onMouseDown={handleMouseDown}
      >
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="w-6 h-6 sharp-edges bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center transition-colors"
          >
            <Minus size={12} className="text-yellow-900" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-6 h-6 sharp-edges bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors"
          >
            {isMaximized ? (
              <Square size={10} className="text-green-900" />
            ) : (
              <Maximize2 size={10} className="text-green-900" />
            )}
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 sharp-edges bg-red-500 hover:bg-red-400 flex items-center justify-center transition-colors"
          >
            <X size={12} className="text-red-900" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="flex-1 overflow-y-auto bg-gray-900/95"
        style={{ height: "calc(100% - 60px)" }}
        onScroll={(e) => e.stopPropagation()}
      >
        <div className="p-4">{children}</div>
      </div>

      {!isMaximized && !isMobile && (
        <>
          <div className="resize-handle resize-se" onMouseDown={(e) => handleResizeStart(e, "se")} />
          <div className="resize-handle resize-s" onMouseDown={(e) => handleResizeStart(e, "s")} />
          <div className="resize-handle resize-e" onMouseDown={(e) => handleResizeStart(e, "e")} />
        </>
      )}
    </div>
  )
}
