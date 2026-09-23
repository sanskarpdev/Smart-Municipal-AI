import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AIDetectionSection from "./components/AIDetectionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AIDetectionSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
