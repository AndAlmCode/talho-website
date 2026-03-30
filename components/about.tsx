"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Clock, Heart, Users } from "lucide-react"

const stats = [
  { icon: Clock, value: "40+", label: "Anos de Experiência" },
  { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "100%", label: "Qualidade Garantida" },
  { icon: Heart, value: "3", label: "Gerações" },
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
      className="py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span 
            className={`inline-block text-primary text-sm uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Quem Somos
          </span>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Uma História de Paixão<br />pela Arte da Carne
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary">TC</span>
                  </div>
                  <p className="font-serif text-xl text-foreground/60 italic">
                    Qualidade desde 1985
                  </p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground px-6 py-4 shadow-xl">
              <p className="font-serif text-3xl md:text-4xl font-bold">40+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Anos</p>
            </div>
          </div>

          {/* Text Side */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                O <strong className="text-foreground">Talho da Charneca</strong> nasceu do sonho de 
                oferecer à comunidade da Charneca da Caparica carnes de qualidade excepcional, 
                selecionadas com o rigor e a dedicação que só uma família apaixonada pode garantir.
              </p>
              <p>
                Ao longo de mais de quatro décadas, mantemos viva a tradição de escolher 
                apenas as melhores peças, trabalhar cada corte com mestria e servir cada 
                cliente como se fosse parte da nossa família.
              </p>
              <p>
                Hoje, continuamos fiéis aos mesmos valores que nos guiaram desde o início: 
                <em className="text-foreground"> honestidade, qualidade e um compromisso inabalável 
                com a satisfação de quem nos visita.</em>
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Qualidade Premium</h4>
                  <p className="text-sm text-muted-foreground">Carnes selecionadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Atendimento Familiar</h4>
                  <p className="text-sm text-muted-foreground">Serviço personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border transition-all duration-1000 delay-600 ${
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
              <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
