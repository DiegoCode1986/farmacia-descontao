import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Vitamina C 1000mg", oldPrice: 48.0, price: 35.9, discount: 25, image: "imagens/vitamina_c.png" },
  { name: "Ômega 3", oldPrice: 58.0, price: 42.5, discount: 27, image: "imagens/omega3.png" },
  { name: "Multivitamínico", oldPrice: 52.0, price: 38.9, discount: 25, image: "imagens/multivitaminico.png" },
  { name: "Colágeno Hidrolisado", oldPrice: 75.0, price: 55.0, discount: 27, image: "imagens/colageno.png" },
  { name: "Vitamina D3", oldPrice: 38.0, price: 28.9, discount: 24, image: "imagens/Vitamina-D3.png" },
  { name: "Magnésio Dimalato", oldPrice: 45.0, price: 32.5, discount: 28, image: "imagens/dimalato.png" },
];

export const ProductCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("carousel-suplementos");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl md:text-2xl font-bold text-gray-800">
          PRODUTOS PERSONALIZADOS PARA VOCÊ!
        </h4>
      </div>
      
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-colors shadow-lg"
          aria-label="Previous"
        >
          <ChevronLeft className="text-lg md:text-xl" />
        </button>
        
        <div
          id="carousel-suplementos"
          className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10 md:px-12"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 md:w-64 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-destructive text-white px-2 py-1 rounded text-xs md:text-sm font-bold z-10">
                  -{product.discount}%
                </div>
                <img
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-contain bg-white p-3 md:p-4"
                  src={product.image}
                />
              </div>
              <div className="p-3 md:p-4">
                <h5 className="text-xs md:text-sm text-gray-800 mb-2 h-8 md:h-10 line-clamp-2">
                  {product.name}
                </h5>
                <p className="text-xs text-gray-400 line-through">R$ {product.oldPrice.toFixed(2)}</p>
                <p className="text-lg md:text-xl font-bold mb-3 text-primary">
                  R$ {product.price.toFixed(2)}
                </p>
                <button className="w-full bg-destructive text-white py-2 rounded font-semibold hover:bg-destructive/90 transition-colors whitespace-nowrap text-sm md:text-base">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-colors shadow-lg"
          aria-label="Next"
        >
          <ChevronRight className="text-lg md:text-xl" />
        </button>
      </div>
      
      <div className="mt-6 md:mt-8 text-center">
        <h5 className="text-lg md:text-xl font-bold text-destructive mb-4">MAIS VENDIDOS!</h5>
      </div>
    </div>
  );
};
