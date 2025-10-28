import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EcoHeroBadge, PlanetProtectorBadge } from "../icons";
import { Droplets, Recycle, Trophy } from "lucide-react";
import Image from "next/image";

const rewardsData = {
  points: 1800,
  badges: [
    {
      id: "plastic-saver",
      name: "Plastic Saver",
      description: "Earn 1,200 points",
      icon: Trophy,
      unlocked: true,
    },
    {
      id: "water-warrior",
      name: "Water Warrior",
      description: "Earn 2,500 points",
      icon: Droplets,
      unlocked: true,
    },
    {
      id: "eco-hero",
      name: "Eco Hero",
      description: "Earn 5,000 points",
      icon: EcoHeroBadge,
      unlocked: true,
    },
    {
      id: "planet-protector",
      name: "Planet Protector",
      description: "Earn 10,000 points",
      icon: PlanetProtectorBadge,
      unlocked: false,
    },
  ],
};

export function Rewards() {
  return (
    <div className="p-4 space-y-6">
      <div className="relative rounded-2xl p-4 overflow-hidden bg-green-100/50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552538633-0493b9e46633?w=800&q=80"
            alt="leaf pattern"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative flex justify-between items-center">
          <div>
            <p className="text-sm text-primary/80">Eco Credits</p>
            <p className="text-3xl font-bold text-primary">{rewardsData.points.toLocaleString()}</p>
          </div>
          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90">
            <Trophy className="w-4 h-4 mr-2" />
            Reward History
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Your Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          {rewardsData.badges.map((badge) => (
            <Card
              key={badge.id}
              className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all ${
                badge.unlocked ? "bg-muted" : "bg-gray-100 grayscale"
              }`}
            >
              <badge.icon
                className={`h-12 w-12 mb-2 ${
                  badge.unlocked ? "text-primary" : "text-gray-400"
                }`}
              />
              <h3 className="font-bold text-sm text-foreground/90">
                {badge.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <Button size="lg" className="w-full">Redeem Points</Button>
    </div>
  );
}
