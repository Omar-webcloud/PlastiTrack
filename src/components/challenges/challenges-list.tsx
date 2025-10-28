import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const challenges = [
  {
    title: "Carry your own water bottle",
    description: "Avoid buying single-use plastic bottles today",
    image: "https://picsum.photos/seed/bottle/200/200",
    hint: "water bottle",
  },
  {
    title: "Say no to plastic straws",
    description: "Use a metal, bamboo, or paper straw instead",
    image: "https://picsum.photos/seed/straws/200/200",
    hint: "reusable straw",
  },
  {
    title: "Bring your own shopping bag",
    description: "Refuse plastic bag when shopping",
    image: "https://picsum.photos/seed/bag/200/200",
    hint: "shopping bag",
  },
  {
    title: "Pack a lunch in reusable containers",
    description: "Avoid plastic wraps or takeaway boxes",
    image: "https://picsum.photos/seed/lunchbox/200/200",
    hint: "reusable container",
  },
];

export function ChallengesList() {
  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Card key={challenge.title} className="rounded-2xl bg-accent/50 border-none shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <Image
                    src={challenge.image}
                    alt={challenge.title}
                    width={80}
                    height={80}
                    className="object-cover"
                    data-ai-hint={challenge.hint}
                />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-accent-foreground">{challenge.title}</h3>
              <p className="text-sm text-accent-foreground/80">{challenge.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
