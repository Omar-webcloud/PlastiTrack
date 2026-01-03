"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function ChallengesList() {
  const challenges = placeholderImages.filter((p) => 
    p.id.startsWith("challenge-")
  );

  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className="rounded-2xl bg-card border-none shadow-sm overflow-hidden"
        >
          <CardContent className="p-0 flex items-center">
            <div className="relative w-24 h-24 flex-shrink-0 bg-muted rounded-xl overflow-hidden ">
              {!failedImages.has(challenge.id) && (
                <Image
                  src={challenge.imageUrl}
                  alt={challenge.imageHint}
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                  onError={() => {
                    setFailedImages(prev => new Set([...prev, challenge.id]));
                  }}
                />
              )}
            </div>
            <div className="p-4 flex-1">
              <h3 className="font-bold text-card-foreground">
                {challenge.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {challenge.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}