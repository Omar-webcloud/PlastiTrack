'use client';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BadgeCardProps {
  name: string;
  description: string;
  unlocked: boolean;
  icon: LucideIcon;
}

export function BadgeCard({ name, description, unlocked, icon: Icon }: BadgeCardProps) {
  return (
    <Card
      className={cn(`rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all shadow-md border-none`,
        unlocked ? "bg-card" : "bg-muted grayscale opacity-60"
      )}
    >
      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-2", unlocked ? 'bg-background' : 'bg-muted-foreground/20')}>
        <Icon
          className={cn(`h-8 w-8`,
            unlocked ? "text-card-foreground" : "text-muted-foreground"
          )}
        />
      </div>
      <h3 className="font-bold text-base text-card-foreground/90">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
