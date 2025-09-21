"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { FuturisticIcon } from "../futuristic-icon"

interface BrowserWindowProps {
  url?: string
  title?: string
}

export function BrowserWindow({ url = "https://github.com/arnvjshi", title = "Browser" }: BrowserWindowProps) {
  const [currentUrl, setCurrentUrl] = useState(url)
  const [inputUrl, setInputUrl] = useState(url)
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState<string[]>([url])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [bookmarks] = useState([
    { name: "GitHub", url: "https://github.com/arnvjshi", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/arnav-joshi-aj05/", icon: "user" },
    { name: "Portfolio", url: "https://arnavjoshi.vercel.app", icon: "globe" },
    { name: "LeetCode", url: "https://leetcode.com/arnav_joshi20", icon: "zap" },
  ])

  useEffect(() => {
    setInputUrl(currentUrl)
  }, [currentUrl])

  const navigateToUrl = (newUrl: string) => {
    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
      newUrl = "https://" + newUrl
    }

    setIsLoading(true)
    setCurrentUrl(newUrl)
    setInputUrl(newUrl)

    // Update history
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newUrl)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setCurrentUrl(history[newIndex])
      setIsLoading(true)
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setCurrentUrl(history[newIndex])
      setIsLoading(true)
    }
  }

  const refresh = () => {
    setIsLoading(true)
    // Force iframe reload by changing src temporarily
    const iframe = document.querySelector('iframe[data-browser="true"]') as HTMLIFrameElement
    if (iframe) {
      const originalSrc = iframe.src
      iframe.src = "about:blank"
      setTimeout(() => {
        iframe.src = originalSrc
      }, 100)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      navigateToUrl(inputUrl)
    }
  }

  return (
    <div className="h-full flex flex-col bg-gray-900/95 text-white">
      <div className="flex flex-col space-y-2 p-3 bg-gray-800/90 border-b border-gray-700">
        {/* Navigation Bar */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-1 ml-4">
            <button
              onClick={goBack}
              disabled={historyIndex <= 0}
              className="p-2 hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Back"
            >
              <FuturisticIcon type="user" className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={goForward}
              disabled={historyIndex >= history.length - 1}
              className="p-2 hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Forward"
            >
              <FuturisticIcon type="user" className="w-4 h-4" />
            </button>
            <button onClick={refresh} className="p-2 hover:bg-gray-700 rounded transition-colors" title="Refresh">
              <FuturisticIcon type="settings" className="w-4 h-4" />
            </button>
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4 relative">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10"
              placeholder="Enter URL or search..."
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isLoading ? (
                <div className="w-4 h-4 animate-spin">
                  <FuturisticIcon type="settings" className="w-4 h-4 text-blue-400" />
                </div>
              ) : (
                <FuturisticIcon type="globe" className="w-4 h-4 text-green-400" />
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => navigateToUrl(inputUrl)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
              title="Go"
            >
              Go
            </button>
          </div>
        </div>

        {/* Bookmarks Bar */}
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-700/50">
          <span className="text-xs text-gray-400 mr-2">Bookmarks:</span>
          {bookmarks.map((bookmark, index) => (
            <button
              key={index}
              onClick={() => navigateToUrl(bookmark.url)}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded text-xs transition-colors"
              title={bookmark.url}
            >
              <FuturisticIcon type={bookmark.icon} className="w-3 h-3" />
              <span>{bookmark.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900/95 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 mb-4 mx-auto">
                <FuturisticIcon type="globe" className="w-12 h-12 text-blue-400 animate-pulse" />
              </div>
              <div className="text-blue-300 mb-2">Loading website...</div>
              <div className="text-xs text-gray-400 max-w-md truncate">{currentUrl}</div>
            </div>
          </div>
        )}

        <iframe
          data-browser="true"
          src={currentUrl}
          className="w-full h-full border-0 bg-white"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-gray-800/90 border-t border-gray-700 text-xs text-gray-400">
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <span>•</span>
          <span className="truncate max-w-xs">{currentUrl}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FuturisticIcon type="settings" className="w-3 h-3" />
          <span>Secure</span>
        </div>
      </div>
    </div>
  )
}
