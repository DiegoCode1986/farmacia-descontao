import { Heart, Pill, Truck, Phone } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Aferição de Pressão",
    description: "Serviço gratuito de medição de pressão arterial",
  },
  {
    icon: Pill,
    title: "Manipulação",
    description: "Medicamentos manipulados com qualidade e precisão",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Entrega rápida em toda a região",
  },
  {
    icon: Phone,
    title: "Atendimento 24h",
    description: "Plantão farmacêutico para emergências",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Além de medicamentos, oferecemos serviços especializados para cuidar da sua saúde
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-primary" size={28} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
