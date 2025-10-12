import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Principais tipos de protetores solares",
    excerpt:
      "Existem diversos tipos de protetores solares no mercado, cada um com características específicas para diferentes tipos de pele e necessidades de proteção...",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Dicas de Repelente para Proteger Sua Família",
    excerpt:
      "A primavera é uma estação alegre e vibrante, marcada pelo desabrochar das flores. No entanto, também surgem os mosquitos e outros insetos...",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Combate ao Mosquito: Proteja Sua Família",
    excerpt:
      "A primavera é uma estação marcada por temperaturas mais altas e maior umidade, que criam condições ideais para a reprodução dos mosquitos...",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop",
    link: "#",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-16 bg-silver-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-secondary">Blog</span>{" "}
            <span className="text-primary">+ Saúde Descontão</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="hero" className="w-full group/btn" asChild>
                  <a href={post.link}>
                    Leia mais
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
