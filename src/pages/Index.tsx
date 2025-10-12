import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { PromotionalGrid } from "@/components/PromotionalGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <WhatsAppBanner />
        <PromotionalGrid />
        <FeaturesSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
