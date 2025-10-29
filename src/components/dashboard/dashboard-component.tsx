
import { Suspense } from "react";
import { GlobalImpact } from "@/components/dashboard/global-impact";
import { PersonalImpact } from "@/components/dashboard/personal-impact";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";
import { WeeklyOverviewSkeleton } from "@/components/dashboard/weekly-overview-skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import users from "@/data/users.json";
import { GlobalWeeklyOverview } from "@/components/dashboard/global-weekly-overview";

export function DashboardComponent() {
  const userStats = users[0].stats;

  return (
    <div className="flex flex-col bg-background">
      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-center">
            <Tabs defaultValue="insights" className="w-full max-w-sm">
                <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full">
                    <Link href="/dashboard" className="w-full h-full">
                        <TabsTrigger value="insights" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Insights</TabsTrigger>
                    </Link>
                    <Link href="/challenges" className="w-full h-full">
                        <TabsTrigger value="challenges" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Challenges</TabsTrigger>
                    </Link>
                    <Link href="/impacts" className="w-full h-full">
                        <TabsTrigger value="impacts" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Impacts</TabsTrigger>
                    </Link>
                </TabsList>
            </Tabs>
        </div>

        <DashboardHeader />
        
        <GlobalImpact />

        <Suspense fallback={<WeeklyOverviewSkeleton />}>
          <GlobalWeeklyOverview />
        </Suspense>

      </main>
    </div>
  );
}
