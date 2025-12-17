import React from 'react'
import { Rocket, FlaskConical, GraduationCap, ArrowRight, ArrowUpRight } from 'lucide-react'

const Services = () => {
  const cards = [
    {
      title: 'Proyectos Estratégicos',
      desc: 'Iniciativas de alto impacto co-financiadas para la modernización del tejido productivo local.',
      icon: <Rocket className="text-[#E3001D] group-hover:text-white w-7 h-7" />,
      tag: 'Financiación'
    },
    {
      title: 'FabLab Ciudadano',
      desc: 'Espacio maker abierto con impresoras 3D, corte láser y CNC para prototipado rápido.',
      icon: <FlaskConical className="text-[#E3001D] group-hover:text-white w-7 h-7" />,
      tag: 'Equipamiento'
    },
    {
      title: 'Campus Virtual',
      desc: 'Plataforma de e-learning con cursos sobre competencias digitales y nuevos modelos de negocio.',
      icon: <GraduationCap className="text-[#E3001D] group-hover:text-white w-7 h-7" />,
      tag: 'Formación'
    }
  ]

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
              Recursos para <span className="text-[#E3001D]">Innovar</span>
            </h2>
            <p className="text-gray-600">
              Ponemos a disposición de la ciudadanía infraestructuras y conocimientos para materializar ideas.
            </p>
          </div>
          <button className="group hidden md:flex items-center gap-2 px-6 py-3 border-1 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#E3001D] transition-colors text-sm font-medium text-gray-700 shrink-0">
            Ver catálogo completo <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-gray-50 border-2 border-gray-200 hover:border-[#E3001D] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 border-2 border-red-100 rounded-xl flex items-center justify-center group-hover:bg-[#E3001D] group-hover:border-[#E3001D] transition-colors duration-300 shrink-0">
                    <div className="group-hover:text-white text-[#E3001D] transition-colors duration-300">
                       {card.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-xs text-gray-600 border border-gray-200 shrink-0">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{card.desc}</p>
              </div>
              <a href="#" className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-white border-2 border-gray-200 group-hover:bg-[#E3001D] hover:border-[#E3001D] transition-colors group-hover:text-white text-gray-700 text-sm font-medium">
                Acceder al servicio <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Botón móvil */}
        <div className="mt-8 md:hidden">
          <button className="w-full group flex items-center justify-center gap-2 px-6 py-3 border-1 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#E3001D] transition-colors text-sm font-medium text-gray-700">
            Ver catálogo completo <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
