import { Facebook, Instagram, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "A Descontão", href: "#about" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Lojas / Unidades", href: "/lojas" },
    { name: "Contato", href: "#contact" },
    { name: "Trabalhe Conosco", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-primary-foreground text-sm text-center md:text-right">
              Área restrita para colaboradores{" "}
              <a
                href="#"
                className="font-semibold underline hover:opacity-80 transition-opacity"
              >
                Acessar
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2">
                <div className="text-3xl font-bold">
                  <span className="text-primary">Farmácias</span>{" "}
                  <span className="text-secondary">Descontão</span>
                </div>
              </a>
            </div>

            {/* Store Locator */}
            <div className="hidden lg:flex items-center gap-3 text-left">
              <MapPin className="h-12 w-12 text-secondary flex-shrink-0" />
              <div>
                <p className="text-primary font-normal text-lg leading-tight">
                  Encontre a Descontão
                </p>
                <p className="text-primary font-bold text-lg leading-tight">
                  mais próxima de você
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b-2 border-silver-light">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-full py-4 flex items-center justify-center gap-2 text-primary font-bold"
          >
            <Menu className="h-5 w-5" />
            MENU DE NAVEGAÇÃO
          </button>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-1`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block px-6 py-4 font-semibold transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground ${
                    index === 0
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
