"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Share, Diamond } from "lucide-react";
import { EcoShopIcon, RefillIcon, RecycleIconV2 } from "../icons";
import Image from "next/image";

export function LocationTracker() {
    return (
       
            <div className="p-4 bg-background/90 backdrop-blur-sm rounded-t-3xl shadow-lg -mt-8">
                <h3 className="font-bold mb-3 text-lg text-primary">Every pin you visit saves plastic</h3>
                <div className="flex items-center gap-2 text-sm mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800">
                        <EcoShopIcon className="w-4 h-4" />
                        <span className="font-semibold">Eco shop</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        <RefillIcon className="w-4 h-4" />
                        <span className="font-semibold">Refill</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800">
                        <RecycleIconV2 className="w-4 h-4" />
                        <span className="font-semibold">Recycle</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center">
                        <h4 className="font-bold text-primary">Eco refill station</h4>
                        <Diamond className="w-3 h-3 text-blue-400 fill-blue-400 ml-2" />
                    </div>
                    <p className="text-muted-foreground text-sm">~1.2 km away</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mt-4">
                    <Button variant="ghost" className="flex flex-col h-auto rounded-xl bg-muted py-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span className="text-xs text-primary font-semibold">Explore</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col h-auto rounded-xl bg-muted py-2">
                        <Share className="w-6 h-6 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-semibold">Get direction</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col h-auto rounded-xl bg-muted py-2">
                        <Plus className="w-6 h-6 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-semibold">Add location</span>
                    </Button>
                </div>
            </div>
        
    );
}
