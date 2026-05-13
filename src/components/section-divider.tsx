'use client'

interface SectionDividerProps {
  variant: 'wave' | 'gold-line' | 'ornament'
}

export function SectionDivider({ variant }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: '40px' }} aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          <path
            d="M0 20C240 40 480 0 720 20C960 40 1200 0 1440 20V40H0V20Z"
            fill="#0F1F4B"
            opacity="0.08"
          />
          <path
            d="M0 24C240 8 480 38 720 24C960 8 1200 38 1440 24V40H0V24Z"
            fill="#0F1F4B"
            opacity="0.04"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'gold-line') {
    return (
      <div
        className="relative flex items-center justify-center w-full py-4"
        style={{ height: '40px' }}
        aria-hidden="true"
      >
        {/* Left gradient line */}
        <div
          className="absolute left-[5%] right-[50%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(200,150,12,0.3))',
          }}
        />
        {/* Right gradient line */}
        <div
          className="absolute left-[50%] right-[5%] h-px"
          style={{
            background: 'linear-gradient(90deg, rgba(200,150,12,0.3), transparent)',
          }}
        />
        {/* Center diamond */}
        <div
          className="relative z-10 w-2.5 h-2.5 rotate-45"
          style={{
            background: 'linear-gradient(135deg, #C8960C, #E8B830)',
          }}
        />
      </div>
    )
  }

  if (variant === 'ornament') {
    return (
      <div
        className="relative flex items-center justify-center w-full"
        style={{ height: '40px' }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 30"
          className="w-64 h-8"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Left scroll */}
          <path
            d="M10 15C30 5 50 5 70 15C50 25 30 25 10 15Z"
            stroke="#C8960C"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M20 15C35 8 50 8 65 15"
            stroke="#C8960C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          {/* Left line */}
          <line
            x1="70"
            y1="15"
            x2="160"
            y2="15"
            stroke="#C8960C"
            strokeWidth="0.6"
            opacity="0.3"
          />
          {/* Center flourish */}
          <path
            d="M170 15C175 8 185 8 190 15C195 8 205 8 210 15C205 22 195 22 190 15C185 22 175 22 170 15Z"
            stroke="#C8960C"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
          <circle cx="190" cy="15" r="1.5" fill="#C8960C" opacity="0.5" />
          {/* Right line */}
          <line
            x1="210"
            y1="15"
            x2="300"
            y2="15"
            stroke="#C8960C"
            strokeWidth="0.6"
            opacity="0.3"
          />
          {/* Right scroll */}
          <path
            d="M300 15C320 5 340 5 360 15C340 25 320 25 300 15Z"
            stroke="#C8960C"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M310 15C325 8 340 8 355 15"
            stroke="#C8960C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>
    )
  }

  return null
}
