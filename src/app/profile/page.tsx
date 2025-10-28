import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LogOut, Trash2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative bg-muted h-48">
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <Avatar className="w-24 h-24 border-4 border-background">
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                <AvatarFallback className="text-4xl bg-primary/20 text-primary">SA</AvatarFallback>
            </div>
          </Avatar>
        </div>
      </div>
      <div className="flex-grow bg-background pt-16 text-center">
        <h1 className="text-2xl font-bold">Sarah Ahmed</h1>
        <p className="text-yellow-500 font-semibold">Eco Hero</p>
        <p className="text-sm text-muted-foreground">12,345 points</p>
      </div>
      <div className="p-4 space-y-4">
        <Card className="rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <Label htmlFor="dark-mode" className="font-medium">Dark Mode</Label>
            <Switch id="dark-mode" />
          </CardContent>
        </Card>
        <Button variant="outline" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
        </Button>
        <Button variant="destructive" className="w-full justify-start bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-800">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Account
        </Button>
      </div>
    </div>
  );
}
