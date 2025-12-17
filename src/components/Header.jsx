import { useState, useEffect } from 'react'
import {
    ChevronDown,
    Menu,
    X,
    Cpu,
    CalendarCheck,
    User,
    Target,
    Users,
    FileText,
    Handshake,
    Sprout,
    CircleDollarSign,
    Search,
    Twitter,
    Linkedin,
    Instagram,
    Facebook,
    Youtube,
    Blocks,
    TruckElectric
} from 'lucide-react'

import { motion, AnimatePresence } from 'motion/react'

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Retraso entre cada hijo
                delayChildren: 0.2    // Retraso antes de empezar
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    // Variantes para redes sociales
    const socialContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    }

    const socialItemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    }

    // Variantes para navbar
    const navMenuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    const ctaVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const ctaItemVariants = {
        hidden: { opacity: 0, x: 10 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.3 }
        }
    }

    // Variantes para menú móvil
    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        }
    }

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.3 }
        }
    }

    // Scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="bg-white border-b border-gray-200 py-2 px-4 sm:px-6 lg:px-8 z-[60]">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Left: Logos */}
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex items-center gap-4">
                        <motion.a variants={itemVariants} target='_blank' href="https://dip-badajoz.es/" className="hover:opacity-80 transition-opacity">
                            <img
                                src="/svg/logo-dip.svg"
                                alt="Diputación de Badajoz"
                                className="h-[45px] w-auto"
                            />
                        </motion.a>
                        <motion.a variants={itemVariants} target='_blank' href="https://ods.dip-badajoz.es/" className="hover:opacity-80 transition-opacity">
                            <img
                                src="/images/ods.png"
                                alt="ODS"
                                className="h-[35px] w-auto"
                            />
                        </motion.a>
                    </motion.div>
                    {/* Right: Search & Social */}
                    <div className="flex items-center gap-3">

                        {/* Search */}
                        <div className="hidden md:flex items-center">
                            <AnimatePresence mode="wait">
                                {searchOpen ? (
                                    <motion.div 
                                        key="search-input"
                                        className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200"
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            initial={{ x: 0, opacity: 0 }}
                                            animate={{ x: [-5, 0], opacity: 1 }}
                                            transition={{ 
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10
                                            }}
                                        >
                                            <Search className="w-4 h-4 text-gray-400" />
                                        </motion.div>
                                        <motion.input
                                            type="text"
                                            placeholder="Buscar..."
                                            autoFocus
                                            onBlur={() => setSearchOpen(false)}
                                            className="bg-transparent outline-none text-sm text-gray-700 w-40 placeholder-gray-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="search-button"
                                        onClick={() => setSearchOpen(true)}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="p-1.5 text-gray-600 hover:text-[#E3001D] hover:scale-110 active:scale-95"
                                        aria-label="Buscar"
                                    >
                                        <Search className="w-4 h-4" />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Divider */}
                        <div className="hidden md:block w-px h-6 bg-gray-200"></div>
                        {/* Social Links */}
                        <motion.div 
                            className="hidden md:flex items-center gap-2"
                            variants={socialContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.a
                                href="#"
                                className="p-1.5 text-gray-600 hover:text-[#E3001D] transition-colors"
                                aria-label="Twitter"
                                variants={socialItemVariants}
                            >
                                <Twitter className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="p-1.5 text-gray-600 hover:text-[#E3001D] transition-colors"
                                aria-label="LinkedIn"
                                variants={socialItemVariants}
                            >
                                <Linkedin className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="p-1.5 text-gray-600 hover:text-[#E3001D] transition-colors"
                                aria-label="Instagram"
                                variants={socialItemVariants}
                            >
                                <Instagram className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="p-1.5 text-gray-600 hover:text-[#E3001D] transition-colors"
                                aria-label="Facebook"
                                variants={socialItemVariants}
                            >
                                <Facebook className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="p-1.5 text-gray-600 hover:text-[#E3001D] transition-colors"
                                aria-label="YouTube"
                                variants={socialItemVariants}
                            >
                                <Youtube className="w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>
            <nav
                className={` w-full z-50 transition-all duration-300 border-b border-gray-200 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-xl py-2' : 'bg-white py-4'
                    }`}
                style={{ top: '61px' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <motion.a 
                            href="/"
                            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <img src="/images/citlabs_logo.png" className='h-20' alt="" />
                        </motion.a>
                        {/* Desktop Menu */}
                        <motion.div 
                            className="hidden md:flex space-x-8 items-center"
                            variants={navMenuVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.a href="#" className="text-gray-700 hover:text-[#E3001D] transition-colors text-sm font-medium" variants={navItemVariants}>Inicio</motion.a>
                            {/* Mega Menu: El Centro */}
                            <motion.div className="group relative cursor-pointer py-4" variants={navItemVariants}>
                                <span className="text-gray-700 group-hover:text-[#E3001D] transition-colors text-sm font-medium flex items-center gap-1">
                                    Red <span  className="font-ibMono">CITLab </span><ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </span>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                    <div>
                                        <h4 className="text-[#E3001D] font-semibold mb-3 text-xs uppercase tracking-wider">Institucional</h4>
                                        <ul className="space-y-2">
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <Target className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Misión y Visión
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <Users className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Organigrama
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <FileText className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Transparencia
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[#E3001D] font-semibold mb-3 text-xs uppercase tracking-wider">Red CIT</h4>
                                        <ul className="space-y-2">
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <Handshake className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Colaboración MITECO
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <Sprout className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Oportunidades Rurales
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#E3001D] hover:translate-x-1 transition-all text-sm group/item">
                                                    <CircleDollarSign className="w-4 h-4 text-gray-400 group-hover/item:text-[#E3001D]" />
                                                    Economía Circular
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Mega Menu: Laboratorio */}
                            <motion.div className="group relative py-4" variants={navItemVariants}>
                                <span className="text-gray-700 cursor-pointer group-hover:text-[#E3001D] transition-colors text-sm font-medium flex items-center gap-1">
                                    Laboratorios <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </span>
                                <div className="absolute flex gap-5 top-full left-1/2 -translate-x-1/2 w-[650px] bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                    <div className="flex flex-col">
                                        <h4 className="text-[#E3001D] font-semibold mb-3 text-xs uppercase tracking-wider">Espacios <span className="text-gray-600 font-ibMono font-normal">CITLab</span></h4>
                                        <div className="grid grid-cols-1 gap-4 w-fit">
                                            <a href="/citlab/olivenza" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <Blocks  className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">Olivenza</p>
                                                    <p className="text-gray-600 text-xs">Centro de Historia, Arquitectura y Tecnología</p>
                                                </div>
                                            </a>
                                            <a href="/citlab/jerez" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <Blocks className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">Jerez de los Caballeros</p>
                                                    <p className="text-gray-600 text-xs">Espacios para la Transformación Digital</p>
                                                </div>
                                            </a>
                                            <a href="/citlab/villanueva" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <Blocks className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">Villanueva de la Serena</p>
                                                    <p className="text-gray-600 text-xs">Espacios Diáfanos de Alta Capacidad</p>
                                                </div>
                                            </a>
                                            <a className="nextToBe flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <TruckElectric className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">CITLab móvil (próximamente)</p>
                                                    <p className="text-gray-600 text-xs">Ingenio e innovación sobre ruedas</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <span className='w-px bg-gray-200'></span>
                                    <div className="flex flex-col">
                                        <h4 className="text-[#E3001D] font-semibold mb-3 text-xs uppercase tracking-wider">Recursos Disponibles</h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <Cpu className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">Equipamiento</p>
                                                    <p className="text-gray-600 text-xs">Impresoras 3D, cortadoras láser y más.</p>
                                                </div>
                                            </a>
                                            <a href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                                <CalendarCheck className="text-[#E3001D] mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-semibold">Reservar Espacio</p>
                                                    <p className="text-gray-600 text-xs">Gestiona tu puesto de trabajo.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.a href="#agenda" className="text-gray-700 hover:text-[#E3001D] transition-colors text-sm font-medium" variants={navItemVariants}>Agenda</motion.a>
                            <motion.a href="#proyectos" className="text-gray-700 hover:text-[#E3001D] transition-colors text-sm font-medium" variants={navItemVariants}>Proyectos</motion.a>
                        </motion.div>
                        {/* CTA Buttons */}
                        <motion.div 
                            className="hidden md:flex items-center gap-4"
                            variants={ctaVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.a href="#" className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#E3001D] transition-colors" variants={ctaItemVariants}>
                                <User className="w-4 h-4" />
                                Acceso Usuarios
                            </motion.a>
                            <motion.a href="#" className="bg-[#E3001D] hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-lg shadow-red-500/20 transition-all" variants={ctaItemVariants}>
                                Registrarse
                            </motion.a>
                        </motion.div>
                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-[#E3001D] p-2">
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            className="md:hidden bg-white border-t border-gray-200 absolute w-full h-screen top-full left-0 p-4"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="space-y-4">
                                {['Inicio', 'El Centro', 'Laboratorio', 'Agenda', 'Proyectos'].map((item, idx) => (
                                    <motion.a 
                                        key={item} 
                                        href="#" 
                                        className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-[#E3001D]"
                                        variants={mobileItemVariants}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                <motion.div className="pt-6 border-t border-gray-200 mt-4 space-y-3" variants={mobileItemVariants}>
                                    <a href="#" className="block w-full text-center bg-[#E3001D] text-white px-4 py-3 rounded-lg font-semibold">
                                        Registrarse
                                    </a>
                                    <a href="#" className="block w-full text-center text-gray-600 hover:text-[#E3001D] text-sm">
                                        Acceso Usuarios
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Header

