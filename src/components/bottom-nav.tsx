"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HomeIcon, MapPinIcon, LeafIcon, AwardIcon, UserIcon, ShieldCheck } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: HomeIcon, label: "Home" },
  { href: "/map", icon: MapPinIcon, label: "Map" },
  { href: "/log", icon: LeafIcon, label: "Log" },
  { href: "/challenges", icon: ShieldCheck, label: "Challenges" },
  { href: "/rewards", icon: AwardIcon, label: "Rewards" },
  { href: "/profile", icon: UserIcon, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  const getNavItems = () => {
    // A bit of a hack to show the challenges tab as active on the dashboard.
    if (pathname === '/dashboard' || pathname === '/challenges' || pathname === '/impacts') {
      return [
        { href: "/dashboard", icon: HomeIcon, label: "Home" },
        { href: "/map", icon: MapPinIcon, label: "Map" },
        { href: "/log", icon: LeafIcon, label: "Log" },
        { href: "/rewards", icon: AwardIcon, label: "Rewards" },
        { href: "/profile", icon: UserIcon, label: "Profile" },
      ]
    }
    return [
      { href: "/dashboard", icon: HomeIcon, label: "Home" },
      { href: "/map", icon: MapPinIcon, label: "Map" },
      { href: "/log", icon: LeafIcon, label: "Log" },
      { href: "/rewards", icon: AwardIcon, label: "Rewards" },
      { href: "/profile", icon: UserIcon, label: "Profile" },
    ];
  }


  return (
    <div className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-border/20 shadow-lg rounded-full h-16 z-50 max-w-sm mx-auto">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href === '/dashboard' && (pathname === '/challenges' || pathname === '/impacts'));
          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all",
                  "text-muted-foreground",
                  isActive && "text-primary"
                )}
              >
                <div className={cn("p-2 rounded-full transition-colors", isActive && "bg-accent")}>
                  <item.icon className="w-6 h-6 " />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
