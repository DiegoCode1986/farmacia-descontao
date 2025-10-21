import { Pill, Heart, Droplet, Beaker, Baby, Leaf } from "lucide-react";

const categories = [
  { icon: Pill, name: "Medicamentos" },
  { icon: Heart, name: "Cosméticos" },
  { icon: Droplet, name: "Higiene" },
  { icon: Beaker, name: "Suplementos", highlighted: true },
  { icon: Baby, name: "Infantil" },
  { icon: Leaf, name: "Dermocosméticos" },
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossas Categorias</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre tudo o que você precisa para cuidar da sua saúde e bem-estar
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-2 ${
                  category.highlighted
                    ? "border-primary bg-secondary/5"
                    : "border-transparent hover:border-secondary/20"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon className="text-2xl text-primary" size={28} />
                  </div>
                  <h4 className="font-semibold text-gray-800">{category.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
