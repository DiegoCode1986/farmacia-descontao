import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Farmácias</span>{" "}
              <span className="text-secondary">Descontão</span>
            </h3>
            <p className="text-background/80 mb-4">
              Sua saúde e bem-estar são nossa prioridade. Encontre os melhores
              produtos e serviços farmacêuticos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  A Descontão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Lojas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Farmácia Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Manipulação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Dermocosméticos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Convênios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">(41) 3043-8200</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  contato@farmaciasdescontao.com.br
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Encontre a unidade mais próxima
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Farmácias Descontão. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
