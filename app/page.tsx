"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/hooks/use-language"
import { useSectionTheme } from "@/hooks/use-section-theme"

function HomeContent() {
  const { language, setLanguage, content } = useLanguage()
  const { currentTheme } = useSectionTheme()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-1000">
      {/* Persistent Navbar */}
      <Navbar language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-24 relative pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-editorial ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <AnimatedText className="mb-8">
              <h1 className="editorial-title whitespace-pre-line">
                {content.hero.title}
              </h1>
            </AnimatedText>
            <AnimatedText className="mb-16 max-w-3xl mx-auto font-light" delay={300}>
              <p className="editorial-subtitle">
                {content.hero.subtitle}
              </p>
            </AnimatedText>
            <AnimatedText delay={600}>
              <Link 
                href="https://wa.me/5516777083" 
                target="_blank"
                className="inline-block px-8 py-3 bg-foreground text-background font-medium rounded-2xl tracking-wide transition-all duration-300 hover:opacity-80"
              >
                {content.hero.cta}
              </Link>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <AnimatedText className="mb-12">
              <h2 className="editorial-title whitespace-pre-line">
                {content.webDevelopment.title}
              </h2>
            </AnimatedText>
            <AnimatedText className="mb-16" delay={200}>
              <p className="editorial-text font-light leading-relaxed">
                {content.webDevelopment.description}
              </p>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="text-sm opacity-60 italic">
                "{content.webDevelopment.testimonial}"
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Product & Labs Section */}
      <section className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <AnimatedText className="mb-12">
              <h2 className="editorial-title whitespace-pre-line">
                {content.productLabs.title}
              </h2>
            </AnimatedText>
            <AnimatedText className="mb-16" delay={200}>
              <p className="editorial-text font-light leading-relaxed">
                {content.productLabs.description}
              </p>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="text-sm opacity-60 italic">
                "{content.productLabs.testimonial}"
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedText className="mb-16">
            <h2 className="editorial-title">
              {content.about.title}
            </h2>
          </AnimatedText>
          <AnimatedText delay={200}>
            <div className="max-w-3xl">
              <p className="editorial-text leading-relaxed">
                {content.about.description}
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <AnimatedText>
              <p className="editorial-text font-light">
                {content.footer.copyright}
              </p>
            </AnimatedText>
            <AnimatedText delay={200}>
              <Link 
                href={`mailto:${content.footer.email}`}
                className="editorial-text font-light transition-opacity duration-300 hover:opacity-60 mt-4 md:mt-0"
              >
                {content.footer.email}
              </Link>
            </AnimatedText>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-4"></div>
          <p className="text-sm opacity-60">Loading...</p>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
