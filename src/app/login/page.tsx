import { PlastiTrackLogoV2 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <PlastiTrackLogoV2 className="w-20 h-20 text-primary mb-4" />
      </div>
      <div className="bg-muted p-8 rounded-t-3xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Log In</h1>
        <p className="text-muted-foreground text-center mb-8">
          The first step of your eco journey.
        </p>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Sarah" className="bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-background" />
          </div>
          <Link href="/dashboard" passHref>
            <Button size="lg" className="w-full">
              Continue
            </Button>
          </Link>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-border"></div>
          <span className="mx-4 text-sm text-muted-foreground">or</span>
          <div className="flex-grow border-t border-border"></div>
        </div>
        <Button variant="secondary" size="lg" className="w-full">
          Continue as Guest
        </Button>
      </div>
    </div>
  );
}
