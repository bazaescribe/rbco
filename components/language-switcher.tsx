"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Language } from '@/hooks/use-language'

interface LanguageSwitcherProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleLanguageChange = (newLanguage: Language) => {
    onLanguageChange(newLanguage)
    
    // Update URL parameter
    const params = new URLSearchParams(searchParams.toString())
    if (newLanguage === 'en') {
      params.set('language', 'us')
    } else {
      params.set('language', 'mx')
    }
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/'
    router.push(newUrl, { scroll: false })
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`text-sm tracking-wide transition-all duration-300 text-foreground ${
          language === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
      >
        MX
      </button>
      <span className="text-sm opacity-30 text-foreground">/</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`text-sm tracking-wide transition-all duration-300 text-foreground ${
          language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
      >
        US
      </button>
    </div>
  )
} 