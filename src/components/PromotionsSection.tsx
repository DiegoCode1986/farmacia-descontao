const promotions = [
  {
    title: "Vitaminas em Promoção",
    description: "Até 30% de desconto em vitaminas e suplementos selecionados",
    discount: "30%",
    validUntil: "31/12/2024",
  },
  {
    title: "Produtos de Higiene",
    description: "Leve 3 e pague 2 em produtos de higiene pessoal",
    discount: "Leve 3 Pague 2",
    validUntil: "15/01/2025",
  },
  {
    title: "Dermocosméticos",
    description: "Desconto especial em toda linha de cuidados com a pele",
    discount: "25%",
    validUntil: "20/01/2025",
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
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[hsl(var(--accent-yellow))] text-gray-800 px-3 py-1 rounded-bl-lg font-bold text-sm">
                {promo.discount}
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold mb-3">{promo.title}</h4>
                <p className="text-blue-100 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-200">Válido até {promo.validUntil}</span>
                  <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
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
