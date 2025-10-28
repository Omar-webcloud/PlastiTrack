'use client';
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { GlobalImpact } from "@/components/dashboard/global-impact";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";
import { WeeklyOverviewSkeleton } from "@/components/dashboard/weekly-overview-skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import users from '@/data/users.json';


export default function DashboardPage() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get('guest') === 'true';
  const user = isGuest ? { name: 'Guest' } : users[0];

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

        <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name.split(' ')[0]}!</h1>
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