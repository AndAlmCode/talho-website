"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary"
        data-parallax="0.3"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            <span className="text-primary-foreground/90 text-sm uppercase tracking-wider">
              Desde 1985 • Charneca da Caparica
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="block text-balance">Tradição &</span>
            <span className="block text-balance italic">Qualidade Premium</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.6s" }}
          >
            Servimos a nossa comunidade com as melhores carnes selecionadas, 
            cortes personalizados e um atendimento que honra a tradição familiar.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="#produtos"
              className="w-full sm:w-auto px-8 py-4 bg-primary-foreground text-primary font-medium uppercase tracking-wider hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-xl min-h-[44px]"
            >
              Descobrir Produtos
            </Link>
            <Link
              href="#sobre"
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium uppercase tracking-wider hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 min-h-[44px]"
            >
              A Nossa História
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link 
          href="#sobre"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll para baixo"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-24 h-24 border border-primary-foreground/10 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 w-32 h-32 border border-primary-foreground/10 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: "1s" }} />
    </section>
  )
}
