"use client"

import Link from "next/link"
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
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">TC</span>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-background">
                  Talho da Charneca
                </p>
                <p className="text-background/60 text-sm">Desde 1985</p>
              </div>
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Mais de 40 anos a servir a comunidade da Charneca da Caparica com carnes 
              de qualidade premium e um atendimento que honra a tradição familiar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contacto</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <p>Rua Principal, 123</p>
                <p>2820-000 Charneca da Caparica</p>
              </li>
              <li>
                <a href="tel:+351212345678" className="hover:text-background transition-colors">
                  +351 212 345 678
                </a>
              </li>
              <li>
                <a href="mailto:info@talhodacharneca.pt" className="hover:text-background transition-colors">
                  info@talhodacharneca.pt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Talho da Charneca. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-background/50 hover:text-background transition-colors text-sm min-h-[44px]"
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
