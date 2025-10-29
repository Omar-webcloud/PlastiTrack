'use client';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Banknote, Droplets, Recycle, Trophy, Globe } from "lucide-react";
import Image from "next/image";
import users from '@/data/users.json';
import { useSearchParams } from "next/navigation";
import { BadgeCard } from "./badge-card";

export function Rewards() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get('guest') === 'true';
  const user = isGuest ? { name: 'Guest', ecoPoints: 0, badges: [] } : users?.[0] || { name: 'Guest', ecoPoints: 0, badges: [] };

  const rewardsData = {
    points: user.ecoPoints,
    badges: [
      {
        id: "plastic-saver",
        name: "Plastic Saver",
        description: "Earn 50 points",
        icon: Trophy,
        unlocked: user.ecoPoints >= 50,
      },
      {
        id: "water-warrior",
        name: "Water Warrior",
        description: "Earn 200 points",
        icon: Droplets,
        unlocked: user.ecoPoints >= 200,
      },
      {
        id: "eco-hero",
        name: "Eco Hero",
        description: "Earn 1,000 points",
        icon: Globe,
        unlocked: user.ecoPoints >= 1000,
      },
      {
        id: "planet-protector",
        name: "Planet Protector",
        description: "Earn 2,000 points",
        icon: Recycle,
        unlocked: user.ecoPoints >= 2000,
      },
    ],
  };


  return (
    <div className="space-y-6">
      <Card className="relative rounded-2xl p-4 overflow-hidden bg-card border-none shadow-md">
        <div className="absolute inset-0">
          <Image
            src="/leaf-pattern.jpg"
            alt="leaf pattern"
            fill
            className="object-cover opacity-30"
            data-ai-hint="leaf pattern"
          />
        </div>
        <div className="absolute inset-0 bg-background/10" />
        <CardContent className="relative flex flex-col justify-between h-32 p-2">
          <div>
            <p className="text-sm font-semibold text-card-foreground/90">Eco Points</p>
            <p className="text-4xl font-bold text-card-foreground">{rewardsData.points.toLocaleString()}</p>
          </div>
          <div className="flex justify-end items-center gap-2">
                <Banknote className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-card-foreground/90">Reward history</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-bold mb-4 text-card-foreground">Your Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          {rewardsData.badges.map((badge) => (
            <BadgeCard key={badge.id} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
