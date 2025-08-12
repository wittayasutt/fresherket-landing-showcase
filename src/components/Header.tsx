import { Search, ShoppingCart, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>หน้าแรก</span>
            <span>สั่งซื้อทำได้</span>
            <span>เกี่ยวกับเรา</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>ไทย | Eng</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Fresherket" className="w-10 h-10" />
            <div className="text-2xl font-bold">
              <span className="text-primary">fresher</span>
              <span className="text-secondary">ket</span>
              <div className="text-xs text-muted-foreground font-normal">ใหม่กว่าเดิม</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="ค้นหาสินค้าที่คุณต้องการ, อาหารสด..."
                className="pl-10 pr-4 py-3 rounded-full border-2 border-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>เข้าสู่ระบบ</span>
            </Button>
            <Button className="gradient-fresh text-white px-6 py-2 rounded-full shadow-fresh transition-bounce hover:scale-105">
              สมัครสมาชิก
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;