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
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg h-20 sm:h-24 z-50 rounded-t-[24px] sm:rounded-t-[30px]">
      <nav className="flex justify-around items-center h-full max-w-lg mx-auto px-2 sm:px-0">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href === '/dashboard' && (pathname === '/challenges' || pathname === '/impacts'));

          if (item.href === '/log') {
            return (
              <Link href={item.href} key={item.href} className="-translate-y-6 sm:-translate-y-8">
                <div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-primary/40 hover:bg-primary rounded-full shadow-lg transition-transform transform hover:scale-105",
                    "border border-primary-foreground/20" 
                  )}
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
              </Link>
            )
          }

          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all w-14 h-14 sm:w-16 sm:h-16",
                  "text-muted-foreground/80"
                )}
              >
                <div className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl",
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
