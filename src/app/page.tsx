import { PlastiTrackLogoV2 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <PlastiTrackLogoV2 className="w-32 h-32 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter">
          Let's turn plastic into opportunity
        </h1>
        <p className="text-muted-foreground max-w-md">
          Track your plastic recycling journey and make a real world impact.
          Join a community of eco-warriors today.
        </p>
      </div>
      <div className="mt-12 w-full max-w-xs">
        <Link href="/login" passHref>
          <Button size="lg" className="w-full">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
