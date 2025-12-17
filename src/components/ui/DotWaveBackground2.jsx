import React, { useEffect, useState } from 'react'

const DotWaveBackground2 = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let animationFrameId
    let lastTime = 0
    const animate = (currentTime) => {
      if (currentTime - lastTime > 33) {
        setTime((prev) => prev + 0.055)
        lastTime = currentTime
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const renderDots = () => {
    const items = []
    const spacing = 65
    const rows = 15
    const cols = 30
    
    // Origen en esquina inferior derecha
    const originX = cols * spacing
    const originY = rows * spacing

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacing
        const y = i * spacing
        
        // Distancia desde abajo-derecha
        const distFromOrigin = Math.sqrt(
          Math.pow(x - originX, 2) + Math.pow(y - originY, 2)
        )
        
        const wave = Math.cos((distFromOrigin * 0.009) - time) * 6
        const waveIntensity = (Math.cos((distFromOrigin * 0.009) - time) + 1) / 2
        
        const opacity = 0.3 + waveIntensity * 0.6
        const radius = 2.5 + waveIntensity * 1.8
        
        // Glow con gradiente radial
        const glowOpacity = waveIntensity * 0.45
        
        items.push(
          <g key={`${i}-${j}`}>
            {/* Glow externo */}
            <circle
              cx={x}
              cy={y + wave}
              r={radius + 9}
              fill="url(#glowGradient2)"
              opacity={glowOpacity * 0.3}
            />
            {/* Glow medio */}
            <circle
              cx={x}
              cy={y + wave}
              r={radius + 4.5}
              fill="url(#glowGradient2)"
              opacity={glowOpacity * 0.5}
            />
            {/* Punto principal - nítido */}
            <circle
              cx={x}
              cy={y + wave}
              r={radius}
              fill="#E3001D"
              opacity={opacity}
            />
          </g>
        )
      }
    }
    return items
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1950 975"
        style={{ opacity: 0.65 }}
      >
        <defs>
          {/* Gradiente radial para glow suave sin blur */}
          <radialGradient id="glowGradient2">
            <stop offset="0%" stopColor="#E3001D" stopOpacity="1" />
            <stop offset="50%" stopColor="#E3001D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E3001D" stopOpacity="0" />
          </radialGradient>
        </defs>
        {renderDots()}
      </svg>
    </div>
  )
}

export default DotWaveBackground2
