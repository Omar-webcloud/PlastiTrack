import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function WeeklyOverviewSkeleton() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Weekly Overview & AI Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Skeleton className="h-48 w-full" />
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-16 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
