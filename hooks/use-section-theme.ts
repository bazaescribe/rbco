import { useState, useEffect } from 'react'

export type ThemeType = 'light' | 'dark'

export const useSectionTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.3 // 30% del viewport

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const sectionBottom = sectionTop + sectionHeight

        // Si la sección está visible al 30% del viewport
        if (sectionTop <= threshold && sectionBottom > threshold) {
          // Determinar el tema basado en el índice de la sección
          // Secciones pares (0, 2, 4...) = light, impares (1, 3, 5...) = dark
          const newTheme: ThemeType = index % 2 === 0 ? 'light' : 'dark'
          
          if (newTheme !== currentTheme) {
            setCurrentTheme(newTheme)
            updateThemeVariables(newTheme)
          }
        }
      })
    }

    const updateThemeVariables = (theme: ThemeType) => {
      const root = document.documentElement
      
      if (theme === 'dark') {
        root.style.setProperty('--background', '0 0% 0%')
        root.style.setProperty('--foreground', '0 0% 100%')
        root.style.setProperty('--card', '0 0% 0%')
        root.style.setProperty('--card-foreground', '0 0% 100%')
        root.style.setProperty('--primary', '0 0% 100%')
        root.style.setProperty('--primary-foreground', '0 0% 0%')
        root.style.setProperty('--secondary', '0 0% 0%')
        root.style.setProperty('--secondary-foreground', '0 0% 100%')
        root.style.setProperty('--muted', '0 0% 0%')
        root.style.setProperty('--muted-foreground', '0 0% 100%')
        root.style.setProperty('--accent', '0 0% 0%')
        root.style.setProperty('--accent-foreground', '0 0% 100%')
        root.style.setProperty('--border', '0 0% 100%')
        root.style.setProperty('--input', '0 0% 100%')
        root.style.setProperty('--ring', '0 0% 100%')
      } else {
        root.style.setProperty('--background', '0 0% 100%')
        root.style.setProperty('--foreground', '0 0% 0%')
        root.style.setProperty('--card', '0 0% 100%')
        root.style.setProperty('--card-foreground', '0 0% 0%')
        root.style.setProperty('--primary', '0 0% 0%')
        root.style.setProperty('--primary-foreground', '0 0% 100%')
        root.style.setProperty('--secondary', '0 0% 100%')
        root.style.setProperty('--secondary-foreground', '0 0% 0%')
        root.style.setProperty('--muted', '0 0% 100%')
        root.style.setProperty('--muted-foreground', '0 0% 0%')
        root.style.setProperty('--accent', '0 0% 100%')
        root.style.setProperty('--accent-foreground', '0 0% 0%')
        root.style.setProperty('--border', '0 0% 0%')
        root.style.setProperty('--input', '0 0% 0%')
        root.style.setProperty('--ring', '0 0% 0%')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount to set initial theme
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentTheme])

  return {
    currentTheme
  }
} 