"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = hero.querySelectorAll("[data-parallax]")
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0.5")
        ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div 
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/logo.jpeg"
              alt="Talho do André - Corte com Alma"
              width={200}
              height={200}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto object-contain"
              priority
              loading="eager"
            />
          </div>

          {/* Main Title */}
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 animate-fade-in-up tracking-wide"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="block text-balance">Talho do André</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-primary text-xl md:text-2xl lg:text-3xl font-serif italic mb-8 animate-fade-in-up tracking-wider"
            style={{ animationDelay: "0.5s" }}
          >
            Corte com Alma
          </p>

          {/* Subtitle */}
          <p 
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.6s" }}
          >
            Servimos a Charneca da Caparica com as melhores carnes selecionadas, 
            cortes personalizados e um atendimento que honra a tradição.
          </p>

          {/* Location Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 bg-primary/10 backdrop-blur-sm rounded-none mb-10 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/90 text-sm uppercase tracking-[0.15em]">
              Charneca da Caparica
            </span>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="#produtos"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 min-h-[44px]"
            >
              Ver Produtos
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium uppercase tracking-wider hover:border-primary hover:text-primary hover:bg-white/5 transition-all duration-300 min-h-[44px]"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link 
          href="#sobre"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-primary transition-colors"
          aria-label="Scroll para baixo"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-primary/20 hidden lg:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r border-t border-primary/20 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l border-b border-primary/20 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r border-b border-primary/20 hidden lg:block" />
    </section>
  )
}
