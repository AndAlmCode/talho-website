"use client"

import { useEffect, useRef, useState } from "react"
import { Scissors, Package, Truck, Calendar, Phone, Clock } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Cortes Personalizados",
    description: "Cortamos as suas carnes exatamente como prefere, com a espessura e formato ideais para a sua receita.",
  },
  {
    icon: Package,
    title: "Embalagem a Vácuo",
    description: "Conserve a frescura das suas carnes por mais tempo com a nossa embalagem a vácuo profissional.",
  },
  {
    icon: Truck,
    title: "Entrega ao Domicílio",
    description: "Entregamos as suas encomendas diretamente em sua casa, na Charneca da Caparica e arredores.",
  },
  {
    icon: Calendar,
    title: "Encomendas Especiais",
    description: "Prepare festas e eventos com encomendas personalizadas. Leitão, cabrito e muito mais.",
  },
  {
    icon: Phone,
    title: "Encomenda por Telefone",
    description: "Ligue, encomende e passe a levantar. Simples, rápido e sem filas de espera.",
  },
  {
    icon: Clock,
    title: "Produtos Frescos Diários",
    description: "Recebemos produtos frescos todos os dias para garantir a máxima qualidade.",
  },
]

export function Services() {
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
      id="servicos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-primary text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Os Nossos Serviços
          </span>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Mais do que um Talho,<br />uma Experiência
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p 
            className={`text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Oferecemos um conjunto de serviços pensados para tornar a sua vida mais fácil 
            e a sua experiência connosco ainda mais especial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-background border border-border/30 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div 
          className={`mt-16 p-8 md:p-12 bg-primary transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-2">Tem alguma dúvida?</h3>
              <p className="text-primary-foreground/80">
                Estamos aqui para ajudar. Contacte-nos e teremos todo o gosto em esclarecer.
              </p>
            </div>
            <a
              href="tel:+351212345678"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-background text-white font-medium uppercase tracking-wider hover:bg-background/90 transition-all duration-300 min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
