"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#e3e8e4" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#58665b" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#58665b" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#d5e2d7" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#c9d1cb" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#d4ac0d" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#bda038" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#d8e5da" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#a1b8a5" }],
  },
];

const locations = [
  { lat: 40.7128, lng: -74.006, type: "collection" },
  { lat: 40.758, lng: -73.9855, type: "disposal" },
  { lat: 40.7831, lng: -73.9712, type: "collection" },
];

export function LocationTracker() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 40.75, lng: -73.98 };

  if (!apiKey) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Location Tracker</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-80">
          <p className="text-muted-foreground text-center p-4">
            Google Maps API key is missing.
            <br /> Please add it to your .env.local file.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Location Activity</CardTitle>
        <CardDescription>Hotspots for collection and disposal.</CardDescription>
      </CardHeader>
      <CardContent className="h-[22rem] w-full p-0 rounded-b-lg overflow-hidden">
        <APIProvider apiKey={apiKey}>
          <Map
            center={position}
            zoom={12}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            styles={mapStyle}
          >
            {locations.map((loc, index) => (
              <AdvancedMarker key={index} position={loc}>
                <MapPin
                  className={
                    loc.type === "collection"
                      ? "text-primary"
                      : "text-accent"
                  }
                />
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>
      </CardContent>
    </Card>
  );
}
