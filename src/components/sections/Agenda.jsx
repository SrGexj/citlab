import React, { useEffect, useState } from 'react'
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import { img } from 'framer-motion/client'

const Agenda = () => {

  const [events, setEvents] = useState([])
  const [cardWidth, setCardWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const eventsArray = [
    { day: '12', month: 'MAR', title: 'Taller de Robótica Educativa', time: '10:00 - 14:00', loc: 'FabLab Badajoz', image: '/images/hero-bg.jpg'},
    { day: '15', month: 'MAR', title: 'Webinar: Subvenciones EU', time: '17:00 - 18:30', loc: 'Online', image: '/images/hero-bg.jpg' },
    { day: '22', month: 'MAR', title: 'Hackathon Rural 2025', time: '09:00 - 21:00', loc: 'CITLAB Central', image: '/images/hero-bg.jpg'},
  ]

  const scrollEvents = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, events.length - 1))
    }
  }

  useEffect(() => {
    setEvents(eventsArray)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      const firstCard = document.querySelector('#eventsContainer > div');
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    };

    // Calcular el ancho inicial después de renderizar
    const timer = setTimeout(updateDimensions, 100);

    // Recalcular al cambiar tamaño de ventana
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    }

  }, [events])

  return (
    <section id="agenda" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#E3001D]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className=" absolute right-0 top-[30%] -translate-y-1/2 w-64 h-64 bg-[#E3001D]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Texto Intro */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#E3001D] font-semibold tracking-wider text-sm uppercase mb-4">
              <Calendar className="w-4 h-4" /> Agenda <span className="text-gray-400 font-normal font-ibMono">CITLab</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-gray-900 xl:max-w-full max-w-md">
              No te pierdas nuestra actividad
            </h2>
            <p className="text-gray-600 text-lg mb-8 xl:max-w-xl lg:max-w-md">
              Talleres, conferencias y encuentros de networking diseñados para potenciar el talento local.
            </p>
            <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#E3001D] hover:px-3 py-2 hover:bg-red-50 rounded-xl transition-all duration-100">
              Ver calendario completo <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-5 h-5" />
            </a>
          </div>
          {/* Lista Eventos */}
          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Botones de navegación */}
            <div className="flex gap-4 justify-end xl:justify-start">
              <button 
                onClick={() => {
                  scrollEvents('left')
                }} 
                className="bg-white w-10 h-10 rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-20 hover:bg-red-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => {
                  scrollEvents('right')
                }} 
                className="bg-white w-10 h-10 rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-20 hover:bg-red-400 hover:text-white transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            {/* Contenedor de desplazamiento */}
            <div 
              className="h-full flex relative w-full scroll-smooth py-2 overflow-visible"
            >
              <div className="flex h-full transition-transform duration-500 ease-out"
              id="eventsContainer"
               style={{ 
                       gap: '16px',
                       transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`
              }}
              >
              {events.map((evt, i) => (
                <div key={i} className="w-[85vw] sm:w-[400px] h-full shrink-0 flex flex-col items-left justify-center gap-3 p-4 rounded-xl bg-white border-1 border-gray-200 hover:border-[#E3001D] hover:shadow-lg transition-all cursor-pointer group">
                  <img src={evt.image} alt="" className=' w-full object-cover h-32 rounded-lg' />
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg border-1 border-gray-200 group-hover:border-[#E3001D] group-hover:bg-red-50 transition-colors">
                      <span className="text-xs text-gray-600 font-semibold">{evt.month}</span>
                      <span className="text-xl text-gray-900 font-semibold group-hover:text-[#E3001D]">{evt.day}</span>
                    </div>
                    <h4 className="text-gray-900 font-semibold text-lg group-hover:text-[#E3001D] transition-colors">{evt.title}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {evt.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {evt.loc}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-1 border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-[#E3001D] group-hover:text-white group-hover:border-[#E3001D] transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda
