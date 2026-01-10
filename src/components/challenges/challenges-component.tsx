import { ChallengesList } from "@/components/challenges/challenges-list";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ChallengesHeader } from "@/components/challenges/challenges-header";

export function ChallengesComponent() {
  return (

    <div className="flex flex-col bg-background min-h-screen">
      

      <main className="flex-1 p-6 space-y-6 w-full md:max-w-2xl md:mx-auto md:py-10">
        <div className="flex justify-center">
          <Tabs defaultValue="challenges" className="w-full max-w-sm">
            <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full">
              <Link href="/dashboard" className="w-full h-full">
                <TabsTrigger value="insights" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Insights
                </TabsTrigger>
              </Link>
              <Link href="/challenges" className="w-full h-full">
                <TabsTrigger value="challenges" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Challenges
                </TabsTrigger>
              </Link>
              <Link href="/impacts" className="w-full h-full">
                <TabsTrigger value="impacts" className="rounded-full w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Impacts
                </TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>

        <ChallengesHeader />
        
        <ChallengesList />

      </main>
    </div>
  );
}