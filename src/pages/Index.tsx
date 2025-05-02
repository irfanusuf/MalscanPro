
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsPreview from "@/components/ToolsPreview";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ToolsPreview />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
