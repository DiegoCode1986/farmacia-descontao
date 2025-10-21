export const BenefitsBar = () => {
  const benefits = [
    {
      icon: "/imagens/envio-gratis.png",
      title: "Frete Grátis",
      subtitle: "acima de R$199",
      color: "text-blue-600"
    },
    {
      icon: "/imagens/bicicleta-de-entrega.png",
      title: "Entrega em",
      subtitle: "até 2 horas",
      color: "text-blue-600"
    },
    {
      icon: "/imagens/relogio.png",
      title: "Clique e Retire",
      subtitle: "em até 30 minutos",
      color: "text-blue-600"
    },
    {
      icon: "/imagens/cartao-de-credito.png",
      title: "Parcele em",
      subtitle: "até 5 vezes",
      color: "text-blue-600"
    },
    {
      icon: "/imagens/pague-pix.png",
      title: "Pague",
      subtitle: "com Pix",
      color: "text-blue-600"
    },
    {
      icon: "/imagens/baixe-app.png",
      title: "Baixe o App e",
      subtitle: "ganhe descontos",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="bg-gray-50 py-6 md:py-8 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  onError={(e) => {
                    // Fallback para ícone padrão se a imagem não carregar
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%234299e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs md:text-sm font-semibold ${benefit.color} leading-tight`}>
                  {benefit.title}
                </p>
                <p className={`text-xs md:text-sm font-semibold ${benefit.color} leading-tight`}>
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
