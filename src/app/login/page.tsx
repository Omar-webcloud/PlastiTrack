import { PlastiTrackPngLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    // 1. Added md:items-center and md:justify-center to center everything on desktop
    <div className="flex flex-col min-h-screen bg-background md:items-center md:justify-center">
      
      {/* 2. Added md:flex-none to stop the logo area from pushing the form down on desktop */}
      {/* Added md:w-full and md:max-w-md to align it with the form width */}
      <div className="flex-1 md:flex-none flex flex-col items-center justify-center p-8 text-center md:w-full md:max-w-md">
        <PlastiTrackPngLogo className="w-24 h-auto" />
      </div>

      {/* 3. Added w-full and md:max-w-md to stop horizontal stretching */}
      {/* Added md:rounded-3xl to round the bottom corners on desktop (card look) */}
      {/* Added md:shadow-xl for better aesthetics on big screens */}
      <div className="bg-[#BCDEB4] p-8 rounded-t-3xl w-full md:max-w-md md:rounded-3xl md:shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-primary">Log In</h1>
        <p className="text-primary/80 mb-8">
          To continue your eco journey
        </p>
        <form className="space-y-6">
          <div className="space-y-2 mb-4">
            <Input id="name" placeholder="Name" className="bg-white rounded-2xl h-14 shadow-md border-none text-base" />
          </div>
          <div className="space-y-2">
            <Input id="password" type="password" placeholder="Password" className="bg-white rounded-2xl h-14 shadow-md border-none text-base" />
          </div>
          <div className="mt-6"> {/* Added top margin to separate form inputs from button */}
            <Link href="/dashboard" passHref>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full text-lg">
                Continue
              </Button>
            </Link>
          </div>
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