import { PersonalImpact } from "@/components/dashboard/personal-impact";
import { PersonalWeeklyOverview } from "@/components/dashboard/personal-weekly-overview";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import users from "@/data/users.json";

export default function ImpactsPage() {
  const userStats = users[0].stats;

  return (
    <div className="flex flex-col bg-background">
      <main className="flex-1 p-6 space-y-6">
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

        <PersonalImpact stats={userStats} />

        <PersonalWeeklyOverview />
        
      </main>
    </div>
  );
}
