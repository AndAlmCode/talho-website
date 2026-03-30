"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.jpeg"
              alt="Talho do André - Corte com Alma"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="font-serif text-lg md:text-xl font-medium tracking-wide text-white">
                Talho do André
              </p>
              <p className="text-xs text-primary tracking-[0.2em] uppercase">
                Corte com Alma
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-wider font-medium text-white/80 hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Encomendar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card border border-border/50 rounded-sm p-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/80 transition-colors"
            >
              Encomendar
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
