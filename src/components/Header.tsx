import { Facebook, Instagram, Menu, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "A Descontão", href: "/a-descontao" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Lojas / Unidades", href: "/lojas" },
    { name: "Contato", href: "/contato" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Red Bar */}
      <div className="bg-[hsl(var(--pharmacy-red))] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/oficialfarmaciasdescontao/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/oficialfarmaciasdescontao/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Employee Area Link */}
            <div className="hidden md:block">
              <p className="text-white text-sm">
                Área restrita para colaboradores{" "}
                <a 
                  href="http://colaboradores.farmaciasdescontao.com.br/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded transition-colors text-white font-medium"
                >
                  Acessar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white border-b-2 border-[hsl(var(--silver-light))]">
        <div className="container mx-auto px-4">
          {/* Logo, WhatsApp Banner, Store Finder */}
          <div className="flex items-center justify-between py-6 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/imagens/descontologo.PNG" 
                  alt="Farmácia Descontão" 
                  className="h-14 md:h-16 w-auto"
                />
              </a>
            </div>

            {/* WhatsApp Banner - Center */}
            <div className="hidden md:flex flex-1 justify-center max-w-md">
              <a 
                href="https://api.whatsapp.com/send?1=pt_BR&phone=554130438200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="/imagens/Banner-produtos.jpg" 
                  alt="Peça pelo WhatsApp" 
                  className="h-16 md:h-20 w-auto"
                />
              </a>
            </div>

            {/* Find Store - Right */}
            <div className="hidden lg:flex items-start gap-2">
              <MapPin className="h-12 w-12 text-[hsl(var(--pharmacy-green))] flex-shrink-0" />
              <div>
                <a 
                  href="/lojas" 
                  className="text-[hsl(var(--pharmacy-red))] hover:underline"
                >
                  <p className="text-lg leading-tight">
                    Encontre a Descontão
                  </p>
                  <p className="text-lg font-bold leading-tight">
                    mais próxima de você
                  </p>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[hsl(var(--pharmacy-red))] hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:block border-t-2 border-[hsl(var(--silver-light))] py-2">
            <ul className="flex items-center justify-center gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`
                      px-6 py-3 font-medium transition-colors rounded
                      ${isActive(item.href) 
                        ? 'bg-[hsl(var(--pharmacy-green))] text-white border-2 border-[hsl(var(--pharmacy-green))]' 
                        : 'text-foreground hover:text-[hsl(var(--pharmacy-red))]'
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-colors
                      ${isActive(item.href)
                        ? 'bg-[hsl(var(--pharmacy-green))] text-white'
                        : 'text-foreground hover:bg-muted'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile: Employee Area Link */}
            <div className="mt-4 pt-4 border-t border-border">
              <a 
                href="http://colaboradores.farmaciasdescontao.com.br/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 bg-[hsl(var(--pharmacy-red))] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Área de Colaboradores
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
