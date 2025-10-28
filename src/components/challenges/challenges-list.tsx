import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from '@/lib/placeholder-images';

export function ChallengesList() {
  const challenges = placeholderImages.filter(p => p.id.startsWith('challenge-'));

  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Card key={challenge.id} className="rounded-2xl bg-card border-none shadow-sm overflow-hidden">
          <CardContent className="p-0 flex items-center">
            <div className="relative w-24 h-24">
                <Image
                    src={challenge.imageUrl}
                    alt={challenge.description}
                    layout="fill"
                    className="object-cover"
                    data-ai-hint={challenge.imageHint}
                />
            </div>
            <div className="p-4 flex-1">
              <h3 className="font-bold text-card-foreground">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground">{challenge.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}