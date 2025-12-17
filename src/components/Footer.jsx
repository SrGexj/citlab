import React from 'react'
import { 
  Layers, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Youtube,
  ArrowRight
} from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/citlabs_logo.png" className='h-20' alt="CITLAB Logo" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Centro de Innovación Territorial impulsando la transformación digital y sostenible del mundo rural.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E3001D] hover:border-[#E3001D] transition-all">
                <Twitter className="w-4 h-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E3001D] hover:border-[#E3001D] transition-all">
                <Linkedin className="w-4 h-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E3001D] hover:border-[#E3001D] transition-all">
                <Instagram className="w-4 h-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E3001D] hover:border-[#E3001D] transition-all">
                <Facebook className="w-4 h-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E3001D] hover:border-[#E3001D] transition-all">
                <Youtube className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#' },
                { label: 'El Centro', href: '#' },
                { label: 'Laboratorio', href: '#proyectos' },
                { label: 'Agenda', href: '#agenda' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Contacto', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-[#E3001D] transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {[
                'Proyectos Estratégicos',
                'FabLab Ciudadano',
                'Campus Virtual',
                'Asesoramiento',
                'Coworking',
                'Eventos'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-[#E3001D] transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-[#E3001D] flex-shrink-0 mt-0.5" />
                <span>
                  Avda. de Europa, 1<br />
                  06004 Badajoz, España
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-5 h-5 text-[#E3001D] flex-shrink-0" />
                <a href="tel:+34924000000" className="hover:text-[#E3001D] transition-colors">
                  +34 924 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-5 h-5 text-[#E3001D] flex-shrink-0" />
                <a href="mailto:info@citlab.es" className="hover:text-[#E3001D] transition-colors">
                  info@citlab.es
                </a>
              </li>
            </ul>

            {/* Newsletter Mini Form */}
            <div className="mt-6">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Suscríbete a nuestro boletín</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-1 px-3 py-2 text-sm rounded-lg border-2 border-gray-200 focus:border-[#E3001D] focus:outline-none"
                />
                <button className="px-4 py-2 bg-[#E3001D] text-white rounded-lg hover:bg-red-700 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p>© 2025 <span className="font-semibold text-gray-900">Diputación de Badajoz</span>. Todos los derechos reservados.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#E3001D] transition-colors">Aviso Legal</a>
              <a href="#" className="text-gray-600 hover:text-[#E3001D] transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-600 hover:text-[#E3001D] transition-colors">Política de Cookies</a>
              <a href="#" className="text-gray-600 hover:text-[#E3001D] transition-colors">Accesibilidad</a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Este proyecto está cofinanciado por el <span className="font-semibold">Fondo Europeo de Desarrollo Regional (FEDER)</span> y el <span className="font-semibold">Ministerio para la Transición Ecológica y el Reto Demográfico (MITECO)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
