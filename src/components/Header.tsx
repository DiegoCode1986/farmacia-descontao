import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Header Section - Navy Blue Background */}
      <div className="bg-[#1a1a4d] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
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

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href="/"
                    className={`text-white hover:text-gray-300 transition-colors font-medium ${
                      isActive("/") ? "border-b-2 border-white pb-1" : ""
                    }`}
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#categorias"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    Categorias
                  </a>
                </li>
                <li>
                  <a
                    href="/ofertas"
                    className={`text-white hover:text-gray-300 transition-colors font-medium ${
                      isActive("/ofertas") ? "border-b-2 border-white pb-1" : ""
                    }`}
                  >
                    Promoções
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="/lojas"
                    className={`text-white hover:text-gray-300 transition-colors font-medium ${
                      isActive("/lojas") ? "border-b-2 border-white pb-1" : ""
                    }`}
                  >
                    Nossas Lojas
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Side - Contact Info */}
            <div className="hidden lg:flex items-center gap-2 text-white">
              <div className="text-right">
                <p className="text-sm font-medium">Plantão 24h</p>
                <p className="text-lg font-bold">(11) 9999-8888</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a1a4d] border-t border-white/20">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#categorias"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </a>
              </li>
              <li>
                <a
                  href="/ofertas"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/lojas"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
            
            {/* Mobile: Contact Info */}
            <div className="mt-4 pt-4 border-t border-white/20 text-center text-white">
              <p className="text-sm font-medium">Plantão 24h</p>
              <p className="text-lg font-bold">(11) 9999-8888</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
