"use client";

import {
  PlusCircle,
  LogOut,
  User,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlasticLogForm } from "@/components/dashboard/plastic-log-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />

      <div className="flex-1">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="shrink-0">
            <PlusCircle />
            <span>Log Plastic</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Log Your Plastic Collection</DialogTitle>
            <DialogDescription>
              Add the details of the plastic you've collected. Every piece
              counts!
            </DialogDescription>
          </DialogHeader>
          <PlasticLogForm />
        </DialogContent>
      </Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <Avatar>
              {userAvatar && (
                <Image
                  src={userAvatar.imageUrl}
                  alt={userAvatar.description}
                  width={40}
                  height={40}
                  data-ai-hint={userAvatar.imageHint}
                />
              )}
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
