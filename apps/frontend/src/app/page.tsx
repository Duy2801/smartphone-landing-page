import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CameraStory } from "@/components/sections/CameraStory";
import { DesignShowcase } from "@/components/sections/DesignShowcase";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { HeroSection } from "@/components/sections/HeroSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";

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
      </main>
      <Footer />
    </>
  );
}
