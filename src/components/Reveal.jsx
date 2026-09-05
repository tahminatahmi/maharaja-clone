import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

export default Reveal