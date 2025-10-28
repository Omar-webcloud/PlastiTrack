"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, PlusSquare, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/map", icon: Map, label: "Map" },
  { href: "/log", icon: PlusSquare, label: "Log", isCentral: true },
  { href: "/rewards", icon: Trophy, label: "Rewards" },
  { href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t h-16 z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                  item.isCentral &&
                    "bg-primary text-primary-foreground rounded-xl w-14 h-14 -translate-y-4 shadow-lg"
                )}
              >
                <item.icon className="w-6 h-6" />
                {!item.isCentral && (
                  <span className="text-xs">{item.label}</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
