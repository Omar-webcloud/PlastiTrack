'use client';
import { useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings, MapPin } from "lucide-react";
import users from '@/data/users.json';
import { placeholderImages } from '@/lib/placeholder-images';

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get('guest') === 'true';
  const user = isGuest ? { name: 'Guest', ecoPoints: 0, location: 'Unknown' } : { ...users[0], location: 'Chittagong' };
  const profileImage = placeholderImages.find(p => p.id === 'user-avatar');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="relative bg-muted h-48 rounded-b-[40px]">
        <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon">
                <Settings className="w-6 h-6 text-foreground/60"/>
            </Button>
        </div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="bg-card p-2 rounded-3xl shadow-lg">
            <Avatar className="w-28 h-28 rounded-2xl">
              {profileImage && !isGuest ? (
                <AvatarImage src={profileImage.imageUrl} alt={user.name} data-ai-hint={profileImage.imageHint} className="rounded-xl" />
              ) : (
                <AvatarFallback className="text-4xl bg-card rounded-xl text-primary font-bold">
                  {user.name.split(' ').map(n => n[0]).join('') || 'G'}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-background pt-20 text-center">
        <h1 className="text-3xl font-bold text-primary">{user.name}</h1>
        <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-yellow-500">🏅</span>
            <p className="text-primary font-semibold">Eco Hero</p>
        </div>
        <div className="flex items-center justify-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{user.location}</p>
        </div>
      </div>
      <div className="p-6">
        <Card className="rounded-3xl shadow-lg border-none">
            <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-2xl">
                    <Label htmlFor="dark-mode" className="font-medium text-foreground/80">Dark Mode</Label>
                    <Switch id="dark-mode" />
                </div>
                <Button size="lg" className="w-full h-14 bg-primary text-primary-foreground text-base">
                    Log Out
                </Button>
                <Button variant="outline" size="lg" className="w-full h-14 text-muted-foreground bg-muted/50 border-none text-base">
                    Delete Account
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
