"use client";

import { motion } from "framer-motion";
import { PlastiTrackLogo } from "@/components/icons";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
        <PlastiTrackLogo className="w-24 h-24 text-primary relative z-10" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-muted-foreground font-medium animate-pulse"
      >
        Loading PlastiTrack...
      </motion.p>
    </div>
  );
}
