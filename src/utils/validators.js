export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isPhone(value) {
  return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(value);
}

export function isRequired(value) {
  return value !== undefined && value !== null && value.toString().trim() !== '';
} 