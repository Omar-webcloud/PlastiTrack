"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import locations from '@/data/map.json';

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#E3E8E4" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#386641" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#d5e0d5" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#386641" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#c8d7c8" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#386641" }],
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
    stylers: [{ visibility: "off" }],
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
    stylers: [{ color: "#a8bba9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

export function LocationTracker() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 51.507, lng: -0.09 };

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

  const getColor = (type: string) => {
    switch (type) {
      case "Eco shop": return "text-green-500";
      case "Recycling station": return "text-yellow-500";
      case "Recycle bin": return "text-blue-500";
      default: return "text-gray-500";
    }
  }


  return (
    <div className="flex-1 flex flex-col relative">
      <div className="absolute top-4 left-4 right-4 z-10">
        <Input placeholder="Search location" className="shadow-md bg-card" />
      </div>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={position}
          defaultZoom={13}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          styles={mapStyle}
          className="flex-1"
          mapId="plastitrack_map"
        >
          {locations.map((loc, index) => (
            <AdvancedMarker key={index} position={{lat: loc.lat, lng: loc.lng}}>
              <MapPin
                className={getColor(loc.type)}
                size={32}
                fill="currentColor"
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
      <div className="p-4 border-t bg-card">
        <h3 className="font-bold mb-2">Every pin you visit saves plastic</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Eco Shop</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span>Recycling Station</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Recycle Bin</span>
            </div>
        </div>
      </div>
    </div>
  );
}