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
import { BehaviorTracker } from "@/components/interactive/BehaviorTracker";
import { ScrollReveal } from "@/components/interactive/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal><FeatureBento /></ScrollReveal>
        <ScrollReveal><CameraStory /></ScrollReveal>
        <ScrollReveal><PerformanceSection /></ScrollReveal>
        <ScrollReveal><DesignShowcase /></ScrollReveal>
        <ScrollReveal><Specifications /></ScrollReveal>
        <ScrollReveal><NewsletterSection /></ScrollReveal>
        <ScrollReveal><FinalCta /></ScrollReveal>
      </main>
      <Footer />
      <BehaviorTracker />
    </>
  );
}
