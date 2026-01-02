import { motion } from 'motion/react'
import { Home, Search, ArrowLeft, AlertCircle } from 'lucide-react'

export const NotFound = () => {
    // Variantes para el número 404
    const numberVariants = {
        hidden: { scale: 0, opacity: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.8
            }
        }
    }

    // Variantes para el contenido
    const contentVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.6
            }
        }
    }

    // Variantes para los botones
    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                staggerChildren: 0.15
            }
        }
    }

    const buttonVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.4 }
        }
    }

    // Variantes para los círculos flotantes
    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
            {/* Círculos decorativos animados */}
            <motion.div 
                className="absolute top-20 left-20 w-64 h-64 bg-[#E3001D]/10 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div 
                className="absolute bottom-20 right-20 w-96 h-96 bg-[#E3001D]/5 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
            />

            {/* Contenido principal */}
            <div className="text-center relative z-10 px-4 max-w-2xl">
                {/* Icono de alerta animado */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <motion.div
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-[#E3001D]/20 rounded-full blur-xl"
                        />
                        <AlertCircle className="w-20 h-20 text-[#E3001D] relative z-10" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Número 404 */}
                <motion.div
                    variants={numberVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-6"
                >
                    <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#E3001D] to-red-700 leading-none tracking-tighter">
                        404
                    </h1>
                </motion.div>

                {/* Texto descriptivo */}
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        Página no encontrada
                    </h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                </motion.div>

                {/* Botones de acción */}
                <motion.div
                    variants={buttonContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="/"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(227, 0, 29, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-8 py-4 bg-[#E3001D] hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Volver al Inicio
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="/#proyectos"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#E3001D] text-gray-900 font-semibold rounded-xl transition-all"
                    >
                        <Search className="w-5 h-5 text-[#E3001D]" />
                        Explorar Proyectos
                    </motion.a>
                </motion.div>

                {/* Logo corporativo */}
                <div className="flex gap-5 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16"
                    >
                        <img
                            src="/images/dip_badajoz.png"
                            alt="CITLAB"
                            className="h-16 mx-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16"
                    >
                        <img
                            src="/images/citlabs_logo.png"
                            alt="CITLAB"
                            className="h-16 mx-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
