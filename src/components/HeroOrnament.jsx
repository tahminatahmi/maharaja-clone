export default function HeroOrnament() {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-20px] right-[-25px] h-[250px] w-[250px] text-[#d8b35e] opacity-[0.18]"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="50" />

      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="10"
            transform={`rotate(${angle} 100 100)`}
          />
        )
      })}

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8

        return (
          <ellipse
            key={i}
            cx="100"
            cy="55"
            rx="8"
            ry="35"
            transform={`rotate(${angle} 100 100)`}
          />
        )
      })}
    </svg>
  )
}