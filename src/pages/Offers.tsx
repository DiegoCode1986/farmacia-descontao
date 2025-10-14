import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryBanner } from "@/components/CategoryBanner";
import { ProductSection } from "@/components/ProductSection";

export default function Offers() {
  // Dados de exemplo - em produção viriam de uma API
  const featuredCategories = [
    {
      title: "Dermocosméticos",
      subtitle: "Até 40% OFF",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      discount: "-40%",
    },
    {
      title: "Vitaminas",
      subtitle: "Promoção Especial",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
      discount: "-30%",
    },
    {
      title: "Cuidados Pessoais",
      subtitle: "Ofertas Imperdíveis",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
      discount: "-25%",
    },
    {
      title: "Medicamentos",
      subtitle: "Descontos Exclusivos",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
      discount: "-20%",
    },
  ];

  const productsDestaque = [
    {
      id: "1",
      name: "Protetor Solar FPS 50+ Facial 50ml",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      price: 45.90,
      oldPrice: 67.90,
      discount: "-32%",
      installments: "3x de R$ 15,30 sem juros",
    },
    {
      id: "2",
      name: "Vitamina C 1000mg - 60 Cápsulas",
      image: "https://images.unsplash.com/photo-1550572017-4a6c703a5915?w=300&h=300&fit=crop",
      price: 32.90,
      oldPrice: 49.90,
      discount: "-34%",
      installments: "2x de R$ 16,45 sem juros",
    },
    {
      id: "3",
      name: "Shampoo Antiqueda 400ml",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=300&fit=crop",
      price: 28.90,
      oldPrice: 42.90,
      discount: "-33%",
      installments: "2x de R$ 14,45 sem juros",
    },
    {
      id: "4",
      name: "Colágeno Hidrolisado 250g",
      image: "https://images.unsplash.com/photo-1556228852-80a5086d0d8e?w=300&h=300&fit=crop",
      price: 54.90,
      oldPrice: 89.90,
      discount: "-39%",
      installments: "3x de R$ 18,30 sem juros",
    },
    {
      id: "5",
      name: "Creme Hidratante Facial 50g",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      price: 67.90,
      oldPrice: 98.90,
      discount: "-31%",
      installments: "4x de R$ 16,98 sem juros",
    },
  ];

  const productsMaisVendidos = [
    {
      id: "6",
      name: "Dipirona Sódica 500mg - 10 Comprimidos",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
      price: 5.90,
    },
    {
      id: "7",
      name: "Paracetamol 750mg - 20 Comprimidos",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
      price: 8.90,
    },
    {
      id: "8",
      name: "Lenço Umedecido Bebê 100un",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=300&h=300&fit=crop",
      price: 12.90,
      oldPrice: 18.90,
      discount: "-32%",
    },
    {
      id: "9",
      name: "Fralda Descartável M - 30 Unidades",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop",
      price: 34.90,
      oldPrice: 45.90,
      discount: "-24%",
    },
    {
      id: "10",
      name: "Termômetro Digital",
      image: "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=300&h=300&fit=crop",
      price: 19.90,
      oldPrice: 29.90,
      discount: "-33%",
    },
  ];

  const productsDermocosmeticos = [
    {
      id: "11",
      name: "Sérum Vitamina C 30ml",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      price: 89.90,
      oldPrice: 129.90,
      discount: "-31%",
      installments: "5x de R$ 17,98 sem juros",
    },
    {
      id: "12",
      name: "Água Micelar 400ml",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      price: 42.90,
      oldPrice: 59.90,
      discount: "-28%",
      installments: "2x de R$ 21,45 sem juros",
    },
    {
      id: "13",
      name: "Creme Anti-idade Noturno 50g",
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=300&h=300&fit=crop",
      price: 124.90,
      oldPrice: 189.90,
      discount: "-34%",
      installments: "6x de R$ 20,82 sem juros",
    },
    {
      id: "14",
      name: "Máscara Facial Detox",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=300&fit=crop",
      price: 38.90,
      oldPrice: 54.90,
      discount: "-29%",
      installments: "2x de R$ 19,45 sem juros",
    },
    {
      id: "15",
      name: "Gel de Limpeza Facial 150ml",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      price: 34.90,
      oldPrice: 49.90,
      discount: "-30%",
      installments: "2x de R$ 17,45 sem juros",
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
              Ofertas Imperdíveis
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Confira os melhores preços em medicamentos, dermocosméticos e muito mais!
            </p>
          </div>
        </section>

        {/* Category Banners */}
        <section className="bg-card py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCategories.map((category, index) => (
                <CategoryBanner key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Products in Highlight */}
        <ProductSection
          title="Produtos em Destaque"
          products={productsDestaque}
          bgColor="bg-background"
          bannerImage="https://images.unsplash.com/photo-1556228852-80a5086d0d8e?w=1200&h=300&fit=crop"
        />

        {/* Best Sellers */}
        <ProductSection
          title="Mais Vendidos"
          products={productsMaisVendidos}
          bgColor="bg-muted/30"
          bannerImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=300&fit=crop"
        />

        {/* Dermocosmetics */}
        <ProductSection
          title="Dermocosméticos Selecionados"
          products={productsDermocosmeticos}
          bgColor="bg-background"
          bannerImage="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=300&fit=crop"
        />
      </main>

      <Footer />
    </div>
  );
}
