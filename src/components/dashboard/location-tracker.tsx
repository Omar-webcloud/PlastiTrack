"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Share, Diamond } from "lucide-react";
import locations from '@/data/map.json';
import { EcoShopIcon, RefillIcon, RecycleIconV2 } from "../icons";
import Image from "next/image";

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

export function LocationTracker() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 51.507, lng: -0.09 };

  if (!apiKey) {
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="relative flex-1">
                <Image 
                    src="https://images.unsplash.com/photo-1599599810694-b5b37304c3a7?q=80&w=1200"
                    alt="Map illustration"
                    layout="fill"
                    className="object-cover"
                    data-ai-hint="map illustration"
                />
                 <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
                    <Card className="bg-background/80 p-4 rounded-lg">
                        <CardContent className="p-0 text-center">
                            <p className="text-muted-foreground">
                                Map service is currently unavailable.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
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
        </div>
    );
  }

  const getPinColor = (type: string) => {
    switch (type) {
      case "Eco shop": return "text-blue-500";
      case "Recycling station": return "text-yellow-500";
      case "Recycle bin": return "text-red-500";
      default: return "text-gray-500";
    }
  }


  return (
    <div className="flex-1 flex flex-col relative">
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
                className={getPinColor(loc.type)}
                size={32}
                fill="currentColor"
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
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
    </div>
  );
}
