const promotions = [
  {
    title: "Vitaminas em Promoção",
    description: "Até 30% de desconto em vitaminas e suplementos selecionados",
    discount: "30%",
    validUntil: "31/12/2024",
    image: "/imagens/promoo.png",
  },
  {
    title: "Produtos de Higiene",
    description: "Leve 3 e pague 2 em produtos de higiene pessoal",
    discount: "Leve 3 Pague 2",
    validUntil: "15/01/2025",
    image: "/imagens/promocao1.png",
  },
  {
    title: "Dermocosméticos",
    description: "Desconto especial em toda linha de cuidados com a pele",
    discount: "25%",
    validUntil: "20/01/2025",
    image: "/imagens/promo-dermocosmeticos.png",
  },
];

export const PromotionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Promoções Especiais</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aproveite nossas ofertas exclusivas e economize na compra dos seus medicamentos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Imagem da Promoção */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3EImagem da Promoção%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  {promo.discount}
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{promo.title}</h4>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Válido até {promo.validUntil}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
