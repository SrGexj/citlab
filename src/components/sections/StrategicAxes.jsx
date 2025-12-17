import { Leaf, Users, Wifi, ArrowRight, Sprout } from 'lucide-react'
import {ConnectedDiagram} from '../ui/ConnectedDiagram'
import { useState } from 'react'

const StrategicAxes = () => {

  const [isHover, setIsHover] = useState(null)

  const axes = [
    {
      title: "Emprendimiento y Empleo",
      desc: "Impulsando la generación de relaciones y sinergias entre diferentes grupos de personas, y fomentando la iniciativa emprendedora.",
      icon: <Sprout className="w-6 h-6" />,
      bg: "#E6F6E9",
      iconColor: "text-green-600",
      img: "/images/hero-bg.jpg"
    },
    {
      title: "Pedagogía Digital",
      desc: "Poniendo a disposición de la población y las empresas el acceso a nuevas tecnologías.",
      icon: <Users className="w-6 h-6" />,
      bg: "#E8F0FE",
      iconColor: "text-blue-600",
      img: "/images/hero-bg.jpg"
    },
    {
      title: "Comunidad Maker Digital",
      desc: "Punto de encuentro colaborativo para la cultura maker, impulsando la participación y la interconexión para desarrollar ideas.",
      icon: <Wifi className="w-6 h-6" />,
      bg: "#F3E8FF",
      iconColor: "text-purple-600",
      img: "/images/hero-bg.jpg"
    }
  ]

  const diagramHoverStyles = (n) => {
    setIsHover(n)
  }

  return (
    <section className="pt-12 md:pt-20 bg-gray-50 relative">
      <div className="mx-auto max-w-2xl text-center items-center flex flex-col gap-2 px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center">
              Nuestros <span className="px-3 py-1 text-[30px] bg-linear-to-l to-[#E3001D]/20 from-transparent text-[#E3001D]">Ejes de Acción</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl">
              El CITLAB opera bajo tres pilares fundamentales alineados con los Objetivos de Desarrollo Sostenible y la agenda España 2050.
            </p>
      </div>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 flex justify-center items-center border-[#b9b9b9] border-dotted py-10 flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="w-full lg:w-[65%] relative mx-auto">
          <ConnectedDiagram
            indexHover={diagramHoverStyles}
          />
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-4 z-1">
          {axes.map((axis, idx) => (
            <div 
              key={idx} 
              className={`transition-all duration-200 group flex flex-col justify-between p-5 rounded-xl border border-gray-200 h-full bg-white hover:shadow-md`}
              style={{
                backgroundColor: isHover === idx ? `${axis.bg}` : ''
              }}
              onMouseEnter={() => diagramHoverStyles(idx)}
              onMouseLeave={() => diagramHoverStyles(null)}
            >
              <div>
                <div className={`${axis.iconColor} mb-3 w-fit h-fit flex items-center justify-center transition-colors duration-300`}>
                  {axis.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-gray-900 mb-2">{axis.title}</h3>
                <p className="text-[#766e6e] text-[16px] md:text-[18px] leading-relaxed">{axis.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrategicAxes
