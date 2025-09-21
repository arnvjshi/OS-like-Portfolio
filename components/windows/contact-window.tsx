"use client"

import { FuturisticIcon } from "../futuristic-icon"

export function ContactWindow() {
  const contactMethods = [
    {
      method: "Email",
      value: "arnvjshi@gmail.com",
      icon: "mail",
      link: "mailto:arnvjshi@gmail.com",
      description: "Primary contact for professional inquiries",
    },
    {
      method: "Phone",
      value: "+91 9356351894",
      icon: "user",
      link: "tel:+919356351894",
      description: "Available for calls and WhatsApp",
    },
    {
      method: "LinkedIn",
      value: "https://www.linkedin.com/in/arnav-joshi-aj05/",
      icon: "user",
      link: "https://www.linkedin.com/in/arnav-joshi-aj05/",
      description: "Professional networking and updates",
    },
    {
      method: "GitHub",
      value: "github.com/aravjshi",
      icon: "github",
      link: "https://github.com/arnvjshi",
      description: "Code repositories and contributions",
    },
  ]

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <FuturisticIcon type="mail" className="w-6 h-6 mr-2 text-cyan-400" />
          Get In Touch
        </h2>
        <div className="text-sm text-green-400 flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
          Available
        </div>
      </div>

      <div className="space-y-4">
        {contactMethods.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.link.startsWith("http") ? "_blank" : "_self"}
            rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
            className="block bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/70 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                <FuturisticIcon type={contact.icon} className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold">{contact.method}</h3>
                  <FuturisticIcon
                    type="globe"
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <p className="text-blue-300 text-sm font-medium mb-1">{contact.value}</p>
                <p className="text-gray-400 text-xs">{contact.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
          <FuturisticIcon type="globe" className="w-5 h-5 mr-2" />
          Let's Collaborate!
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          I'm always interested in discussing new opportunities, innovative projects, or just having a chat about
          technology. Whether you're looking for a full-stack developer, need help with cloud solutions, or want to
          explore AI integrations, I'd love to hear from you!
        </p>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 text-green-400">
            <FuturisticIcon type="zap" className="w-4 h-4" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-400">
            <FuturisticIcon type="globe" className="w-4 h-4" />
            <span>Remote Ready</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-2 mb-2">
          <FuturisticIcon type="user" className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-medium text-sm">Location & Availability</span>
        </div>
        <div className="space-y-1 text-sm text-gray-300">
          <p>📍 Based in Nagpur, Maharashtra, India</p>
          <p>🌍 Available for remote work worldwide</p>
          <p>✈️ Open to relocation for the right opportunity</p>
        </div>
      </div>
    </div>
  )
}
