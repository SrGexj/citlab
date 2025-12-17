import { ArrowRight, PlayCircle, Microscope } from 'lucide-react'
import DotWaveBackground1 from '../ui/DotWaveBackground1'
import { VideoPlayer } from '../VideoPlayer'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll} from 'motion/react'

export const Hero = () => {

  const target = useRef(null)

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end start']
  })

  const [isOpen, setIsOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setPlaying(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleOpenVideo = (e) => {
    e.preventDefault()
    setIsOpen(true)
    // Esperar un momento antes de iniciar la reproducción
    setTimeout(() => setPlaying(true), 100)
  }

  const handleCloseVideo = () => {
    setPlaying(false)
    // Esperar a que se pause antes de cerrar
    setTimeout(() => setIsOpen(false), 100)
  }


  return (
    <>
      <VideoPlayer 
        id={'jNRzKqxugl4'}
        isOpen={isOpen} 
        playing={playing}
        onClose={handleCloseVideo}
      />
      <motion.section
        ref={target}
        className="relative pt-48 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Ola desde arriba-izquierda */}
       <DotWaveBackground1 /> 

        {/* Capa de gradientes para suavizar la integración */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" style={{ zIndex: 1, opacity: 0.7 }} />
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, white 90%)',
            opacity: 0.8
          }}
        />
        
        {/* Glows ambientales sutiles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E3001D]/5 rounded-full blur-[120px] pointer-events-none" style={{ zIndex: 2 }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] pointer-events-none" style={{ zIndex: 2 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center" style={{ zIndex: 10 }}>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6 md:mb-8 shadow-lg hover:bg-red-100 transition-colors cursor-default"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3001D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3001D]" />
            </span>
            <span className="text-[10px] md:text-xs font-ibMono tracking-wide text-gray-700 uppercase">
              Diputación de Badajoz
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 md:mb-8 leading-[1.1] text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            Innovación <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001D] via-red-600 to-red-800">
              desde el territorio
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 font-light mb-8 md:mb-10 leading-relaxed px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.275, duration: 0.3 }}
          >
            Conectamos el <span className="text-[#E3001D] font-medium">mundo rural</span> con el futuro digital. 
            Un ecosistema abierto para emprendedores, ciudadanos y administraciones.
          </motion.p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <motion.a
              href="#proyectos" 
              className="w-full sm:w-auto px-8 py-4 bg-[#E3001D] hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 flex items-center transition-[background-color,box-shadow] justify-center gap-2 group text-sm md:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Microscope className="w-5 h-5" />
              Explorar Laboratorio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#" 
              onClick={handleOpenVideo}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-900 font-semibold rounded-xl flex items-center justify-center gap-2 hover:border-[#E3001D] transition-[background-color,border-color] cursor-pointer text-sm md:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <PlayCircle className="w-5 h-5 text-[#E3001D]" /> Ver Vídeo
            </motion.a>
          </div>
        </div>

        {/* Stats Bar (Bottom Hero) */}
        <div className="absolute bottom-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm" style={{ zIndex: 10 }}>
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { val: '24', label: 'Municipios Piloto' },
              { val: '100%', label: 'Conectividad' },
              { val: '50+', label: 'Startups Rurales' },
              { val: '3', label: 'Ejes Estratégicos' },
            ].map((s, i) => (
              <div key={i} className="text-center border-r border-gray-200 last:border-0 last:border-r-0 md:last:border-0 even:border-r-0 md:even:border-r">
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#E3001D]">{s.val}</div>
                <div className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
