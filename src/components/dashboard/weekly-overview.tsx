"use client";

import {
  Card,
  CardContent,
  CardDescription,
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
  { day: "Mon", items: 5 },
  { day: "Tue", items: 8 },
  { day: "Wed", items: 12 },
  { day: "Thu", items: 7 },
  { day: "Fri", items: 10 },
  { day: "Sat", items: 13 },
  { day: "Sun", items: 9 },
];

const chartConfig = {
  items: {
    label: "Items",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function WeeklyOverview() {
  return (
    <Card className="lg:col-span-5 rounded-2xl shadow-none border-none bg-muted">
      <CardHeader>
        <CardTitle>You have saved 13 plastic items today!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <ChartContainer config={chartConfig} className="h-48 w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
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
              <Bar dataKey="items" fill="var(--color-items)" radius={[8, 8, 8, 8]} barSize={20} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
