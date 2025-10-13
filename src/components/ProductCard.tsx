import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  installments?: string;
}

export const ProductCard = ({
  name,
  image,
  price,
  oldPrice,
  discount,
  installments,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 bg-card">
      <CardContent className="p-4">
        {discount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold shadow-md">
              {discount}
            </span>
          </div>
        )}

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 z-10 transition-all hover:scale-110"
          aria-label="Adicionar aos favoritos"
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite
                ? "fill-primary text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
            strokeWidth={2}
          />
        </button>

        <div className="aspect-square relative mb-4 flex items-center justify-center mt-2">
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-sm font-normal text-foreground/80 mb-3 line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        <div className="space-y-1">
          {oldPrice && (
            <p className="text-xs text-muted-foreground line-through">
              R$ {oldPrice.toFixed(2).replace('.', ',')}
            </p>
          )}
          <p className="text-3xl font-bold text-[hsl(var(--accent))]">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
          {installments && (
            <p className="text-xs text-muted-foreground pt-1">{installments}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
