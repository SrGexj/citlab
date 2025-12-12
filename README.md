# React Base Template 🚀

Template base estructural para proyectos React con **Vite**, **React Router**, **Tailwind CSS**, **Framer Motion**, **Sentry** y **React Query**.

---

## 🎯 Cómo Usar Este Template

### Método 1: GitHub CLI (Recomendado) ⚡

```bash
# Crear un nuevo proyecto usando este template
gh repo create mi-nuevo-proyecto --template SrGexj/react-base-template --public --clone

# Entrar al directorio
cd mi-nuevo-proyecto

# Instalar dependencias
pnpm install
# o npm install
# o yarn install

# Iniciar servidor de desarrollo
pnpm dev
```

### Método 2: Interfaz Web de GitHub 🌐

1. **Ir al repositorio template**: https://github.com/SrGexj/react-base-template
2. **Click en el botón verde "Use this template"** (arriba a la derecha)
3. **Click en "Create a new repository"**
4. **Configurar tu nuevo proyecto:**
   - Nombre del repositorio: `mi-nuevo-proyecto`
   - Descripción: (opcional)
   - Público/Privado: según tu preferencia
5. **Click en "Create repository"**
6. **Clonar tu nuevo repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/mi-nuevo-proyecto.git
   cd mi-nuevo-proyecto
   pnpm install
   pnpm dev
   ```

### Método 3: Sin GitHub CLI (Manual) 📋

```bash
# Descargar el template como ZIP desde GitHub
# Descomprimir en tu directorio de proyectos

# Inicializar nuevo repositorio git
git init
git add .
git commit -m "Initial commit from template"

# Conectar con tu repositorio remoto (opcional)
git remote add origin https://github.com/TU-USUARIO/mi-nuevo-proyecto.git
git push -u origin main

# Instalar dependencias
pnpm install

# Iniciar desarrollo
pnpm dev
```

---

## 📦 Características

- ⚡ **Vite** - Build tool ultrarrápido
- ⚛️ **React 19** - Última versión de React
- 🎨 **Tailwind CSS 4** - Estilos utility-first
- 🎭 **Framer Motion** - Animaciones fluidas
- 🛣️ **React Router DOM** - Navegación SPA
- 🐛 **Sentry** - Monitoreo de errores
- 🔍 **React Query** - Gestión de estado del servidor (opcional)
- 🍪 **Cookie Manager** - Gestión de consentimiento de cookies
- 🌐 **Context API** - Gestión de idiomas y estado global
- ⏳ **Preloader** - Sistema de carga personalizable

> **Nota:** El ApiProvider está incluido pero comentado por defecto. Descoméntalo en `main.jsx` si necesitas usar React Query para llamadas API.

## 🚀 Inicio Rápido

Una vez creado tu proyecto desde el template:

```bash
# Ya estás en el directorio del proyecto
# 1. Instalar dependencias
pnpm install

# 2. Configurar variables de entorno (opcional)
# Crea un archivo .env en la raíz del proyecto
echo "VITE_SENTRY_DSN=
VITE_API_URL=
VITE_API_TOKEN=
VITE_COOKIE_KIT_ID=" > .env

# 3. Iniciar servidor de desarrollo
pnpm dev
# La aplicación se abrirá en http://localhost:3000
```

### ✅ Primeros Pasos Después de Crear el Proyecto

1. **Revisar `package.json`**: Actualiza nombre, versión, descripción
2. **Configurar `.env`**: Añade tus variables de entorno
3. **Personalizar `index.html`**: Cambia el título y metadatos
4. **Modificar `src/pages/Home.jsx`**: Crea tu página de inicio
5. **Actualizar `src/components/Header.jsx` y `Footer.jsx`**: Personaliza según tu proyecto
6. **Añadir rutas en `src/routes/routesConfig.jsx`**: Define tu navegación
7. **Listo para desarrollar** 🎉

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── RouteLoader.jsx
├── context/            # React Contexts
│   ├── apiContext.jsx
│   ├── langContext.jsx
│   └── PreloaderContext.jsx
├── pages/              # Páginas/Vistas
│   ├── Home.jsx
│   └── NotFound.jsx
├── routes/             # Configuración de rutas
│   └── routesConfig.jsx
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
├── App.css             # Estilos globales del App
└── index.css           # Estilos base
```

## 🔧 Configuración

### Variables de Entorno

Edita `.env` con tus configuraciones:

```bash
# Sentry (opcional)
VITE_SENTRY_DSN=tu-sentry-dsn

# API
VITE_API_URL=https://tu-api.com
VITE_API_TOKEN=tu-token

# Cookie Manager
VITE_COOKIE_KIT_ID=tu-cookie-kit-id
```

### Añadir Nuevas Rutas

Edita `src/routes/routesConfig.jsx`:

```javascript
import { Home } from '../pages/Home'
import { About } from '../pages/About'

export const routes = {
  home: {
    path: '/',
    element: <Home />,
    isIndex: true
  },
  about: {
    path: '/about',
    element: <About />,
  },
}
```

### Usar React Query (Opcional)

Si necesitas hacer llamadas a una API, primero descomenta el `ApiProvider` en `src/main.jsx`:

```javascript
// main.jsx
import { ApiProvider } from './context/apiContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>  {/* Descomentar esta línea */}
      <LangProvider>
        {/* ... resto del código */}
      </LangProvider>
    </ApiProvider>  {/* Descomentar esta línea */}
  </StrictMode>
);
```

Luego puedes usarlo en tus componentes:

```javascript
import { useApiQuery } from './context/apiContext'

function MyComponent() {
  const { data, isLoading, error } = useApiQuery('users')

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{JSON.stringify(data)}</div>
}
```

### Cambiar Idioma

```javascript
import { useLang } from './context/langContext'

function LanguageSelector() {
  const { language, setLang, toggleLanguage } = useLang()

  return (
    <button onClick={toggleLanguage}>
      Idioma: {language === 'es' ? 'Español' : 'English'}
    </button>
  )
}
```

### Usar Preloader

```javascript
import { usePreloader } from './context/PreloaderContext'

function MyComponent() {
  const { showPreloader, hidePreloader } = usePreloader()

  const handleLoad = async () => {
    showPreloader()
    await fetchData()
    hidePreloader()
  }

  return <button onClick={handleLoad}>Cargar datos</button>
}
```

## 📜 Scripts Disponibles

```bash
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Construir para producción
npm run preview    # Previsualizar build de producción
npm run lint       # Ejecutar ESLint
```

## 🎨 Personalización

### Cambiar Colores de Tailwind

Edita `src/index.css` o crea un `tailwind.config.js` si necesitas más control.

### Modificar Loader

Edita `src/components/RouteLoader.jsx` para personalizar el loader.

### Cambiar Header/Footer

Edita `src/components/Header.jsx` y `src/components/Footer.jsx`.

## 📝 Notas

- El template viene con configuración mínima para que puedas personalizarlo fácilmente
- Sentry está configurado para activarse solo en producción
- React Query está configurado con caché de 5 minutos por defecto
- El Cookie Manager requiere un Cookie Kit ID (obtenerlo en tu plataforma de cookies)

## 🤝 Contribuir

Si encuentras mejoras o bugs, siéntete libre de contribuir.

## 📄 Licencia

MIT
