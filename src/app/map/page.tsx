import { AppHeader } from "@/components/app-header";
import { LocationTracker } from "@/components/dashboard/location-tracker";

export default function MapPage() {
    return (
        <div className="flex flex-col h-screen">
            <AppHeader title="Search Location" />
            <LocationTracker />
        </div>
    )
}