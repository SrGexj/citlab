import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { LangProvider } from './context/langContext.jsx';
import { CookieManager } from "react-cookie-manager";
import { cookieTranslations } from './data/cookieTranslations';
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
                acceptButton: "!bg-[#E3001D] hover:!bg-[#c20019] !text-white text-xs font-medium w-full px-3 py-2 rounded-lg transition-colors shadow-sm shadow-red-100",
                declineButton: "!bg-gray-100 hover:!bg-gray-200 !text-gray-700 text-xs font-medium w-full px-3 py-2 rounded-lg transition-colors",
                manageButton: "!bg-transparent border !border-gray-200 !text-gray-500 hover:!text-[#E3001D] hover:!border-[#E3001D] text-xs font-medium px-3 py-2 rounded-lg transition-colors",
                manageSaveButton: "!bg-[#E3001D] hover:!bg-[#c20019] !text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors shadow-sm shadow-red-100",
                manageCancelButton: "!bg-gray-100 hover:!bg-gray-200 !text-gray-700 text-xs font-medium px-3 py-2 rounded-lg transition-colors",
              }}
              cookieKitId={import.meta.env.VITE_COOKIE_KIT_ID}
              showManageButton={true}
              theme="light"
              displayType="popup"
              enableFloatingButton={true}
              translations={cookieTranslations}
            />
            <App />
          </Router>
        </PreloaderProvider>
      </LangProvider>
    {/* </ApiProvider> */}
  </StrictMode>
);
