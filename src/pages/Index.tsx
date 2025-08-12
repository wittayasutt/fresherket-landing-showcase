import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import HotDealsSection from "@/components/HotDealsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryNav />
      <HotDealsSection />
    </div>
  );
};

export default Index;
