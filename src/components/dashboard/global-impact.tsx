import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Recycle, Leaf, Droplets, Users } from "lucide-react";

type ImpactData = {
  icon: React.ElementType;
  value: string;
  title: string;
  bgColor: string;
  textColor: string;
};

const impactData: ImpactData[] = [
  {
    icon: Recycle,
    value: "4,740 kg",
    title: "Plastic Saved",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    icon: Leaf,
    value: "1,835 kg",
    title: "CO₂ Reduced",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    icon: Droplets,
    value: "38,000 L",
    title: "Water Saved",
    bgColor: "bg-sky-100",
    textColor: "text-sky-800",
  },
  {
    icon: Users,
    value: "6,010",
    title: "Joined the Movement",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
];

export function GlobalImpact() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Our Global Impacts</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {impactData.map((item) => (
          <Card key={item.title} className={`rounded-2xl ${item.bgColor}`}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-background/50 rounded-full">
                <item.icon className={`h-6 w-6 ${item.textColor}`} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${item.textColor}`}>{item.value}</div>
                <p className={`text-sm font-medium ${item.textColor}/80`}>
                  {item.title}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
