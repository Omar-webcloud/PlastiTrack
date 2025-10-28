"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Input } from "../ui/input";

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

const locations = [
  { lat: 40.7128, lng: -74.006, type: "collection" }, // Red
  { lat: 40.758, lng: -73.9855, type: "disposal" }, // Yellow
  { lat: 40.7831, lng: -73.9712, type: "collection" }, // Red
  { lat: 40.7484, lng: -73.9857, type: "recycling" }, // Blue
];

export function LocationTracker() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 40.75, lng: -73.98 };

  if (!apiKey) {
    return (
      <Card className="flex-1 lg:col-span-2">
        <CardContent className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-center p-4">
            Google Maps API key is missing.
            <br /> Please add it to your .env.local file.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex-1 flex flex-col relative">
      <div className="absolute top-4 left-4 right-4 z-10">
        <Input placeholder="Search location" className="shadow-md" />
      </div>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          styles={mapStyle}
          className="flex-1"
        >
          {locations.map((loc, index) => (
            <AdvancedMarker key={index} position={loc}>
              <MapPin
                className={
                  loc.type === "collection"
                    ? "text-red-500"
                    : loc.type === "disposal"
                    ? "text-yellow-500"
                    : "text-blue-500"
                }
                size={32}
                fill="currentColor"
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
      <div className="p-4 border-t bg-background">
        <h3 className="font-bold mb-2">Every pin you visit saves plastic</h3>
        <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Recycling</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span>Disposal</span>
            </div>
        </div>
      </div>
    </div>
  );
}
