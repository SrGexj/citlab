import { Sparkles, Layers, Ticket, Leaf, Users, Sprout, Wifi } from 'lucide-react';
import { useState } from 'react';

export const ConnectedDiagram = ({ indexHover }) => {

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden p-8 font-sans text-slate-900">
      <div className="w-full h-full absolute">
        <div className="absolute inset-0 bg-linear-to-l from-[#F9FAFC] from-2% to-17% to-[#F9FAFC]/0 pointer-events-none z-20"></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#F9FAFC] from-2% to-17% to-[#F9FAFC]/0 pointer-events-none z-20"></div>
      </div>
      {/* FONDO DECORATIVO (Líneas y Círculos) 
        Este bloque SVG crea el efecto de "plano técnico" de fondo.
      */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Líneas horizontales punteadas */}
          <line x1="0" y1={"32.4%"} x2="100%" y2={"32.4%"} stroke="#000" strokeWidth="1" strokeDasharray="1 8" />
          <line x1="0" y1={"67.55%"} x2="100%" y2={"67.55%"} stroke="#000" strokeWidth="1" strokeDasharray="1 8" />

          {/* Círculo concéntrico izquierdo */}
          <circle cx="25.15%" cy="50.15%" r="155" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="1 8" opacity="1" />
          {/* Círculo concéntrico */}
           <circle cx="50%" cy="50%" r="155" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="1 8" opacity="1" />
           {/* Círculo concéntrico derecho */}
           <circle cx="74.87%" cy="49.9%" r="155" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="1 8" opacity="1" />
        </svg>
      </div>

      {/* BLOQUE DEL DIAGRAMA PRINCIPAL 
      */}
      <div className="relative z-10 w-full flex items-center justify-center py-10">
          
          {/* Línea de entrada (Izquierda - Gradient Fade in) */}
          <div className="w-[20%] absolute -left-10 top-1/2 h-1.5 bg-gray-500 rounded-full hidden sm:block"></div>
          
          {/* Línea de salida (Derecha - Gradient Fade out) */}
          <div className="w-[20%] absolute -right-10 top-1/2 h-1.5 bg-gray-500 rounded-full hidden sm:block"></div>

          {/* LA PISTA (Racetrack Shape) */}
          <div className="w-[70%] h-[300px] relative z-10">
              
              {/* SVG del Circuito Animado */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" className="overflow-visible">
                  {/* Base del riel (gris claro) */}
                  <rect 
                    x="3" y="3" 
                    width="calc(100% - 6px)" 
                    height="calc(100% - 6px)" 
                    rx="147" 
                    fill="none" 
                    stroke="#e5e7eb" 
                    strokeWidth="6" 
                  />
                  {/* Flujo de datos (línea punteada animada) */}
                  <rect 
                    x="3" y="3" 
                    width="calc(100% - 6px)" 
                    height="calc(100% - 6px)" 
                    rx="147" 
                    fill="none" 
                    stroke="#6b7280" 
                    strokeWidth="6"
                    strokeDasharray="10 30"
                    strokeLinecap="round"
                    className="circuit-flow"
                  />
                </svg>
              </div>

              {/* Icono Izquierdo */}
              <div onMouseEnter={() => indexHover(0)} onMouseLeave={() => indexHover(null)} className="absolute -left-[28px] top-1/2 transform -translate-y-1/2 bg-white w-14 h-14 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center z-20 transition-transform hover:scale-110 duration-300">
                  <Sprout className="w-7 h-7 text-red-600" strokeWidth={1.5} />
              </div>

              {/* Icono Derecho */}
              <div onMouseEnter={() => indexHover(2)} onMouseLeave={() => indexHover(null)} className="absolute -right-[28px] top-1/2 transform -translate-y-1/2 bg-white w-14 h-14 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center z-20 transition-transform hover:scale-110 duration-300">
                  <Wifi className="w-7 h-7 text-red-600" strokeWidth={1.5} />
              </div>

              {/* Punto/Icono Activo en la parte superior */}
              <div onMouseEnter={() => indexHover(1)} onMouseLeave={() => indexHover(null)} className="absolute right-[70%] -top-[7%] transform bg-red-600 w-9 h-9 rounded-full border-[2px] border-red-600 shadow-md flex items-center justify-center z-30 transition-transform hover:scale-110 duration-300">
                <Users className="w-[70%] text-[#fff]" strokeWidth={2} />
              </div>
          </div>
      </div>
    </div>
  );
}