"use client"

interface ThemeTransitionProps {
  isDark: boolean
  progress: number
  sectionProgress: number
  isTransitioning: boolean
}

export default function ThemeTransition({ 
  isDark, 
  progress, 
  sectionProgress, 
  isTransitioning 
}: ThemeTransitionProps) {
  // Calculate transition intensity based on section progress
  const transitionIntensity = Math.min(sectionProgress * 2, 1)
  
  // Only show overlay when transitioning between sections
  if (!isTransitioning || progress < 0.1) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 transition-all duration-1000 ease-out"
      style={{
        background: isDark 
          ? `linear-gradient(to bottom, rgba(0,0,0,${transitionIntensity * 0.9}) 0%, rgba(0,0,0,${transitionIntensity * 0.9}) 100%)`
          : `linear-gradient(to bottom, rgba(255,255,255,${transitionIntensity * 0.9}) 0%, rgba(255,255,255,${transitionIntensity * 0.9}) 100%)`,
        opacity: transitionIntensity,
        mixBlendMode: isDark ? 'multiply' : 'screen'
      }}
    />
  )
} 