import { useState, useEffect } from "react";

const bannerSets = [
  {
    left: "/imagens/farmacia-popular.png",
    right: "/imagens/black-friday.png",
  },
  {
    left: "/imagens/compre.png",
    right: "/imagens/oferta.png",
  },
  // Adicione mais conjuntos de banners conforme necessário
];

export const DualBannerCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % bannerSets.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const goToSet = (index: number) => {
    setCurrentSet(index);
  };

  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Banners Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Banner Esquerdo */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-48 md:h-64 lg:h-72">
                {bannerSets.map((set, index) => (
                  <img
                    key={`left-${index}`}
                    src={set.left}
                    alt={`Banner promocional ${index + 1} - esquerda`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentSet ? "opacity-100" : "opacity-0"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect fill='%23fbbf24' width='600' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23ffffff'%3EBanner Promocional%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Banner Direito */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-48 md:h-64 lg:h-72">
                {bannerSets.map((set, index) => (
                  <img
                    key={`right-${index}`}
                    src={set.right}
                    alt={`Banner promocional ${index + 1} - direita`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentSet ? "opacity-100" : "opacity-0"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect fill='%23dc2626' width='600' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23ffffff'%3EBanner Promocional%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {bannerSets.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSet(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para conjunto de banners ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
