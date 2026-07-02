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
import { ChatWidget } from "@/components/interactive/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-clip">
        <HeroSection />
        <ScrollReveal direction="up"><FeatureBento /></ScrollReveal>
        <ScrollReveal direction="left"><CameraStory /></ScrollReveal>
        <ScrollReveal direction="up"><PerformanceSection /></ScrollReveal>
        <ScrollReveal direction="right"><DesignShowcase /></ScrollReveal>
        <ScrollReveal direction="left"><Specifications /></ScrollReveal>
        <ScrollReveal direction="up"><NewsletterSection /></ScrollReveal>
        <ScrollReveal direction="up"><FinalCta /></ScrollReveal>
      </main>
      <Footer />
      <BehaviorTracker />
      <ChatWidget />
    </>
  );
}
