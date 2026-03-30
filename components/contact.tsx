"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Morada",
    lines: ["Rua Principal, 123", "2820-000 Charneca da Caparica"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["+351 212 345 678", "+351 912 345 678"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg - Sex: 8h00 - 19h00", "Sábado: 8h00 - 13h00"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@talhodacharneca.pt"],
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formState)
    alert("Mensagem enviada com sucesso! Entraremos em contacto em breve.")
    setFormState({ name: "", phone: "", message: "" })
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-primary text-sm uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contacte-nos
          </span>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Estamos à Sua Espera
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Visite-nos na Charneca da Caparica ou entre em contacto para fazer a sua encomenda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="flex gap-4"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                    {info.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video bg-muted rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-serif text-xl text-foreground">Charneca da Caparica</p>
                  <p className="text-muted-foreground text-sm mt-1">Almada, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-card p-8 lg:p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Envie-nos uma Mensagem
              </h3>
              <p className="text-muted-foreground mb-8">
                Responderemos o mais brevemente possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors min-h-[44px]"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors min-h-[44px]"
                    placeholder="+351 912 345 678"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="A sua mensagem ou pedido de encomenda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-lg min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
