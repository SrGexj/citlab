import React, { useEffect, useState } from 'react'

const DotWaveBackground1 = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let animationFrameId
    let lastTime = 0
    const animate = (currentTime) => {
      if (currentTime - lastTime > 33) {
        setTime((prev) => prev + 0.06)
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
    
    // Origen en esquina superior izquierda (0,0)
    const originX = 0
    const originY = 0

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacing
        const y = i * spacing
        
        // Distancia desde arriba-izquierda
        const distFromOrigin = Math.sqrt(
          Math.pow(x - originX, 2) + Math.pow(y - originY, 2)
        )
        
        const wave = Math.sin((distFromOrigin * 0.01) - time) * 6
        const waveIntensity = (Math.sin((distFromOrigin * 0.01) - time) + 1) / 2
        
        const opacity = 0.35 + waveIntensity * 0.55
        const radius = 2.5 + waveIntensity * 1.5
        
        // Glow con gradiente radial para bordes suaves
        const glowOpacity = waveIntensity * 0.4
        
        items.push(
          <g key={`${i}-${j}`}>
            {/* Glow externo - más grande y muy sutil */}
            <circle
              cx={x}
              cy={y + wave}
              r={radius + 8}
              fill="url(#glowGradient1)"
              opacity={glowOpacity * 0.3}
            />
            {/* Glow medio */}
            <circle
              cx={x}
              cy={y + wave}
              r={radius + 4}
              fill="url(#glowGradient1)"
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" style={{ zIndex: 0 }}>
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1950 975"
        style={{ opacity: 0.75 }}
      >
        <defs>
          {/* Gradiente radial para glow suave sin blur */}
          <radialGradient id="glowGradient1">
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

export default DotWaveBackground1
