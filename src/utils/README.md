# Utilidades

Coloca aquí funciones utilitarias reutilizables.

Ejemplo:

```javascript
// formatDate.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// truncateText.js
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}
```
