import { Facebook, Instagram, MapPin, Menu, Clock, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "A Descontão", href: "/A Descontão" },
    { name: "Manipulação", href: "/manipulacao" },
    { name: "Lojas", href: "/lojas" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between text-white text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Segunda a Sexta: 8h às 22h | Sábado: 9h às 21h | Domingo: 9h às 20h</span>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-2 md:mt-0">
              <a href="tel:+554130438200" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" />
                <span>(41) 3043-8200</span>
              </a>
              <div className="hidden md:flex items-center gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/public/imagens/descontologo.PNG" 
                  alt="Farmácia Descontão" 
                  className="h-16"
                />
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Store Locator */}
            <div className="hidden md:flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg p-3 cursor-pointer">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Encontre a</p>
                <p className="font-bold text-primary">Farmácia mais próxima</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-full py-3 flex items-center justify-center gap-2 text-white font-medium"
          >
            <Menu className="h-5 w-5" />
            MENU
          </button>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center`}
          >
            {navItems.map((item, index) => (
              <li key={index} className="w-full md:w-auto">
                <a
                  href={item.href}
                  className={`block px-6 py-3 text-white font-medium hover:bg-primary-dark transition-colors ${
                    index === 0 ? "bg-primary-dark" : ""
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
