import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Wifi } from "lucide-react";
import { Signal } from "lucide-react";
import { Battery } from "lucide-react";

interface BatteryManager {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener: (event: string, listener: () => void) => void;
  removeEventListener: (event: string, listener: () => void) => void;
}
interface NavigatorWithBattery extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

export default function StatusBar({ bgColor }: { bgColor?: string }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(0);
  const time = currentTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    const updateBattery = () => {
      if ("getBattery" in navigator) {
        (navigator as NavigatorWithBattery)
          .getBattery()
          .then((battery: BatteryManager) => {
            setBatteryLevel(battery.level * 100);
          });
      }
    };
    updateTime();
    updateBattery();
    const timeInterval = setInterval(updateTime, 1000);
    const batteryInterval = setInterval(updateBattery, 1000);
    return () => {
      clearInterval(timeInterval);
      clearInterval(batteryInterval);
    };
  }, []);

  return (
    <div
      className={`w-full h-6 flex items-center justify-between p-[1.5rem] pb-0 text-white font-semibold text-xs ${
        bgColor ? bgColor : ""
      }`}
    >
      <div className="flex items-center gap-1">
        {time.toLowerCase().includes("pm") || time.toLowerCase().includes("am")
          ? time.slice(0, -2)
          : time}
      </div>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4 stroke-[2]" />
        <Wifi className="w-4 h-4 stroke-[2]" />
        <div className="relative">
          <Battery
            className="w-8 h-8 stroke-[1.5] stroke-[#ffffff5a]"
            enableBackground={"white"}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] z-10 text-black font-semibold">
            {Math.round(batteryLevel)}
          </span>
          <span className="absolute inset-0 top-[10px] left-[4px] flex items-center justify-center text-[8px] bg-white h-[12px] rounded-[2px] w-[15px]"></span>
        </div>
      </div>
    </div>
  );
}
