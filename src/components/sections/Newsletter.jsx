import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 md:py-20 relative bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="relative rounded-3xl overflow-hidden bg-[#E3001D] p-8 md:p-16 text-center shadow-2xl">
          {/* Patrón de fondo abstracto */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">Únete a la Innovación</h2>
            <p className="text-red-50 mb-8 max-w-lg mx-auto text-sm md:text-base">
              Recibe mensualmente las últimas convocatorias, noticias y recursos del CITLAB directamente en tu correo.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full flex-1 px-5 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-[#E3001D] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                Suscribirme
              </button>
            </form>
            <p className="text-xs text-red-100 mt-4">
              Al suscribirte aceptas nuestra política de privacidad. Sin spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
