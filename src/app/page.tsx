import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import PressShowcase from "@/components/PressShowcase";
import AfricanPresence from "@/components/AfricanPresence";
import Industries from "@/components/Industries";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PressShowcase />
      <Services />
      <Technologies />
      <AfricanPresence />
      <Industries />
      <About />
    </div>
  );
}
