'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './map.css';
import L from 'leaflet';

// Fix default Leaflet marker icon path
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconShadow = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LeafletMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // @ts-ignore
      mapRef.current = L.map(mapContainerRef.current, {
        center: [20, 0],
        zoom: 2,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      // @ts-ignore
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // @ts-ignore
      L.marker([51.505, -0.09]).addTo(mapRef.current)
        .bindPopup('Track Local Bins!');

      // @ts-ignore
      L.control.zoom({ position: 'bottomleft' }).addTo(mapRef.current);
    }

    return () => {
        // @ts-ignore
      if (mapRef.current) {
        // @ts-ignore
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  });

  return (
    <div
      // @ts-ignore
      ref={mapContainerRef}
      style={{ height: '100%', width: '100%', zIndex: 0 }}
    />
  );
}
