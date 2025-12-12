import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { LangProvider } from './context/langContext.jsx';
import { CookieManager } from "react-cookie-manager";
// import { ApiProvider } from './context/apiContext.jsx'; // Descomentar si necesitas API
import { PreloaderProvider } from './context/PreloaderContext.jsx'

// Inicializar Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
  enabled: import.meta.env.PROD // Solo en producción
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ApiProvider> */} {/* Descomentar si necesitas API */}
      <LangProvider>
        <PreloaderProvider>
          <Router>
            <CookieManager
              classNames={{
                acceptButton: "!bg-[#f0f0f030] transition-all duration-300 hover:!bg-[#7d8570] !text-white text-xs text-medium w-full px-3 py-1.5 rounded-md mr-2",
                declineButton: "!bg-[#1c1c1c] transition-all duration-300 hover:!bg-[#f00] w-full text-[#1c1c1c] text-xs px-3 py-1.5 rounded-md",
                manageButton: "!text-white transition-all duration-300 hover:!border-[#7d8570] border border-gray-700 text-xs px-3 py-1.5 rounded-md",
              }}
              cookieKitId={import.meta.env.VITE_COOKIE_KIT_ID}
              showManageButton={true}
              theme="dark"
              displayType="popup"
              enableFloatingButton={false}
              translations={{
                title: "Usamos cookies 🍪",
                message: "Valoramos tu privacidad. Elige qué cookies deseas permitir.",
                buttonText: "Aceptar todas",
                declineText: "Rechazar todas",
                manageText: "Gestionar preferencias"
              }}
            />
            <App />
          </Router>
        </PreloaderProvider>
      </LangProvider>
    {/* </ApiProvider> */}
  </StrictMode>
);
