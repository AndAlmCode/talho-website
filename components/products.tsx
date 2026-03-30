"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Beef, Drumstick, Rabbit } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "vaca",
    name: "Vaca",
    icon: Beef,
    description: "Cortes nobres de bovino nacional, maturados para máximo sabor.",
    cuts: [
      { name: "Picanha", popular: true },
      { name: "Vazia" },
      { name: "Alcatra" },
      { name: "Acém" },
      { name: "Lombo" },
      { name: "Entrecosto" },
      { name: "Bife do Lombo" },
      { name: "Bife da Vazia" },
      { name: "Carne Picada" },
      { name: "Jarrete" },
      { name: "Rabada" },
      { name: "Cachaço" },
    ],
  },
  {
    id: "porco",
    name: "Porco",
    icon: Beef,
    description: "Porco de criação tradicional portuguesa, com sabor autêntico.",
    cuts: [
      { name: "Entremeada", popular: true },
      { name: "Febras" },
      { name: "Lombinho" },
      { name: "Secretos" },
      { name: "Costeletas" },
      { name: "Rojões" },
      { name: "Entrecosto" },
      { name: "Carne Picada" },
      { name: "Pernil" },
      { name: "Pá" },
      { name: "Toucinho" },
      { name: "Orelha" },
    ],
  },
  {
    id: "borrego",
    name: "Borrego",
    icon: Beef,
    description: "Borrego tenro, ideal para assados e momentos especiais.",
    cuts: [
      { name: "Perna", popular: true },
      { name: "Costeletas" },
      { name: "Paleta" },
      { name: "Sela" },
      { name: "Cabrito" },
      { name: "Chanfana" },
    ],
  },
  {
    id: "aves",
    name: "Aves e Caça",
    icon: Drumstick,
    description: "Frango do campo, peru e outras aves de qualidade superior.",
    cuts: [
      { name: "Frango do Campo", popular: true },
      { name: "Peito de Frango" },
      { name: "Coxas de Frango" },
      { name: "Asas de Frango" },
      { name: "Peru" },
      { name: "Pato" },
      { name: "Coelho", popular: true },
      { name: "Codorniz" },
    ],
  },
]

const specialties = [
  "Chouriço Caseiro",
  "Morcela",
  "Farinheira",
  "Alheira",
  "Salpicão",
  "Presunto",
  "Paio",
  "Bacon",
]

export function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="produtos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-primary text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Os Nossos Produtos
          </span>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Carnes Frescas de Qualidade
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p 
            className={`text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selecionamos diariamente as melhores carnes para garantir frescura e qualidade na sua mesa.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(isActive ? null : category.id)}
                className={`group relative text-left p-6 lg:p-8 border transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  isActive 
                    ? "bg-primary border-primary" 
                    : "bg-card border-border/50 hover:border-primary/50"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center mb-4 transition-colors ${
                  isActive ? "bg-white/20" : "bg-primary/20"
                }`}>
                  <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-primary"}`} />
                </div>
                
                {/* Name */}
                <h3 className={`font-serif text-xl lg:text-2xl mb-2 transition-colors ${
                  isActive ? "text-white" : "text-white group-hover:text-primary"
                }`}>
                  {category.name}
                </h3>
                
                {/* Count */}
                <p className={`text-sm transition-colors ${
                  isActive ? "text-white/80" : "text-white/50"
                }`}>
                  {category.cuts.length} cortes disponíveis
                </p>

                {/* Expand indicator */}
                <div className={`absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}>
                  <svg 
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>

        {/* Expanded Category Details */}
        {activeCategory && (
          <div className="mb-12 animate-fade-in">
            {categories.filter(c => c.id === activeCategory).map((category) => (
              <div 
                key={category.id}
                className="bg-card border border-border/50 p-6 lg:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/60 max-w-xl">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:bg-primary/80 transition-all whitespace-nowrap"
                  >
                    Encomendar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Cuts Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.cuts.map((cut) => (
                    <div
                      key={cut.name}
                      className={`relative px-4 py-3 text-center border transition-all hover:border-primary/50 ${
                        cut.popular 
                          ? "bg-primary/10 border-primary/30" 
                          : "bg-background border-border/30"
                      }`}
                    >
                      {cut.popular && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-0.5">
                          Popular
                        </span>
                      )}
                      <span className={`text-sm ${cut.popular ? "text-white font-medium" : "text-white/80"}`}>
                        {cut.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Specialties Section */}
        <div 
          className={`bg-card border border-border/50 p-6 lg:p-10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                <Rabbit className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl text-white">
                  Enchidos e Fumados
                </h3>
                <p className="text-white/50 text-sm">
                  Produtos tradicionais portugueses
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {specialties.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-background text-sm text-white/70 border border-border/30 hover:border-primary/50 hover:text-white transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/50 mb-6">
            Fazemos cortes personalizados ao seu gosto. Visite-nos ou ligue para encomendar.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 min-h-[44px]"
          >
            Fale Connosco
          </Link>
        </div>
      </div>
    </section>
  )
}
