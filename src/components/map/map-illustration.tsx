"use client";
import { useState } from "react";
import Image from "next/image";

export default function MapIllustration() {
  const [errored, setErrored] = useState(false);
  
  if (errored) {
    return (
      <div className="absolute top-20 left-4 z-0 hidden md:block">
        <div className="w-64 h-40 relative bg-[#F7F9F5] rounded-lg flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8BC34A] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M3 6h18v12H3V6zm1 2v8h16V8H4zm4 2h8v4H8v-4z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xs mt-1 text-gray-600">Eco Shop</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#03A9F4] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M12 4V1M12 23v-3M4 12H1M23 12h-3M20 20l-2-2M6 6L4 4M4 20l2-2M18 6l2-2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xs mt-1 text-gray-600">Recycling Station</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#795548] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M9 4V3h6v1h4v2h-1v13a2 2 0 01-2 2H8a2 2 0 01-2-2V6H5V4h4zm0 3v11h2V7H9zm4 0v11h2V7h-2z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xs mt-1 text-gray-600">Recycle Bin</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-20 left-4 z-0 hidden md:block">
      <div className="w-64 h-40 relative">
        <Image
          src="/map-illustration.jpg"
          alt="Interactive map showing eco shops, recycling stations, and recycle bins"
          fill
          className="object-contain rounded-lg"
          onError={() => setErrored(true)}
          priority
          sizes="256px"
        />
      </div>
    </div>
  );
}