"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000F0D]/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/RBco.svg" width={75} height={24} alt="RB Consulting" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors">
              Servicios
            </Link>
            <Link href="#" className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors">
              Casos de éxito
            </Link>
            <Link href="#" className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors">
              Sobre nosotros
            </Link>
            <Link href="#" className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors">
              Blog
            </Link>
            <Button className="bg-[#D4FF00] text-[#000F0D] hover:bg-[#D4FF00]/90">Contacto</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#F0F0F0]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#000F0D] absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#"
              className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos de éxito
            </Link>
            <Link
              href="#"
              className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nosotros
            </Link>
            <Link
              href="#"
              className="text-[#F0F0F0]/80 hover:text-[#D4FF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Button
              className="bg-[#D4FF00] text-[#000F0D] hover:bg-[#D4FF00]/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
