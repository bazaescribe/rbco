"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import { Language } from "@/hooks/use-language"

interface NavbarProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate blur intensity based on scroll
  const blurIntensity = Math.min(scrollY / 100, 1) // Max blur at 100px scroll
  const bgOpacity = Math.min(scrollY / 50, 0.95) // Max opacity at 50px scroll

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300"
      style={{
        backdropFilter: `blur(${blurIntensity * 20}px)`,
        backgroundColor: `hsl(var(--background) / ${bgOpacity})`,
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl tracking-wide text-foreground transition-colors duration-300">
          RB Industries
        </Link>

        {/* Language Selector */}
        <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
      </div>
    </nav>
  )
}
