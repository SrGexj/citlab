import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const LangProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'es'
    })

    const setLang = (lang) => {
        setLanguage(lang)
        localStorage.setItem('selectedLanguage', lang)
    }

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'es' : 'en'
        setLanguage(newLang)
        localStorage.setItem('selectedLanguage', newLang)
    }

    return (
        <LangContext.Provider value={{ language, setLang, toggleLanguage }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    return useContext(LangContext)
}
