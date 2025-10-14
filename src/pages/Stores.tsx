import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreCard } from "@/components/StoreCard";

export default function Stores() {
  const stores = [
    {
      name: "Centro",
      address: "Rua das Flores, 1585",
      neighborhood: "Centro",
      city: "São Paulo - SP",
      phone: "(11) 3043-8200",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Paulista",
      address: "Av. Paulista, 3080",
      neighborhood: "Bela Vista",
      city: "São Paulo - SP",
      phone: "(11) 3062-4500",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Mooca",
      address: "Rua da Mooca, 2424",
      neighborhood: "Mooca",
      city: "São Paulo - SP",
      phone: "(11) 2091-3300",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Vila Mariana",
      address: "Rua Domingos de Morais, 1058",
      neighborhood: "Vila Mariana",
      city: "São Paulo - SP",
      phone: "(11) 5571-8800",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Pinheiros",
      address: "Rua dos Pinheiros, 890",
      neighborhood: "Pinheiros",
      city: "São Paulo - SP",
      phone: "(11) 3061-2200",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Santana",
      address: "Av. Cruzeiro do Sul, 1500",
      neighborhood: "Santana",
      city: "São Paulo - SP",
      phone: "(11) 2950-7700",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Tatuapé",
      address: "Rua Tuiuti, 2345",
      neighborhood: "Tatuapé",
      city: "São Paulo - SP",
      phone: "(11) 2091-5500",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
    {
      name: "Itaquera",
      address: "Av. Jacu Pêssego, 678",
      neighborhood: "Itaquera",
      city: "São Paulo - SP",
      phone: "(11) 2741-6600",
      hours: "Segunda a Sexta: 7h às 22h | Sábado: 8h às 20h | Domingo: 9h às 18h",
      image: "https://images.unsplash.com/photo-1550572017-4a6c703a5915?w=400&h=300&fit=crop",
      mapsUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Nossas Lojas
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Encontre a Farmácia Descontão mais próxima de você
            </p>
          </div>
        </section>

        {/* Store Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stores.map((store, index) => (
                <StoreCard key={index} {...store} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Não encontrou</span>{" "}
              <span className="text-secondary">sua região?</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e descubra quando teremos uma unidade perto de você!
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=554130438200" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
