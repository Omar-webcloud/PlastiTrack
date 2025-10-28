import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Recycle, Droplets, Users, Globe } from "lucide-react";
import users from '@/data/users.json';


type ImpactData = {
  icon: React.ElementType;
  value: string;
  title: string;
  bgColor: string;
  textColor: string;
};

export function GlobalImpact() {
  const stats = users[0].stats;

  const impactData: ImpactData[] = [
  {
    icon: Recycle,
    value: "4.7 tons",
    title: "Plastic Saved",
    bgColor: "bg-card",
    textColor: "text-primary",
  },
  {
    icon: Globe,
    value: "1.8 tons",
    title: "CO₂ Reduced",
    bgColor: "bg-card",
    textColor: "text-primary",
  },
  {
    icon: Droplets,
    value: "36k L",
    title: "Water Saved",
    bgColor: "bg-card",
    textColor: "text-primary",
  },
    {
      icon: Users,
      value: `${stats.peopleJoined.toLocaleString()}`,
      title: "Joined",
      bgColor: "bg-card",
      textColor: "text-primary",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-foreground/80">Global Impacts</h2>
      <div className="grid grid-cols-2 gap-4">
        {impactData.map((item) => (
          <Card key={item.title} className={`${item.bgColor} rounded-2xl shadow-md`}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <item.icon className={`h-8 w-8 ${item.textColor}`} />
              <div>
                <div className={`text-xl font-bold text-foreground`}>{item.value}</div>
                <p className={`text-sm font-medium text-muted-foreground`}>
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