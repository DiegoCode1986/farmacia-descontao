import promoPopular from "@/assets/promo-popular.jpg";
import promoBaby from "@/assets/promo-baby.jpg";
import promoContraceptives from "@/assets/promo-contraceptives.jpg";
import promoGeriatric from "@/assets/promo-geriatric.jpg";

const promos = [
  {
    image: "/imagens/promo1.PNG",
    alt: "Aqui tem Farmácia Popular",
    link: "#",
  },
  {
    image: promoBaby,
    alt: "Feirão do Bebê",
    link: "#",
  },
  {
    image: promoContraceptives,
    alt: "Anticoncepcionais",
    link: "#",
  },
  {
    image: promoGeriatric,
    alt: "Produtos Geriátricos",
  },
];

export const PromotionalGrid = () => {
  return (
    <section className="py-6 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promos.map((promo, index) => (
            <a
              key={index}
              href={promo.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
            >
              <img
                src={promo.image}
                alt={promo.alt}
                className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
