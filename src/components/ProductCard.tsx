import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 left-4 z-10 transition-colors"
          aria-label="Adicionar aos favoritos"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite
                ? "fill-primary text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          />
        </button>

        {discount && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
              {discount}
            </span>
          </div>
        )}

        <div className="aspect-square relative mb-4 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-sm font-medium text-foreground mb-3 line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        <div className="space-y-2">
          {oldPrice && (
            <p className="text-xs text-muted-foreground line-through">
              De R$ {oldPrice.toFixed(2)}
            </p>
          )}
          <p className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </p>
          {installments && (
            <p className="text-xs text-muted-foreground">{installments}</p>
          )}
        </div>

        <Button variant="hero" className="w-full mt-4" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar
        </Button>
      </CardContent>
    </Card>
  );
};
