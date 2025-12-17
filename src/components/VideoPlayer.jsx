import { X, Cookie } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const VideoPlayer = ({ id, isOpen, playing, onClose }) => {
    const playerRef = useRef(null)
    const containerRef = useRef(null)
    const apiLoadedRef = useRef(false)
    const [hasConsent, setHasConsent] = useState(false)

    // Verificar consentimiento de cookies
    useEffect(() => {
        const checkConsent = () => {
            // Buscamos cookies comunes de consentimiento
            const cookies = document.cookie.split(';');
            const hasCookieConsent = cookies.some(c => {
                const name = c.split('=')[0].trim().toLowerCase();
                return name.includes('consent') || 
                       name.includes('cookie') || 
                       name.includes('accept') ||
                       name.includes('privacy');
            });
            
            // Buscamos en localStorage también (algunas librerías lo usan)
            let hasLocalStorageConsent = false;
            try {
                hasLocalStorageConsent = Object.keys(localStorage).some(k => 
                    k.toLowerCase().includes('consent') || 
                    k.toLowerCase().includes('cookie')
                );
            } catch (e) {
                console.warn('LocalStorage access denied', e);
            }

            if (hasCookieConsent || hasLocalStorageConsent) {
                setHasConsent(true);
            }
        };

        checkConsent();
        
        // Comprobar periódicamente
        const interval = setInterval(checkConsent, 1000);
        
        // Comprobar también al hacer clic (ej. al pulsar "Aceptar" en el banner)
        const handleInteraction = () => {
            checkConsent();
            // Re-verificar con un pequeño delay para dar tiempo a que se guarde la cookie
            setTimeout(checkConsent, 500);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('focus', checkConsent);

        return () => {
            clearInterval(interval);
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('focus', checkConsent);
        };
    }, []);
    
    useEffect(() => {
        if (!isOpen || !hasConsent) {
            // Limpiar el player cuando se cierra o no hay consentimiento
            if (playerRef.current) {
                try {
                    if (playerRef.current.destroy) {
                        playerRef.current.destroy()
                    }
                } catch (e) {
                    console.error('Error destroying player:', e)
                }
                playerRef.current = null
            }
            return
        }

        // Callback cuando la API está lista
        const initPlayer = () => {
            if (!containerRef.current || playerRef.current) return
            
            try {
                playerRef.current = new window.YT.Player(containerRef.current, {
                    videoId: id,
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        autoplay: playing ? 1 : 0,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 1,
                        playsinline: 1,
                        autohide: 1,
                        color: 'white',
                    },
                    events: {
                        onReady: (event) => {
                            console.log('Player ready')
                            if (playing) {
                                event.target.playVideo()
                            }
                        },
                        onError: (event) => {
                            console.error('YouTube error:', event.data)
                        }
                    }
                })
            } catch (e) {
                console.error('Error creating player:', e)
            }
        }

        // Cargar la API de YouTube IFrame si no está cargada
        if (!apiLoadedRef.current && !window.YT) {
            apiLoadedRef.current = true
            const tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/iframe_api'
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            
            window.onYouTubeIframeAPIReady = initPlayer
        } else if (window.YT && window.YT.Player) {
            // Si la API ya está cargada, inicializar directamente
            initPlayer()
        }

        return () => {
            // Cleanup cuando el componente se desmonta
            if (playerRef.current) {
                try {
                    if (playerRef.current.destroy) {
                        playerRef.current.destroy()
                    }
                } catch (e) {
                    console.error('Error in cleanup:', e)
                }
                playerRef.current = null
            }
        }
    }, [isOpen, id, hasConsent])

    useEffect(() => {
        if (playerRef.current && playerRef.current.playVideo && playerRef.current.pauseVideo) {
            try {
                if (playing) {
                    playerRef.current.playVideo()
                } else {
                    playerRef.current.pauseVideo()
                }
            } catch (e) {
                console.error('Error controlling playback:', e)
            }
        }
    }, [playing])

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div 
                    className="flex justify-center items-center z-[99] top-0 left-0 fixed w-full h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                {/* Backdrop oscuro */}
                <motion.div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                
                {/* Container del video */}
                <div className="relative z-10 w-full max-w-4xl mx-4">
                    {/* Botón cerrar */}
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white hover:text-[#E3001D] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                        aria-label="Cerrar video"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Player personalizado con YouTube IFrame API */}
                    <motion.div 
                        className="relative rounded-lg overflow-hidden shadow-2xl bg-black"
                        style={{ paddingTop: '56.25%' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {!hasConsent ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-white p-8 text-center z-20">
                                <Cookie className="w-12 h-12 mb-4 text-[#E3001D]" />
                                <h3 className="text-xl font-bold mb-2">Cookies Requeridas</h3>
                                <p className="text-gray-400 mb-6 max-w-md text-sm">
                                    Para reproducir este video, es necesario aceptar las cookies de terceros (YouTube).
                                </p>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={onClose}
                                        className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-sm"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        onClick={() => {
                                            // Intentar abrir el gestor buscando el botón por texto (heurística)
                                            const buttons = Array.from(document.querySelectorAll('button'));
                                            const manageBtn = buttons.find(b => b.textContent && b.textContent.includes('Gestionar'));
                                            if (manageBtn) manageBtn.click();
                                        }}
                                        className="px-4 py-2 rounded-lg bg-[#E3001D] hover:bg-[#c20019] transition-colors font-medium text-sm"
                                    >
                                        Configurar Cookies
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div 
                                ref={containerRef}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        )}
                    </motion.div>
                </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
