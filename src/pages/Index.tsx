import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsBar } from "@/components/BenefitsBar";
import { DualBannerCarousel } from "@/components/DualBannerCarousel";
import { CategorySection } from "@/components/CategorySection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { PromotionsSection } from "@/components/PromotionsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsBar />
        <DualBannerCarousel />
        <div id="categorias">
          <CategorySection />
        </div>
        <div className="container mx-auto px-4 py-8">
          <ProductCarousel />
        </div>
        <PromotionsSection />
        <div id="servicos">
          <ServicesSection />
        </div>
        <div id="contato">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
