"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Loading"
            width={96}
            height={96}
            className="relative z-10"
          />
        </motion.div>
      </div>

      <div className="container mx-auto p-6 space-y-8 opacity-50 pointer-events-none">
        <div className="space-y-4">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-4 w-[350px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
