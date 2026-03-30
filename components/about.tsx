"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Clock, Heart, Users } from "lucide-react"

const stats = [
  { icon: Clock, value: "Experiência", label: "Anos de Tradição" },
  { icon: Users, value: "Comunidade", label: "Clientes Fiéis" },
  { icon: Award, value: "Qualidade", label: "Carnes Selecionadas" },
  { icon: Heart, value: "Paixão", label: "Em Cada Corte" },
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span 
            className={`inline-block text-primary text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Quem Somos
          </span>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Uma História de Paixão<br />pela Arte da Carne
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] bg-background rounded-none overflow-hidden relative border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/logo.jpeg"
                  alt="Talho do André - Corte com Alma"
                  width={300}
                  height={300}
                  className="w-full max-w-[280px] object-contain opacity-80"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground px-6 py-4 shadow-xl shadow-primary/20">
              <p className="font-serif text-2xl md:text-3xl font-medium">Charneca</p>
              <p className="text-sm uppercase tracking-wider opacity-80">da Caparica</p>
            </div>
          </div>

          {/* Text Side */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p className="text-lg">
                O <strong className="text-primary">Talho do André</strong> nasceu do sonho de 
                oferecer à comunidade da Charneca da Caparica carnes de qualidade excepcional, 
                selecionadas com o rigor e a dedicação que só uma paixão genuína pode garantir.
              </p>
              <p>
                Mantemos viva a tradição de escolher apenas as melhores peças, trabalhar cada 
                corte com mestria e servir cada cliente como se fosse parte da nossa família.
              </p>
              <p>
                <em className="text-white">Honestidade, qualidade e um compromisso inabalável 
                com a satisfação de quem nos visita</em> - estes são os valores que nos guiam todos os dias.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Qualidade Premium</h4>
                  <p className="text-sm text-white/60">Carnes selecionadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Corte com Alma</h4>
                  <p className="text-sm text-white/60">Serviço personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-serif text-xl md:text-2xl text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
