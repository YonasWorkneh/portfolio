"use client";

import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NavigationButtons({ styles }: { styles?: string }) {
  return (
    <div
      className={`flex items-center gap-4 ${styles} py-2 w-[240px] justify-between`}
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-full flex items-center justify-center  transition-colors gap-1"
      >
        <span className="text-xs border border-white/60  w-[1px] h-[17px] inline-block"></span>
        <span className="text-xs border border-white/60  w-[1px] h-[17px] inline-block"></span>
        <span className="text-xs border border-white/60  w-[1px] h-[17px] inline-block"></span>
      </motion.button>

      {/* Home Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-full flex items-center justify-center"
      >
        <span className="border border-white/60 rounded-[4px] w-[18px] h-[18px] inline-block"></span>
      </motion.button>

      {/* Recents Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-full flex items-center justify-center"
      >
        <ChevronLeft className="text-white/60" size={30} />
      </motion.button>
    </div>
  );
}
