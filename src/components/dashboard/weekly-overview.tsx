"use client";

import { useEffect, useState } from "react";
import {
  weeklyPlasticReductionTips,
  type WeeklyPlasticReductionTipsOutput,
} from "@/ai/flows/weekly-plastic-reduction-tips";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { Lightbulb, UtensilsCrossed } from "lucide-react";
import { WeeklyOverviewSkeleton } from "./weekly-overview-skeleton";

const chartData = [
  { day: "Mon", kg: 1.2 },
  { day: "Tue", kg: 0.8 },
  { day: "Wed", kg: 2.1 },
  { day: "Thu", kg: 0.5 },
  { day: "Fri", kg: 1.5 },
  { day: "Sat", kg: 3.2 },
  { day: "Sun", kg: 2.5 },
];

const chartConfig = {
  kg: {
    label: "kg",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function WeeklyOverview() {
  const [data, setData] = useState<WeeklyPlasticReductionTipsOutput | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const result = await weeklyPlasticReductionTips({});
        setData(result);
      } catch (e) {
        setError("Failed to load AI tips. Please try again later.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <WeeklyOverviewSkeleton />;
  }

  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Weekly Report</CardTitle>
        <CardDescription>Your plastic collection stats and AI-powered tips for this week.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-md font-semibold mb-2">Your Collection (kg)</h3>
          <ChartContainer config={chartConfig} className="h-48 w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} />
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
                />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="kg" fill="var(--color-kg)" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}
        
        {data && (
          <div className="space-y-6">
            <div>
              <h3 className="text-md font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="text-accent" />
                AI-Powered Reduction Tips
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {data.tips.map((tip, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{`Tip #${index + 1}`}</AccordionTrigger>
                    <AccordionContent>{tip.substring(tip.indexOf('.') + 2)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-2 flex items-center gap-2">
                    <UtensilsCrossed className="text-primary" />
                    This Week's Low-Plastic Recipe
                </h3>
                <p className="text-sm text-muted-foreground">{data.recipeRecommendation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
