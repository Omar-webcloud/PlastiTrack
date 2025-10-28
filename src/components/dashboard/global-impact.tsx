import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RecycleIcon, GlobeIcon, WaterDropIcon, UsersIconV2 } from "../icons";

type ImpactData = {
  icon: React.ElementType;
  value: string;
  title: string;
  bgColor: string;
  textColor: string;
};

const impactData: ImpactData[] = [
  {
    icon: RecycleIcon,
    value: "4,740 kg",
    title: "Plastic Saved",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: GlobeIcon,
    value: "1,835 kg",
    title: "CO₂ Reduced",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: WaterDropIcon,
    value: "36,000 L",
    title: "Water Saved",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: UsersIconV2,
    value: "6,010",
    title: "Joined the Movement",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
];

export function GlobalImpact() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-foreground/80">Our Global Impacts</h2>
      <div className="grid grid-cols-2 gap-4">
        {impactData.map((item) => (
          <Card key={item.title} className={`rounded-2xl ${item.bgColor} shadow-md`}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <item.icon className={`h-8 w-8 ${item.textColor}`} />
              <div>
                <div className={`text-xl font-bold ${item.textColor}`}>{item.value}</div>
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
