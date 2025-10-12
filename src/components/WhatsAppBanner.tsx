import { MessageCircle } from "lucide-react";

export const WhatsAppBanner = () => {
  return (
    <section className="py-8 bg-card">
      <div className="container mx-auto px-4">
        <a
          href="https://api.whatsapp.com/send?phone=554130438200"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary to-pharmacy-green-light p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="bg-card/20 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-16 w-16 md:h-20 md:w-20 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
                  Faça seu pedido pelo WhatsApp!
                </h2>
                <p className="text-lg md:text-xl text-secondary-foreground/90">
                  Atendimento rápido e personalizado para você
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-card/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </a>
      </div>
    </section>
  );
};
