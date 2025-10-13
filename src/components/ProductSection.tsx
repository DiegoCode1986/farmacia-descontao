import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  installments?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

export const ProductSection = ({
  title,
  products,
  bgColor = "bg-background",
}: ProductSectionProps) => {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-primary">{title.split(" ")[0]}</span>{" "}
          <span className="text-secondary">{title.split(" ").slice(1).join(" ")}</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
