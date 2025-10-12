import promoPopular from "@/assets/promo-popular.jpg";
import promoBaby from "@/assets/promo-baby.jpg";
import promoContraceptives from "@/assets/promo-contraceptives.jpg";
import promoGeriatric from "@/assets/promo-geriatric.jpg";

const promos = [
  {
    image: promoPopular,
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
    link: "#",
  },
];

export const PromotionalGrid = () => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((promo, index) => (
            <a
              key={index}
              href={promo.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={promo.image}
                alt={promo.alt}
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
