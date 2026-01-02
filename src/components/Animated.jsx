
export default function Animated({ children, mounted, variant = 'fade-up', delay = 0, duration = 500, minOpacity = 0.08 }) {
  const base = 'transition-transform transition-opacity ease-out'

  // Map simple variants to transform classes
  const variants = {
    'fade-up': {
      from: 'translate-y-3',
      to: 'translate-y-0'
    },
    'fade-left': {
      from: '-translate-x-4',
      to: 'translate-x-0'
    },
    'fade-right': {
      from: 'translate-x-4',
      to: 'translate-x-0'
    },
    'fade': {
      from: 'translate-y-0',
      to: 'translate-y-0'
    }
  }

  const v = variants[variant] || variants['fade-up']

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    opacity: mounted ? 1 : minOpacity,
  }

  const className = `${base} ${mounted ? v.to : v.from}`

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}
