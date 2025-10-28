import { Suspense } from "react";
import { AppHeader } from "@/components/app-header";
import { GlobalImpact } from "@/components/dashboard/global-impact";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";
import { LocationTracker } from "@/components/dashboard/location-tracker";
import { WeeklyOverviewSkeleton } from "@/components/dashboard/weekly-overview-skeleton";
import { TipsCarousel } from "@/components/dashboard/tips-carousel";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <AppHeader title="Hi Sarah!" />
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
        <TipsCarousel />
        <div className="grid gap-8 lg:grid-cols-5">
          <Suspense fallback={<WeeklyOverviewSkeleton />}>
            <WeeklyOverview />
          </Suspense>

          <LocationTracker />
        </div>

        <GlobalImpact />
      </main>
    </div>
  );
}
