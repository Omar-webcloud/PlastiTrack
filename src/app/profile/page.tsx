'use client';
import Image from "next/image";
import { Settings, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ProfilePage() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen bg-background p-6 w-full md:max-w-2xl md:mx-auto md:py-10">

      <div className="flex justify-end mb-8">
        <Settings className="h-6 w-6 text-muted-foreground" />
      </div>


      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="relative w-24 h-24">
          <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">SA</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-1">Sarah Ahmed</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Chittagong</span>
          </div>
          <div className="flex items-center gap-2 justify-center mt-2">
            <span role="img" aria-label="medal" className="text-xl">🏅</span>
            <span className="text-primary">Eco Hero</span>
          </div>
        </div>
      </div>


      <div className="space-y-4 mt-4">
        <div className="flex items-center justify-between p-4 bg-card rounded-2xl shadow-sm">
          <span>Dark Mode</span>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
        
        <Button 
          variant="default" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl h-12"
        >
          Log Out
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full border-none bg-card hover:bg-card/90 rounded-2xl h-12"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}