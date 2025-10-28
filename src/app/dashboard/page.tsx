import { Suspense } from "react";
import { GlobalImpact } from "@/components/dashboard/global-impact";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";
import { WeeklyOverviewSkeleton } from "@/components/dashboard/weekly-overview-skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="flex flex-col bg-background">
      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-center">
            <Tabs defaultValue="insights" className="w-full max-w-sm">
                <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full">
                    <TabsTrigger value="insights" className="rounded-full">Insights</TabsTrigger>
                    <TabsTrigger value="challenges" className="rounded-full">Challenges</TabsTrigger>
                    <TabsTrigger value="impacts" className="rounded-full">Impacts</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>

        <div>
            <h1 className="text-3xl font-bold">Welcome, Sarah!</h1>
            <p className="text-muted-foreground">Your every small act creates a big change.</p>
        </div>
        
        <GlobalImpact />

        <Suspense fallback={<WeeklyOverviewSkeleton />}>
          <WeeklyOverview />
        </Suspense>

      </main>
    </div>
  );
}
