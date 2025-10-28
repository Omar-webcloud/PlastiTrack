"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Map, PlusSquare, Trophy, User } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/map", icon: Map, label: "Map" },
  { href: "/log", icon: PlusSquare, label: "Log" },
  { href: "/rewards", icon: Trophy, label: "Rewards" },
  { href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border/20 shadow-lg h-20 z-50">
      <nav className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href === '/dashboard' && (pathname === '/challenges' || pathname === '/impacts'));
          
          if (item.href === "/log") {
            return (
              <Link href={item.href} key={item.href} className="-mt-8">
                <div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-full transition-all text-primary-foreground bg-primary shadow-lg",
                    isActive ? "bg-accent text-accent-foreground" : "bg-primary"
                  )}
                >
                  <item.icon className="w-8 h-8" />
                </div>
              </Link>
            )
          }

          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all",
                  "text-muted-foreground",
                  isActive && "text-primary"
                )}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
