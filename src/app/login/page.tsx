import { PlastiTrackPngLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <PlastiTrackPngLogo className="w-24 h-auto" />
      </div>
      <div className="bg-[#BCDEB4] p-8 rounded-t-3xl">
        <h1 className="text-3xl font-bold mb-2 text-primary">Log In</h1>
        <p className="text-primary/80 mb-8">
          To continue your eco journey
        </p>
        <form className="space-y-6">
          <div className="space-y-2">
            <Input id="name" placeholder="Name" className="bg-white rounded-2xl h-14 shadow-md border-none text-base" />
          </div>
          <div className="space-y-2">
            <Input id="password" type="password" placeholder="Password" className="bg-white rounded-2xl h-14 shadow-md border-none text-base" />
          </div>
          <Link href="/dashboard" passHref>
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full text-lg">
              Continue
            </Button>
          </Link>
        </form>
        <div className="flex items-center my-6">
          <span className="mx-auto text-sm text-primary/80">or</span>
        </div>
        <Link href="/dashboard?guest=true" passHref>
          <Button variant="default" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full text-lg">
            Continue as Guest
          </Button>
        </Link>
      </div>
    </div>
  );
}
