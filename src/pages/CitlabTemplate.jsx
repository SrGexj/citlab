import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Clock, Mail, ArrowRight, Download, Microscope, PhoneCall } from 'lucide-react';
import Newsletter from '../components/sections/Newsletter';
import { Gallery } from '../components/ui/Gallery';
import { MachinesCard } from '../components/MachinesCard';
import { citlabsData } from '../data/citlabs';


const CitlabTemplate = () => {
    const { id } = useParams(); 

    const data = citlabsData[id]

    if (!data) {
        return <Navigate to="/404" />;
    }

    const galleryImages = data.gallery || [data.image];

    return (
        <>
        
        {/* HERO SECTION */}
        <header className="relative pt-32 md:pt-52 pb-12 md:pb-24 px-4 sm:px-6 overflow-hidden">
            {/* Patrón de puntos */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#E3001D 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
                {/* galería */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-4 bg-red-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                    
                    <Gallery images={galleryImages}>
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg max-w-[200px] md:max-w-xs border border-white/50 pointer-events-none">
                            <div className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase mb-1">Especialidad</div>
                            <div className="text-xs md:text-sm font-semibold text-gray-900">{data.specialty}</div>
                        </div>
                    </Gallery>
                </div>
                {/* contenido */}
                <div className='bg-white rounded-[20px] p-6 md:p-8 gap-6 md:gap-[23px] flex flex-col order-1 lg:order-2 shadow-sm border border-gray-100'>
                    <div className="flex flex-col pl-2">
                        <span className="font-ibMono text-gray-400 font-[500] tracking-wider text-[10px] md:text-xs uppercase mb-2 block">
                        <Microscope className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2 mb-0.5" />
                        {data.tagline}
                        </span>
                        <div className="flex items-start gap-2">
                            <span className='mt-3.5 w-[3px] md:w-[4px] h-[25px] md:h-[35px] bg-[#D11111]' />
                            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 flex gap-2 flex-wrap">
                            CITLab<span className="text-[#E3001D]">{data.name}</span>
                            </h1>
                        </div>
                        <p className="text-[#6B7280] text-base md:text-[20px] font-medium leading-relaxed max-w-lg mt-2">
                            {data.description}
                        </p>
                    </div>
                    <span className='h-[1px] md:h-[2px] w-full bg-gray-200 block' />
                    <p className='text-[#6B7280] text-sm md:text-base'>
                        {
                            data.long_description
                        }
                    </p>
                    <span className='h-[1px] md:h-[2px] w-full bg-gray-200 block' />
                    <div className="flex flex-col gap-3 md:gap-4 text-sm text-gray-600 pl-2">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#E3001D] shrink-0" />
                            <span>{data.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#E3001D] shrink-0" />
                            <span>Lunes a Viernes: <span className="font-semibold text-gray-900">{data.schedule}</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#E3001D] shrink-0" />
                            <a href={`mailto:${data.email}`} className="hover:text-[#E3001D] hover:underline break-all">{data.email}</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <PhoneCall className="w-4 h-4 md:w-5 md:h-5 text-[#E3001D] shrink-0" />
                            <a href={`tel:${data.phone}`} className="hover:text-[#E3001D] hover:underline">{data.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* MAQUINARIA SECTION */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#E3001D] font-semibold tracking-widest text-xs uppercase mb-2 block">Hardware Disponible</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1215] mb-4">
                            Laboratorio de <br/><span className="text-[#E3001D]">Fabricación Digital</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg">
                            Maquinaria de industria 4.0 lista para prototipar tus ideas. 
                            <span className="hidden md:inline"> Consulta la ficha técnica y reserva tu turno.</span>
                        </p>
                    </div>
                    <a href="#" className="w-full md:w-auto group flex justify-center items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-600 font-medium hover:border-[#E3001D] hover:text-[#E3001D] transition-all shadow-sm">
                        <span>Descargar dossier técnico</span>
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.machines.map((machine, idx) => (
                        <MachinesCard key={idx} machine={machine} />
                    ))}
                </div>
            </div>
        </section>

        {/* TALLERES SECTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <span className="text-[#E3001D] font-semibold uppercase tracking-wider text-xs mb-2">Formación Activa</span>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Talleres en {data.name}</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        Participa en nuestras sesiones gratuitas. Desde la iniciación a la tecnología maker hasta cursos avanzados para PYMES.
                    </p>
                    
                    <div className="space-y-4">
                        {data.workshops.map((workshop, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-50 text-[#E3001D] font-semibold flex items-center justify-center shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{workshop.title}</h4>
                                    <p className="text-sm text-gray-500">{workshop.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {data.featuredCourse && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative">
                        <div className="h-2 bg-[#E3001D] w-full absolute top-0"></div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded uppercase">{data.featuredCourse.status}</span>
                                    <h3 className="text-2xl font-semibold mt-2">{data.featuredCourse.title}</h3>
                                </div>
                                <div className="text-center bg-gray-50 rounded-lg p-2 border border-gray-100">
                                    <span className="block text-2xl font-semibold text-[#E3001D]">{data.featuredCourse.date}</span>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">{data.featuredCourse.month}</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-sm text-gray-600 mb-8">
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> {data.featuredCourse.time}</div>
                                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> {data.featuredCourse.location}</div>
                            </div>

                            <button className="w-full py-3 rounded-lg border-2 border-[#E3001D] text-[#E3001D] font-semibold hover:bg-[#E3001D] hover:text-white transition">
                                Inscribirme Gratis
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>

        {/* MAPA SECTION */}
        <section className="h-80 md:h-96 w-full relative bg-gray-200 group overflow-hidden">
            <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-gray-300 hover:bg-gray-200 transition-colors cursor-pointer text-decoration-none"
            >
                <div className="text-gray-500 font-medium flex flex-col items-center p-4 text-center">
                    <MapPin className="w-10 h-10 mb-2 opacity-50 group-hover:text-[#E3001D] group-hover:scale-110 transition-all duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors">Ubicación del Centro</span>
                    <span className="text-sm mt-1 opacity-75 max-w-xs">{data.address}</span>
                    <span className="mt-4 px-5 py-2 bg-white text-[#E3001D] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm group-hover:shadow-md transition-all md:hidden">
                        Ver en Mapa
                    </span>
                </div>
            </a>
            
            <div className="hidden md:block absolute top-10 right-10 bg-white p-6 rounded-xl shadow-2xl max-w-sm pointer-events-none">
                <h4 className="font-semibold text-gray-900 mb-1">¿Cómo llegar?</h4>
                <p className="text-sm text-gray-500 mb-4">Acceso por la entrada principal. Aparcamiento disponible en zonas aledañas.</p>
                <div className="text-xs font-semibold text-[#E3001D] flex items-center gap-1">
                    Clic en el mapa para navegar <ArrowRight className="w-3 h-3" />
                </div>
            </div>
        </section>

        <Newsletter />
        </>
    );
};

export default CitlabTemplate;
