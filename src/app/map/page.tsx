import { LocationTracker } from "@/components/dashboard/location-tracker";
import { Search } from "lucide-react";
import MapIllustration from "@/components/map/map-illustration";

export default function MapPage() {
    return (
        <div className="flex flex-col h-screen bg-background relative lg:mx-[350px] lg:border-x lg:shadow-2xl">
            {/* Search Bar */}
            <div className="absolute top-4 left-4 right-4 z-20 px-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        placeholder="Search location"
                        className="w-full h-12 pl-10 pr-4 rounded-full shadow-md bg-card border-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative">
                <LocationTracker />
                
                {/* Map Illustration Overlay */}
                <div className="absolute inset-0 p-8 sm:p-12 md:p-16 lg:p-20 z-10 pointer-events-none">
                    <MapIllustration />
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-20 bg-card/80 backdrop-blur-sm p-3 rounded-lg shadow-md">
                
            </div>
        </div>
    );
}
