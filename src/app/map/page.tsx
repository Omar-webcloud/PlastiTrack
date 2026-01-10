"use client";

import { LocationTracker } from "@/components/dashboard/location-tracker";
import { Search } from "lucide-react";
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/components/map/LeafletMap'), {
    ssr: false,
});

export default function MapPage() {
    return (
        <div className="bg-background relative min-h-screen w-full md:max-w-2xl md:mx-auto md:py-10">

            <div className="sticky top-0 z-20 px-2 py-4 bg-background">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        placeholder="Search location"
                        className="w-full h-12 pl-10 pr-4 rounded-full shadow-md bg-card border-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>


            <div className="h-[70vh] relative">
                <LeafletMap />
            </div>


            <div>
                <LocationTracker />
            </div>
        </div>
    );
}
