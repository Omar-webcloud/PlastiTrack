import { PlastiTrackLogoV3 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8 text-center">
      <div className="flex flex-col items-center justify-center flex-1">
        <PlastiTrackLogoV3 className="w-48 h-48 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight mt-8">
          Let's turn plastic into opportunity
        </h1>
        <p className="text-muted-foreground max-w-sm mt-4">
          Track your plastic recycling journey and make a real environmental impact
        </p>
      </div>
      <div className="w-full max-w-xs">
        <Link href="/login" passHref>
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
