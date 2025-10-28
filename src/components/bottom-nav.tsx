"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Map, Trophy, User, Leaf } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/map", icon: Map, label: "Map" },
  { href: "/log", icon: Leaf, label: "Log" },
  { href: "/rewards", icon: Trophy, label: "Rewards" },
  { href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/login') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border/20 shadow-lg h-20 z-50 rounded-t-3xl">
      <nav className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href === '/dashboard' && (pathname === '/challenges' || pathname === '/impacts'));
          
          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all rounded-full w-12 h-12",
                  "text-muted-foreground",
                  isActive && (item.href === '/log' ? "bg-primary/10 text-primary" : "text-primary")
                )}
              >
                <item.icon className="w-6 h-6" />
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
