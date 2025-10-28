import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recycle, Leaf, Droplets } from "lucide-react";

type ImpactData = {
  icon: React.ElementType;
  value: string;
  title: string;
  description: string;
};

const impactData: ImpactData[] = [
  {
    icon: Recycle,
    value: "1,234 kg",
    title: "Plastic Saved",
    description: "Total plastic diverted from the environment",
  },
  {
    icon: Leaf,
    value: "3,085 kg",
    title: "CO₂ Reduced",
    description: "Estimated carbon footprint reduction",
  },
  {
    icon: Droplets,
    value: "2.4M liters",
    title: "Water Conserved",
    description: "Equivalent water saved from production",
  },
];

export function GlobalImpact() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Global Impact</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {impactData.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{item.value}</div>
              <p className="text-xs text-muted-foreground pt-1">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
