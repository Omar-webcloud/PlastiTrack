"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Map, Trophy, User, Leaf, Award } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/map", icon: Map, label: "Map" },
  { href: "/log", icon: Leaf, label: "Log" },
  { href: "/rewards", icon: Award, label: "Rewards" },
  { href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/login') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg h-24 z-50 rounded-t-[30px]">
      <nav className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href === '/dashboard' && (pathname === '/challenges' || pathname === '/impacts'));
          
          if (item.href === '/log') {
            return (
              <Link href={item.href} key={item.href} className="-translate-y-8">
                <div
                  className={cn(
                    "flex items-center justify-center w-20 h-20 bg-primary/40 hover:bg-primary rounded-full shadow-lg transition-transform transform hover:scale-105",
                  )}
                >
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </Link>
            )
          }

          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all w-16 h-16",
                  "text-muted-foreground/80"
                )}
              >
                <div className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-2xl",
                  isActive && "bg-primary/10"
                )}>
                  <item.icon className={cn("w-6 h-6", isActive && "text-primary")} />
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
