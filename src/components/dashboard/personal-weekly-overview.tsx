"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";

const chartData = [
  { day: "Mon", items: 2 },
  { day: "Tue", items: 3 },
  { day: "Wed", items: 1 },
  { day: "Thu", items: 4 },
  { day: "Fri", items: 2 },
  { day: "Sat", items: 5 },
  { day: "Sun", items: 3 },
];

const chartConfig = {
  items: {
    label: "Items",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function PersonalWeeklyOverview() {
  return (
    <Card className="rounded-2xl shadow-md bg-card">
      <CardHeader>
        <CardTitle className="text-lg text-foreground/80">Your Weekly Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <ChartContainer config={chartConfig} className="h-40 w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
              />
               <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                hide
                />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="items" fill="var(--color-items)" radius={[8, 8, 8, 8]} barSize={12} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}