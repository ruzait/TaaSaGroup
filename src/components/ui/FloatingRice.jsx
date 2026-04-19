import { useEffect, useState, useMemo } from 'react'
import WheatIcon from './WheatIcon'

const RICE_COUNT = 15

function generatePositions() {
  return Array.from({ length: RICE_COUNT }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    size: Math.random() * 24 + 16,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 15,
    opacity: Math.random() * 0.4 + 0.1
  }))
}

export default function FloatingRice() {
  const [positions, setPositions] = useState(() => generatePositions())

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setPositions([])
      return
    }

    const timeout = setTimeout(() => {
      setPositions((prev) => {
        if (prev.length === 0) {
          return generatePositions()
        }
        return prev
      })
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  if (positions.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {positions.map((pos) => (
        <div
          key={pos.id}
          className="floating-rice"
          style={{
            position: 'absolute',
            left: `${pos.left}%`,
            bottom: '-50px',
            opacity: pos.opacity,
            animationDuration: `${pos.duration}s`,
            animationDelay: `${pos.delay}s`,
            userSelect: 'none'
          }}
        >
          <WheatIcon size={pos.size} />
        </div>
      ))}
    </div>
  )
}
