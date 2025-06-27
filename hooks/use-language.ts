import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export type Language = 'es' | 'en'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en') // Default to English
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check URL parameters on mount
    const urlLanguage = searchParams.get('language')
    
    if (urlLanguage === 'us') {
      setLanguage('en')
    } else if (urlLanguage === 'mx') {
      setLanguage('es')
    }
    // If no parameter or invalid parameter, stays as English (default)
  }, [searchParams])

  const content = {
    es: {
      hero: {
        title: "Diseñamos y construimos\ntecnología útil para\nnegocios ambiciosos.",
        subtitle: "Consultoría, desarrollo, producto. Siempre funcional. Siempre bien hecho.",
        cta: "Contáctanos"
      },
      webDevelopment: {
        title: "Desarrollo Web\npara negocios",
        description: "Creamos páginas web elegantes, funcionales y rápidas. Pensadas para operar, no solo para verse bien.",
        testimonial: "Transformaron nuestra presencia digital en 6 semanas."
      },
      productLabs: {
        title: "Producto & Labs",
        description: "Diseñamos, validamos y construimos productos digitales desde cero. UX, estrategia y ejecución.",
        testimonial: "De idea a producto en el mercado en 90 días."
      },
      about: {
        title: "Quiénes somos",
        description: "RB Industries es una firma tecnológica boutique. Creamos herramientas digitales con intención, estética y precisión. No hacemos relleno. Hacemos lo que funciona."
      },
      footer: {
        copyright: "© RB Industries. Tecnología útil. 2025.",
        email: "hola@rbindustries.com"
      }
    },
    en: {
      hero: {
        title: "We design and build\nuseful technology for\nambitious businesses.",
        subtitle: "Consulting, development, product. Always functional. Always well done.",
        cta: "Contact us"
      },
      webDevelopment: {
        title: "Web Development\nfor businesses",
        description: "We create elegant, functional and fast websites. Designed to operate, not just look good.",
        testimonial: "They transformed our digital presence in 6 weeks."
      },
      productLabs: {
        title: "Product & Labs",
        description: "We design, validate and build digital products from scratch. UX, strategy and execution.",
        testimonial: "From idea to market product in 90 days."
      },
      about: {
        title: "Who we are",
        description: "RB Industries is a boutique technology firm. We create digital tools with intention, aesthetics and precision. We don't do filler. We do what works."
      },
      footer: {
        copyright: "© RB Industries. Useful technology. 2025.",
        email: "hello@rbindustries.com"
      }
    }
  }

  return {
    language,
    setLanguage,
    content: content[language]
  }
} 