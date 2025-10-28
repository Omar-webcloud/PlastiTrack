import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function WeeklyOverviewSkeleton() {
  return (
    <Card className="lg:col-span-5 rounded-2xl shadow-none border-none bg-muted">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-6">
        <Skeleton className="h-48 w-full" />
      </CardContent>
    </Card>
  );
}
