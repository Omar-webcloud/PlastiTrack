import { PersonalImpact } from "@/components/dashboard/personal-impact";
import { PersonalWeeklyOverview } from "@/components/dashboard/personal-weekly-overview";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import users from "@/data/users.json";

export default function ImpactsPage() {
  const userStats = users[0].stats;

  return (
    // 1. Added min-h-screen to ensure the background fills the screen on desktop
    <div className="flex flex-col bg-background min-h-screen">
      
      {/* 2. Responsive Layout Changes:
        - w-full: Full width on mobile
        - md:max-w-2xl: Limits width on desktop so charts don't stretch too wide
        - md:mx-auto: Centers the content column on desktop
        - md:py-10: Adds extra vertical breathing room on desktop
      */}
      <main className="flex-1 p-6 space-y-6 w-full md:max-w-2xl md:mx-auto md:py-10">
        <div className="flex justify-center">
          <Tabs defaultValue="impacts" className="w-full max-w-sm">
            <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full">
              <Link href="/dashboard" className="w-full h-full">
                <TabsTrigger value="insights" className="rounded-full w-full">
                  Insights
                </TabsTrigger>
              </Link>
              <Link href="/challenges" className="w-full h-full">
                <TabsTrigger value="challenges" className="rounded-full w-full">
                  Challenges
                </TabsTrigger>
              </Link>
              <Link href="/impacts" className="w-full h-full">
                <TabsTrigger value="impacts" className="rounded-full w-full">
                  Impacts
                </TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>

        <div className="text-center">
            <h1 className="text-3xl font-bold">You have saved 13 plastic items today!</h1>
        </div>

        {/* These components will now fill the container, but stop at max-w-2xl */}
        <PersonalImpact stats={userStats} />

        <PersonalWeeklyOverview />
        
      </main>
    </div>
  );
}