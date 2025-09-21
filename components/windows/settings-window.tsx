"use client"

import { useState } from "react"
import { FuturisticIcon } from "../futuristic-icon"

export function SettingsWindow() {
  const [activeTab, setActiveTab] = useState("system")
  const [settings, setSettings] = useState({
    theme: "dark",
    animations: true,
    sounds: false,
    notifications: true,
    autoSave: true,
    language: "en",
    timezone: "Asia/Kolkata",
  })

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const tabs = [
    { id: "system", label: "System", icon: "settings" },
    { id: "appearance", label: "Appearance", icon: "user" },
    { id: "privacy", label: "Privacy", icon: "briefcase" },
    { id: "about", label: "About", icon: "globe" },
  ]

  return (
    <div className="h-full flex bg-gray-900/95 text-white">
      {/* Sidebar */}
      <div className="w-48 bg-gray-800/90 border-r border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Settings</h3>
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600/30 text-blue-300 border border-blue-500/30"
                  : "hover:bg-gray-700/50 text-gray-300"
              }`}
            >
              <FuturisticIcon type={tab.icon} className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === "system" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">System Settings</h2>

            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-cyan-400 font-medium mb-3">Performance</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Enable Animations</span>
                    <button
                      onClick={() => updateSetting("animations", !settings.animations)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.animations ? "bg-blue-600" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          settings.animations ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Auto Save</span>
                    <button
                      onClick={() => updateSetting("autoSave", !settings.autoSave)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.autoSave ? "bg-blue-600" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          settings.autoSave ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-cyan-400 font-medium mb-3">Localization</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => updateSetting("language", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="mr">Marathi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => updateSetting("timezone", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">America/New_York (EST)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "appearance" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Appearance</h2>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-cyan-400 font-medium mb-3">Theme</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateSetting("theme", "dark")}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    settings.theme === "dark"
                      ? "border-blue-500 bg-blue-600/20"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                >
                  <div className="w-full h-16 bg-gray-900 rounded mb-2"></div>
                  <span className="text-sm">Dark Theme</span>
                </button>
                <button
                  onClick={() => updateSetting("theme", "light")}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    settings.theme === "light"
                      ? "border-blue-500 bg-blue-600/20"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                >
                  <div className="w-full h-16 bg-gray-100 rounded mb-2"></div>
                  <span className="text-sm">Light Theme</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">About AJ OS</h2>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">AJ</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AJ Operating System</h3>
              <p className="text-gray-300 mb-4">Version 1.0.0</p>
              <p className="text-sm text-gray-400 mb-6">
                A modern, web-based operating system simulation showcasing the portfolio and skills of Arnav Joshi.
                Built with Next.js, React, and modern web technologies.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold">2024</div>
                  <div className="text-xs text-gray-400">Year Created</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold">React</div>
                  <div className="text-xs text-gray-400">Framework</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold">TypeScript</div>
                  <div className="text-xs text-gray-400">Language</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
