import { Pill, Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Qualidade garantida em manipulação de Medicamentos",
  },
  {
    icon: Heart,
    title: "Fazemos Manipulação de Medicamentos para os seus Pets",
  },
  {
    icon: Sparkles,
    title: "As Melhores marcas em Dermocosméticos e Medicamentos",
  },
  {
    icon: Award,
    title: "Vários benefícios em ser conveniado com a Descontão",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-silver-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-6 bg-card rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-secondary font-semibold leading-tight max-w-xs">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
