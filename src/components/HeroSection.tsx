import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-8">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          {/* Hero banner */}
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src={heroBanner} 
              alt="Fresh groceries and seafood" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
              <div className="h-full flex items-center">
                <div className="text-white p-8 md:p-12 max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    ปลาแซลมอน
                    <br />
                    <span className="text-fresh-yellow">นำเข้าจากประเทศนอร์เวย์</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-white/90">
                    ราคาพิเศษ ลดไม่หยุดสุดปีใหม่!
                  </p>
                  
                  <div className="bg-warm/90 backdrop-blur-sm rounded-lg p-4 inline-block mb-6">
                    <div className="text-white text-center">
                      <div className="text-sm">ราคาปัจจุบันปลาแซลมอนนอเดตเดรับมาการผ์ฝ์ลุมวิว์</div>
                      <div className="text-3xl font-bold">฿1,730/กก</div>
                      <div className="text-sm">ระบบมีท่องนิสิกร - วันรับราคาพิเศษมีเดือนต่ำสำสพ่ม</div>
                      <div className="text-xs">ได้ต้องขาง</div>
                    </div>
                  </div>

                  <Button className="gradient-warm text-white px-8 py-3 text-lg rounded-full shadow-warm transition-bounce hover:scale-105">
                    สั่งซื้อตอนนี้
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;