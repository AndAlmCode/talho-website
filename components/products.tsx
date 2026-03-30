"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Carnes de Vaca",
    description: "Cortes nobres de bovino, maturados com perfeição para um sabor incomparável.",
    items: ["Picanha", "Entrecosto", "Vazia", "Alcatra", "Lombo"],
    featured: true,
  },
  {
    id: 2,
    name: "Carnes de Porco",
    description: "Porco de criação tradicional, com todo o sabor autêntico português.",
    items: ["Entremeada", "Lombinho", "Febras", "Secretos", "Costelas"],
    featured: false,
  },
  {
    id: 3,
    name: "Carnes de Borrego",
    description: "Borrego tenro e suculento, ideal para os momentos especiais em família.",
    items: ["Perna", "Costeletas", "Sela", "Paleta", "Chanfana"],
    featured: false,
  },
  {
    id: 4,
    name: "Aves & Especialidades",
    description: "Frango do campo, peru e outras aves de qualidade superior.",
    items: ["Frango Campo", "Peru", "Pato", "Codorniz", "Coelho"],
    featured: false,
  },
]

export function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
            Seleção Premium de Carnes
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p 
            className={`text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cada peça é cuidadosamente selecionada para garantir a melhor experiência 
            gastronómica na sua mesa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-card border border-border/50 p-8 lg:p-10 transition-all duration-700 hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${product.featured ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
                  Destaque
                </div>
              )}

              <div className={`${product.featured ? "md:flex md:items-center md:gap-12" : ""}`}>
                {/* Product Icon/Visual */}
                <div className={`mb-6 ${product.featured ? "md:mb-0 md:w-1/3" : ""}`}>
                  <div className={`aspect-square bg-background border border-border/30 flex items-center justify-center ${product.featured ? "max-w-[200px]" : "max-w-[120px]"}`}>
                    <div className="w-16 h-16 bg-primary/20 flex items-center justify-center">
                      <span className="font-serif text-2xl text-primary">{product.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className={product.featured ? "md:flex-1" : ""}>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Items List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-background text-sm text-white/70 border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-primary font-medium uppercase tracking-wider text-sm hover:gap-3 transition-all group/link"
                  >
                    Encomendar
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/50 mb-6">
            Não encontrou o que procura? Temos muito mais em loja.
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
