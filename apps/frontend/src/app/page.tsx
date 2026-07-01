import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureBento />
      </main>
      <Footer />
    </>
  );
}
