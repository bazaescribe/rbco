import { useState, useEffect } from 'react'

export const useScrollTheme = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sectionProgress, setSectionProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      
      // Calculate overall scroll progress (0 to 1)
      const progress = Math.min(scrollY / documentHeight, 1)
      setScrollProgress(progress)

      // Determine current section and section progress
      const sections = document.querySelectorAll('section')
      let activeSection = 0
      let sectionProgressValue = 0

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const sectionBottom = sectionTop + sectionHeight

        // Calculate how much of this section is visible
        const visibleHeight = Math.min(sectionHeight, windowHeight)
        const visibleTop = Math.max(0, -sectionTop)
        const visibleBottom = Math.min(visibleHeight, windowHeight - sectionTop)
        const visibleAmount = Math.max(0, visibleBottom - visibleTop)
        
        const progressInSection = visibleAmount / visibleHeight

        // Consider a section "active" when it's more than 30% visible
        if (sectionTop <= windowHeight * 0.7 && sectionBottom > windowHeight * 0.3) {
          activeSection = index
          sectionProgressValue = progressInSection
        }
      })

      setCurrentSection(activeSection)
      setSectionProgress(sectionProgressValue)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate theme transition based on current section
  const getThemeTransition = () => {
    // Even sections (0, 2, 4...) are light theme, odd sections (1, 3, 5...) are dark theme
    const isDarkSection = currentSection % 2 === 1
    const isTransitioning = sectionProgress > 0.1 && sectionProgress < 0.9
    
    return {
      isDark: isDarkSection,
      progress: scrollProgress,
      sectionProgress,
      isTransitioning,
      currentSection
    }
  }

  return {
    currentSection,
    scrollProgress,
    sectionProgress,
    getThemeTransition
  }
} 