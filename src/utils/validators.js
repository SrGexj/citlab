// Validation helpers for forms
export const cleanDocument = (s) => s ? s.trim().toUpperCase().replace(/\s|-/g, '') : ''

export const calcularLetraDni = (dniNumber) => {
  const cadena = "TRWAGMYFPDXBNJZSQVHLCKET"
  const num = parseInt(dniNumber, 10)
  if (isNaN(num)) return null
  return cadena[num % 23]
}

export const validarDocumento = (raw) => {
  const doc = cleanDocument(raw)
  const dniRegex = /^\d{8}[A-Z]$/
  const nieRegex = /^[XYZ]\d{7}[A-Z]$/

  if (dniRegex.test(doc)) {
    const num = doc.substring(0, 8)
    const letra = doc[8]
    const esperada = calcularLetraDni(num)
    if (!esperada) return { valid: false, msg: 'Formato inválido' }
    return esperada === letra ? { valid: true } : { valid: false, msg: 'NIF/NIE inválido' }
  }

  if (nieRegex.test(doc)) {
    const map = { X: '0', Y: '1', Z: '2' }
    const numeric = map[doc[0]] + doc.substring(1, 8)
    const letra = doc[8]
    const esperada = calcularLetraDni(numeric)
    if (!esperada) return { valid: false, msg: 'Formato inválido' }
    return esperada === letra ? { valid: true } : { valid: false, msg: 'NIF/NIE inválido' }
  }

  return { valid: false, msg: 'Debe tener formato 8 dígitos + letra (DNI) o NIE (X/Y/Z + 7 dígitos + letra)' }
}

export const validateFullname = (v) => {
  const val = (v || '').trim().replace(/\s+/g, ' ')
  if (val.length < 3) return { valid: false, msg: 'Introduce al menos 3 caracteres' }

  // Accept single short names (e.g. 'Juan') or multi-word names.
  // For multi-word names require each word to be at least 2 chars and contain only letters, accents, hyphens or apostrophes.
  const parts = val.split(' ')
  if (parts.length === 1) return { valid: true }

  const namePartRe = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}$/u
  const allGood = parts.every(p => namePartRe.test(p))
  return allGood ? { valid: true } : { valid: false, msg: 'Nombre inválido' }
}

export const validateEmail = (v) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(v) ? { valid: true } : { valid: false, msg: 'Correo no válido' }
}

export const validatePassword = (v) => {
  if (v.length < 8) return { valid: false, msg: 'La contraseña debe tener al menos 8 caracteres' }
  return { valid: true }
}

export const validateLocation = (v) => {
  return v.trim().length > 1 ? { valid: true } : { valid: false, msg: 'Introduce una localidad' }
}

export const validatePostalCode = (v) => {
  const re = /^\d{5}$/
  return re.test(v) ? { valid: true } : { valid: false, msg: 'Código postal inválido' }
}
