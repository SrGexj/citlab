import { ArrowRight } from 'lucide-react';

export const MachinesCard = ({ machine, key }) => {
    return (
        <div key={key} className="group relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E3001D] to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#E3001D] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                        <machine.icon className="w-7 h-7" />
                                    </div>
                                    <span className="bg-[#E3001D]/10 text-[#E3001D] text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider border border-[#E3001D]/20">
                                        {machine.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#E3001D] transition-colors">{machine.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    {machine.desc}
                                </p>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6 group-hover:bg-red-50/30 group-hover:border-red-100 transition-colors">
                                    <div className="text-[10px] uppercase text-gray-400 font-semibold mb-3 tracking-wider">Especificaciones</div>
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                        {machine.specs.map((spec, sIdx) => (
                                            <div key={sIdx} className={`flex flex-col ${sIdx === 2 ? 'col-span-2' : ''}`}>
                                                <span className="text-xs text-gray-500">{spec.label}</span>
                                                <span className="text-sm font-semibold text-gray-800">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-[#E3001D] transition-colors cursor-pointer">
                                    Ver disponibilidad
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
    )
}