import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "A Descontão", href: "/a-descontao" },
    { name: "Manipulação", href: "/manipulacao" },
    { name: "Lojas", href: "/lojas" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/imagens/descontologo.PNG" 
                alt="Farmácia Descontão" 
                className="h-12 md:h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground font-medium hover:text-primary transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & Social */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+554130438200" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>(41) 3043-8200</span>
            </a>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
              <a 
                href="tel:+554130438200" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>(41) 3043-8200</span>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
