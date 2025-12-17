import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence} from 'framer-motion'
import { useEffect } from 'react'

import './App.css'

import { routes } from './routes/routesConfig.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  const location = useLocation()

  useEffect(() => { 
    window.scrollTo(0, 0) 
  }, [location.pathname])

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <main className="Main bg-white min-h-screen" >
          <Routes location={location} key={location.pathname}>
            {Object.values(routes).map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
                index={route.isIndex || false} 
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main> 
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
