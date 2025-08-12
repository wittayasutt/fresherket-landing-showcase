import { 
  Apple, 
  Fish, 
  Beef, 
  Milk, 
  Wheat, 
  Coffee,
  ChefHat,
  Salad
} from "lucide-react";

const categories = [
  { name: "ผักและผลไม้", icon: Apple, color: "text-fresh" },
  { name: "เนื้อสด", icon: Beef, color: "text-red-500" },
  { name: "ปลาและอาหารทะเล", icon: Fish, color: "text-fresh-blue" },
  { name: "ไข่", icon: Salad, color: "text-fresh-yellow" },
  { name: "นม เนย ชีส และเครื่องดื่มเย็น", icon: Milk, color: "text-blue-500" },
  { name: "อาหารแห้ง", icon: Wheat, color: "text-warm" },
  { name: "อาหารแปรรูป", icon: ChefHat, color: "text-purple-500" },
  { name: "อาหารสำเร็จรูป", icon: Coffee, color: "text-brown-500" }
];

const CategoryNav = () => {
  return (
    <section className="py-6 bg-fresh-light/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto gap-6 pb-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[120px] cursor-pointer group transition-all duration-300 hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-background shadow-card flex items-center justify-center group-hover:shadow-fresh transition-all duration-300">
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <span className="text-sm text-center font-medium text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;