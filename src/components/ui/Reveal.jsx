import { Children, cloneElement, isValidElement } from 'react'
import useInView from '../../hooks/useInView'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView({ once })

  const directionClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
        ? 'reveal-right'
        : direction === 'scale'
          ? 'reveal-scale'
          : 'reveal-up'

  return (
    <Tag
      ref={ref}
      className={`reveal ${directionClass} ${inView ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export function StaggerGroup({ children, className = '', stagger = 100, direction = 'up' }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.12 })

  const directionClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
        ? 'reveal-right'
        : direction === 'scale'
          ? 'reveal-scale'
          : 'reveal-up'

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child
        return cloneElement(child, {
          className: `${child.props.className || ''} reveal ${directionClass} ${inView ? 'reveal-visible' : ''}`.trim(),
          style: {
            ...child.props.style,
            transitionDelay: `${index * stagger}ms`,
          },
        })
      })}
    </div>
  )
}
