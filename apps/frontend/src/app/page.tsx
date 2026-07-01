import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CameraStory } from "@/components/sections/CameraStory";
import { DesignShowcase } from "@/components/sections/DesignShowcase";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { Specifications } from "@/components/sections/Specifications";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureBento />
        <CameraStory />
        <PerformanceSection />
        <DesignShowcase />
        <Specifications />
        <NewsletterSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
