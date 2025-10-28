import { Suspense } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { GlobalImpact } from "@/components/dashboard/global-impact";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";
import { LocationTracker } from "@/components/dashboard/location-tracker";
import { Rewards } from "@/components/dashboard/rewards";
import { WeeklyOverviewSkeleton } from "@/components/dashboard/weekly-overview-skeleton";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
          <GlobalImpact />

          <div className="grid gap-8 lg:grid-cols-5">
            <Suspense fallback={<WeeklyOverviewSkeleton />}>
              <WeeklyOverview />
            </Suspense>

            <LocationTracker />
          </div>

          <Rewards />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
