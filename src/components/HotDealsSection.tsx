import { ChevronRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import oatDrink from "@/assets/oat-drink.jpg";
import milkCarton from "@/assets/milk-carton.jpg";
import pepsiPack from "@/assets/pepsi-pack.jpg";
import energyDrink from "@/assets/energy-drink.jpg";
import instantNoodle from "@/assets/instant-noodle.jpg";
import coffeePack from "@/assets/coffee-pack.jpg";

const hotDeals = [
  {
    id: 1,
    name: "นมวัล์วีอินสแกนดีนิเวียแมสด์",
    originalPrice: "₿569",
    salePrice: "₿336",
    discount: "SAVE ฿233",
    unit: "6 x 1 ลิตร/ลัง",
    image: oatDrink
  },
  {
    id: 2,
    name: "นมวัล์วีอินสแกนดีนิเวียแมสด์",
    originalPrice: "₿569",
    salePrice: "₿474",
    discount: "SAVE ฿95",
    unit: "6 x 1 ลิตร/ลัง",
    image: milkCarton
  },
  {
    id: 3,
    name: "น้ำตาลแมวากลาง พลาสติกแข็ง",
    originalPrice: "₿529",
    salePrice: "₿469",
    discount: "SAVE ฿60",
    unit: "12 x 600 มล/กล่อง",
    image: instantNoodle
  },
  {
    id: 4,
    name: "ห่อเคราชัครไลไซ์วาช์ออน",
    originalPrice: "₿2,570",
    salePrice: "₿2,568",
    discount: "SAVE ฿2",
    unit: "8 x 3 มก/ลัง",
    image: milkCarton
  },
  {
    id: 5,
    name: "น้ำอัดลม เปปทีโค่ การจำ",
    originalPrice: "₿339",
    salePrice: "₿325",
    discount: "SAVE ฿14",
    unit: "24 x 325 มล พืทการ",
    image: pepsiPack
  },
  {
    id: 6,
    name: "น้ำพลัง วอร์นิคเดไลไฟน์มารเทท์",
    originalPrice: "₿339",
    salePrice: "₿318",
    discount: "SAVE ฿21",
    unit: "4x6x325 มล ยาห์ขึ้ม",
    image: energyDrink
  }
];

const HotDealsSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center shadow-warm">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Hot Deal!</h2>
          </div>
          <Button variant="outline" className="flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            ดูร้านดอก
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hotDeals.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs">
                    {product.discount}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {product.unit}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <div className="text-lg font-bold text-primary">
                    {product.salePrice}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;