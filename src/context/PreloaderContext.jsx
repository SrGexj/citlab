import React, { createContext, useContext, useState, useRef } from 'react';
import { RouteLoader } from '../components/RouteLoader';
import { AnimatePresence } from 'framer-motion'

const PreloaderContext = createContext();

export const usePreloader = () => {
    const context = useContext(PreloaderContext);
    if (!context) {
        throw new Error('usePreloader must be used within a PreloaderProvider');
    }
    return context;
};

export const PreloaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const startTimeRef = useRef(null);
    const minLoadingTime = 300;

    const showPreloader = () => {
        startTimeRef.current = Date.now();
        setIsLoading(true);
    };

    const hidePreloader = () => {
        if (!startTimeRef.current) {
            setIsLoading(false);
            return;
        }
        const elapsedTime = Date.now() - startTimeRef.current;
        const remainingTime = Math.max(0, elapsedTime - minLoadingTime);
      
        setTimeout(() => {
            setIsLoading(false);
            startTimeRef.current = null;
        }, remainingTime);
    };

    return (
        <PreloaderContext.Provider value={{ isLoading, showPreloader, hidePreloader }}>
            <AnimatePresence>
                {isLoading && <RouteLoader key="route-loader" />}
                {children}
            </AnimatePresence>
        </PreloaderContext.Provider>
    );
};
