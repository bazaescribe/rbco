"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import { Language } from "@/hooks/use-language"
import Image from "next/image"
import { useSectionTheme } from "@/hooks/use-section-theme"

interface NavbarProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0)
  const { currentTheme } = useSectionTheme()

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
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href="/" className="relative w-[167px] h-[20px]">
  {/* Backdrop blur solo en áreas transparentes */}
  <div
    className="absolute inset-0"
    style={{
      WebkitMaskImage: "url('/logo.png')",
      maskImage: "url('/logo.png')",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      backdropFilter: "blur(80px)",
      WebkitBackdropFilter: "blur(80px)",
      pointerEvents: "none",
    }}
  />

  {/* Imagen visible del logo */}
  <Image 
    src="/logo.png" 
    width={164} 
    height={20} 
    alt="RB Technologies"
    className="relative z-10"
    style={{
      mixBlendMode: currentTheme === 'dark' ? 'difference' : 'normal',
      filter: currentTheme === 'dark' ? 'invert(1)' : 'none',
    }} 
  />
</Link>

        <LanguageSwitcher
          language={language}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </nav>
  )
}
