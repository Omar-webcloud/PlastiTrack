'use client';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Banknote, Droplets, Recycle, Trophy, Globe } from "lucide-react";
import Image from "next/image";
import users from '@/data/users.json';
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

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
      <Card className="relative rounded-2xl p-4 overflow-hidden bg-[#E6F0E4] border-none shadow-md">
        <div className="absolute inset-0">
          <Image
            src="https://storage.googleapis.com/aai-web-samples/leaf-pattern.svg"
            alt="leaf pattern"
            fill
            className="object-cover opacity-50"
            data-ai-hint="leaf pattern"
          />
        </div>
        <CardContent className="relative flex flex-col justify-between h-32 p-2">
          <div>
            <p className="text-sm font-semibold text-primary/90">Eco Points</p>
            <p className="text-4xl font-bold text-primary">{rewardsData.points.toLocaleString()}</p>
          </div>
          <div className="flex justify-end items-center gap-2">
                <Banknote className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-primary/90">Reward history</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-bold mb-4 text-primary">Your Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          {rewardsData.badges.map((badge) => (
            <Card
              key={badge.id}
              className={cn(`rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all shadow-md border-none`,
                badge.unlocked ? "bg-primary/10" : "bg-muted grayscale opacity-60"
              )}
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-2", badge.unlocked ? 'bg-white' : 'bg-muted-foreground/20')}>
                <badge.icon
                    className={cn(`h-8 w-8`,
                    badge.unlocked ? "text-primary" : "text-muted-foreground"
                    )}
                />
              </div>
              <h3 className="font-bold text-base text-primary/90">
                {badge.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {badge.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
