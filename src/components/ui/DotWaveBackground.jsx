import React, { useEffect, useState } from 'react'

const DotWaveBackground = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let animationFrameId
    const animate = () => {
      setTime((prev) => prev + 0.03)
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const renderDots = () => {
    const items = []
    const spacing = 40
    const rows = 25
    const cols = 50
    
    const centerX = (cols * spacing) / 2
    const centerY = (rows * spacing) / 2

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacing
        const y = i * spacing
        
        // Distancia desde el centro
        const distFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        )
        
        // Crear efecto de ola con múltiples ondas
        const wave1 = Math.sin((distFromCenter * 0.01) - time) * 10
        const wave2 = Math.sin((distFromCenter * 0.008) - time * 0.7) * 6
        
        const totalWave = wave1 + wave2
        
        // Calcular opacidad basada en la ola
        const baseOpacity = 0.3
        const waveOpacity = (Math.sin((distFromCenter * 0.01) - time) + 1) / 2
        const opacity = baseOpacity + waveOpacity * 0.6
        
        // Calcular radio basado en la ola
        const radius = 1.8 + Math.abs(totalWave) * 0.08
        
        items.push(
          <circle
            key={`${i}-${j}`}
            cx={x}
            cy={y + totalWave}
            r={radius}
            fill="#E3001D"
            opacity={opacity}
          />
        )
      }
    }
    return items
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20!" style={{ zIndex: 0 }}>
      {/* SVG con dots animados */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full" 
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 2000 1000"
          style={{ opacity: 0.5 }}
        >
          {renderDots()}
        </svg>
      </div>
      
      {/* Overlay degradado para suavizar */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1215] via-transparent to-[#0B1215]" style={{ opacity: 0.7 }} />
      
      {/* Gradiente radial desde el centro */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, #0B1215 80%)',
          opacity: 0.8
        }}
      />
    </div>
  )
}

export default DotWaveBackground
