"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, ArrowUp } from "lucide-react"

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border/30">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpeg"
                alt="Talho do André"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="font-serif text-xl font-medium text-white">
                  Talho do André
                </p>
                <p className="text-primary text-sm tracking-wider">Corte com Alma</p>
              </div>
            </Link>
            <p className="text-white/60 max-w-md leading-relaxed mb-6">
              A servir a comunidade da Charneca da Caparica com carnes 
              de qualidade premium e um atendimento que honra a tradição.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contacto</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <p>Charneca da Caparica</p>
                <p>Almada, Portugal</p>
              </li>
              <li>
                <a href="tel:+351912345678" className="hover:text-primary transition-colors">
                  +351 912 345 678
                </a>
              </li>
              <li>
                <a href="mailto:info@talhodoandrе.pt" className="hover:text-primary transition-colors">
                  info@talhodoandrе.pt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              {new Date().getFullYear()} Talho do André. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm min-h-[44px]"
              aria-label="Voltar ao topo"
            >
              Voltar ao Topo
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
