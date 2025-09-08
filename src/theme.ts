export const setTheme = (theme: 'light' | 'dark') => {
  document.documentElement.setAttribute('data-theme', theme)
}

export const getTheme = (): 'light' | 'dark' => {
  return document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light'
}

export const toggleTheme = () => {
  const currentTheme = getTheme()
  setTheme(currentTheme === 'light' ? 'dark' : 'light')
  return currentTheme === 'light' ? 'dark' : 'light'
}

// CSS custom property utilities
export const setCSSProperty = (property: string, value: string) => {
  document.documentElement.style.setProperty(property, value)
}

export const getCSSProperty = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

// Preset color schemes
export const colorSchemes = {
  default: {
    '--vaultrice-primary-color': 'rgba(55, 0, 255, 0.8)',
    '--vaultrice-primary-color-hover': 'rgba(55, 0, 255, 0.9)',
  },
  blue: {
    '--vaultrice-primary-color': '#007bff',
    '--vaultrice-primary-color-hover': '#0056b3',
  },
  green: {
    '--vaultrice-primary-color': '#28a745',
    '--vaultrice-primary-color-hover': '#1e7e34',
  },
  purple: {
    '--vaultrice-primary-color': '#6f42c1',
    '--vaultrice-primary-color-hover': '#5a32a3',
  }
}

export const applyColorScheme = (scheme: keyof typeof colorSchemes) => {
  const colors = colorSchemes[scheme]
  Object.entries(colors).forEach(([property, value]) => {
    setCSSProperty(property, value)
  })
}
