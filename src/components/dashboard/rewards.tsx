import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BronzeLeaf,
  GoldenSprout,
  LockedBadge,
  SilverDrop,
} from "../icons";
import { cn } from "@/lib/utils";

const rewardsData = {
  points: 780,
  badges: [
    {
      id: "bronze-leaf",
      name: "Bronze Leaf",
      description: "Collect 10kg of plastic",
      icon: BronzeLeaf,
      unlocked: true,
    },
    {
      id: "silver-drop",
      name: "Silver Drop",
      description: "Collect 50kg of plastic",
      icon: SilverDrop,
      unlocked: true,
    },
    {
      id: "golden-sprout",
      name: "Golden Sprout",
      description: "Collect 100kg of plastic",
      icon: GoldenSprout,
      unlocked: false,
    },
    {
      id: "recycler-pro",
      name: "Recycler Pro",
      description: "Log 50 entries",
      icon: LockedBadge,
      unlocked: false,
    },
    {
      id: "community-hero",
      name: "Community Hero",
      description: "Join 3 clean-up events",
      icon: LockedBadge,
      unlocked: false,
    },
  ],
};

export function Rewards() {
  return (
    <div>
       <h2 className="text-xl font-semibold mb-4">Your Rewards</h2>
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Points & Badges</CardTitle>
            <CardDescription>
              Earn rewards for your environmental efforts.
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-lg py-2 px-4 bg-accent/20 border-accent">
            <span className="font-bold text-accent-foreground mr-2">{rewardsData.points}</span>
            <span className="text-muted-foreground">Points</span>
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {rewardsData.badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={cn(
                    "transition-all",
                    !badge.unlocked && "filter grayscale"
                  )}
                >
                  <badge.icon className="h-20 w-20" />
                </div>
                <h3 className="font-semibold text-sm">{badge.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
