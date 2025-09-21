"use client"

interface FuturisticIconProps {
  type: string
  className?: string
}

export function FuturisticIcon({ type, className = "w-8 h-8" }: FuturisticIconProps) {
  const icons = {
    user: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
          fill="currentColor"
          opacity="1.0"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 1V23M1 12H23" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    rocket: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.9" />
        <circle cx="12" cy="8" r="2" fill="currentColor" />
        <path d="M8 16L16 8M8 8L16 16" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </svg>
    ),
    zap: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" opacity="1.0" />
        <path d="M12 1V23" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    briefcase: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" opacity="0.9" />
        <path d="M16 21V5A2 2 0 0 0 14 3H10A2 2 0 0 0 8 5V21" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M2 11H22" stroke="currentColor" strokeWidth="1" opacity="1.0" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    mail: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" opacity="0.9" />
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M2 4L12 12L22 4" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <circle cx="18" cy="6" r="2" fill="currentColor" />
      </svg>
    ),
    "file-text": (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1" opacity="1.0" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    terminal: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="18" rx="2" fill="currentColor" opacity="0.9" />
        <path d="M6 9L10 13L6 17" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M13 17H18" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="5" r="1" fill="currentColor" />
        <circle cx="18" cy="5" r="1" fill="currentColor" />
        <circle cx="16" cy="5" r="1" fill="currentColor" />
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9" />
        <path
          d="M2 12H22M12 2A15.3 15.3 0 0 1 4 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 20 12A15.3 15.3 0 0 1 12 2Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="1.0"
        />
        <path
          d="M8 12C8 8 9.79 4 12 4S16 8 16 12S14.21 20 12 20S8 16 8 12Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    settings: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.9" />
        <path
          d="M19.4 15A1.65 1.65 0 0 0 21 13.09A1.65 1.65 0 0 0 19.4 9M20.75 9L19.4 9M19.4 15L20.75 15M4.6 15A1.65 1.65 0 0 1 3 13.09A1.65 1.65 0 0 1 4.6 9M3.25 9L4.6 9M4.6 15L3.25 15M15 4.6A1.65 1.65 0 0 0 13.09 3A1.65 1.65 0 0 0 9 4.6M9 3.25L9 4.6M15 4.6L15 3.25M15 19.4A1.65 1.65 0 0 1 13.09 21A1.65 1.65 0 0 1 9 19.4M9 20.75L9 19.4M15 19.4L15 20.75"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    github: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V19.171C7.975 19.681 7.5 17.85 7.5 17.85C6.844 16.156 5.906 15.719 5.906 15.719C4.594 14.719 6.031 14.75 6.031 14.75C7.5 14.844 8.219 16.312 8.219 16.312C9.5 18.594 11.625 17.969 12.062 17.719C12.188 16.781 12.594 16.156 13.031 15.906C9.906 15.656 6.625 14.406 6.625 9.844C6.625 8.719 7.031 7.781 8.25 7.094C8.094 6.844 7.594 5.781 8.406 4.344C8.406 4.344 9.625 4.031 12.062 5.781C13.219 5.469 14.469 5.312 15.719 5.312C16.969 5.312 18.219 5.469 19.375 5.781C21.812 4.031 23.031 4.344 23.031 4.344C23.844 5.781 23.344 6.844 23.188 7.094C24.406 7.781 24.812 8.719 24.812 9.844C24.812 14.406 21.531 15.656 18.406 15.906C18.969 16.406 19.469 17.344 19.469 18.781V21.878C24.25 21.128 27.906 16.991 27.906 12C27.906 6.477 23.429 2 17.906 2H12Z"
          fill="currentColor"
          opacity="1.0"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  }

  return (
    <div className="text-blue-300 drop-shadow-lg hover:text-blue-200 transition-colors duration-200">
      {icons[type as keyof typeof icons] || icons.user}
    </div>
  )
}
