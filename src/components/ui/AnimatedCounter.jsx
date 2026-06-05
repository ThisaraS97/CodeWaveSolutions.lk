import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'

function parseStatValue(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { number: null, suffix: value, decimals: 0 }
  const num = parseFloat(match[1])
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  return { number: num, suffix: match[2], decimals }
}

export default function AnimatedCounter({ value, className = '', duration = 1800 }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.4 })
  const { number, suffix, decimals } = parseStatValue(value)
  const [display, setDisplay] = useState(number === null ? value : '0')

  useEffect(() => {
    if (!inView || number === null) return undefined

    let start = null
    let frame = null

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const current = number * eased
      setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString())
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, number, suffix, decimals, duration])

  return (
    <span ref={ref} className={className}>
      {number === null ? value : `${display}${suffix}`}
    </span>
  )
}
