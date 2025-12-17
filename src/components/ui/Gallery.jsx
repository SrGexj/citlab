import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery = ({ images = [], children, aspectRatio = "aspect-[4/3]" }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const changeImage = (newIndex) => {
    setDirection(newIndex > selectedImage ? 1 : -1);
    setSelectedImage(newIndex);
  };

  // Manejo de teclas para el lightbox
  useEffect(() => {

    if (isLightboxOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') changeImage((selectedImage + 1) % images.length);
      if (e.key === 'ArrowLeft') changeImage((selectedImage - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images, selectedImage]);

  if (!images.length) return null;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };


  return (
    <>
      {/* LIGHTBOX */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 "
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                changeImage((selectedImage - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img 
                  key={selectedImage}
                  src={images[selectedImage]} 
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  alt={`Galería ${selectedImage + 1}`} 
                  className="absolute max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                changeImage((selectedImage + 1) % images.length);
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium z-50">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-col gap-4 w-full">
          {/* Imagen Principal */}
          <div 
            className={`relative bg-gray-200 rounded-2xl overflow-hidden ${aspectRatio} shadow-2xl shadow-gray-200 cursor-zoom-in group`}
            onClick={() => setIsLightboxOpen(true)}
          >
              <AnimatePresence mode='wait'>
                <motion.img 
                  key={selectedImage}
                  src={images[selectedImage]} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  alt="Galería principal" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center z-10">
                <div className="bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider px-2">Ver Galería</span>
                </div>
              </div>

              <div className="relative z-20 pointer-events-none h-full">
                {children}
              </div>
          </div>

          {/* Miniaturas con Scroll Horizontal */}
          {images.length > 1 && (
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide mask-linear-fade">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => changeImage(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 snap-start ${
                    selectedImage === idx 
                      ? 'border-[#E3001D] ring-2 ring-[#E3001D]/20 ring-offset-2' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
      </div>
    </>
  );
};
