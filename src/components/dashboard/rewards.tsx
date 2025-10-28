'use client';
import {
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EcoHeroBadge, PlanetProtectorBadge } from "../icons";
import { Droplets, Recycle, Trophy } from "lucide-react";
import Image from "next/image";
import users from '@/data/users.json';
import { useSearchParams } from "next/navigation";

export function Rewards() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get('guest') === 'true';
  const user = isGuest ? { name: 'Guest', ecoPoints: 0, badges: [] } : users[0];

  const rewardsData = {
    points: user.ecoPoints,
    badges: [
      {
        id: "plastic-saver",
        name: "Plastic Saver",
        description: "Earn 1,200 points",
        icon: Recycle,
        unlocked: user.ecoPoints >= 1200,
      },
      {
        id: "water-warrior",
        name: "Water Warrior",
        description: "Earn 2,500 points",
        icon: Droplets,
        unlocked: user.ecoPoints >= 2500,
      },
      {
        id: "eco-hero",
        name: "Eco Hero",
        description: "Earn 5,000 points",
        icon: EcoHeroBadge,
        unlocked: user.ecoPoints >= 5000,
      },
      {
        id: "planet-protector",
        name: "Planet Protector",
        description: "Earn 10,000 points",
        icon: PlanetProtectorBadge,
        unlocked: user.ecoPoints >= 10000,
      },
    ],
  };


  return (
    <div className="p-4 space-y-6">
      <div className="relative rounded-2xl p-4 overflow-hidden bg-primary/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552538633-0493b9e46633?w=800&q=80"
            alt="leaf pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative flex justify-between items-center">
          <div>
            <p className="text-sm text-primary/80">Eco Credits</p>
            <p className="text-3xl font-bold text-primary">{rewardsData.points.toLocaleString()}</p>
          </div>
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
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
                badge.unlocked ? "bg-card" : "bg-muted grayscale opacity-60"
              }`}
            >
              <badge.icon
                className={`h-12 w-12 mb-2 ${
                  badge.unlocked ? "text-primary" : "text-muted-foreground"
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
      <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Redeem Points</Button>
    </div>
  );
}