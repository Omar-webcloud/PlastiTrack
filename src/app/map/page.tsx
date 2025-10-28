import { LocationTracker } from "@/components/dashboard/location-tracker";
import { Search } from "lucide-react";

export default function MapPage() {
    return (
        <div className="flex flex-col h-screen bg-background">
            <div className="absolute top-4 left-4 right-4 z-10 px-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        placeholder="Search location"
                        className="w-full h-12 pl-10 pr-4 rounded-full shadow-md bg-card border-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>
            <LocationTracker />
        </div>
    )
}
