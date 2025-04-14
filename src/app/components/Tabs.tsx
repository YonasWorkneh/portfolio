import { Chrome, Plus, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TabsProps {
  tab: number;
  onSetTab: (tab: number) => void;
}

export default function Tabs({ tab, onSetTab }: TabsProps) {
  const [numTab, setNumTab] = useState(0);
  const [tabs, setTabs] = useState(Array.from({ length: numTab }));
  const tabsRef = useRef(null);
  const plusInView = useInView(tabsRef, { once: true });
  const [hide, setHide] = useState<boolean>();

  const activeTabCirlcle =
    "before:content-[''] before:absolute before:bottom-[0px] before:left-[-18px] before:w-[18px] before:h-[18px] before: before:bg-[#111] before:rounded-full  after:content-[''] after:absolute after:bottom-[0px] after:right-[-18px] after:w-[18px] after:h-[18px] after: after:bg-[#111] after:rounded-full before:z-10 after:z-10 mt-1";
  const activeTabSquare =
    "bg-[#323233] before:content-[''] before:absolute before:bottom-[0px] before:left-[-9px] before:w-[9px] before:h-[9px] before: before:bg-[#323233]  after:content-[''] after:absolute after:bottom-[0px] after:right-[-9px] after:w-[9px] after:h-[9px] after: after:bg-[#323233]";

  const removeTab = (index: number) => {
    console.log(tabs.length);
    if (tabs.length === 1) onSetTab(0);
    setTabs((tabs) => tabs.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (plusInView)
      setTimeout(() => {
        setHide(true);
      }, 4000);
  }, [plusInView]);

  return (
    <div className="flex items-center flex-1 ml-2 text-sm gap-6" ref={tabsRef}>
      <div
        className={`relative ${
          tab ? "my-1" : activeTabCirlcle + " h-[44px]"
        } cursor-pointer hover:bg-[#323233] hover:rounded-xl mt-1`}
        onClick={() => onSetTab(0)}
      >
        <div
          className={`flex items-center rounded-t-xl px-3 text-[#8E8E8E] gap-2 py-1 h-full w-full relative ${
            tab ? "" : activeTabSquare
          }  `}
        >
          <div className="w-8 h-8 rounded-full bg-[#111] text-white text-[12px] items-center justify-center flex">
            <svg
              className="size-[20px] stroke-[#ffffff] stroke-[3px] animate-draw fill-white"
              style={{
                fillOpacity: 1,
                strokeDasharray: 4500,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
            </svg>
          </div>
          <span className="truncate">Yonas Workneh ...</span>
          <X className="w-4 h-4 font-bold text-white/70 cursor-pointer" />
        </div>
      </div>
      {tabs.map((_, i) => (
        <div
          className={`relative ${
            tab === i + 1 ? activeTabCirlcle + " h-[44px]" : " my-1"
          } cursor-pointer hover:bg-[#323233] hover:rounded-xl`}
          key={i}
          onClick={() => onSetTab(i + 1)}
        >
          <div
            className={`flex items-center rounded-t-xl px-3 text-[#8E8E8E] gap-2 py-1 h-full w-full relative ${
              tab === i + 1 ? activeTabSquare : ""
            }`}
          >
            <div className="w-8 h-8 rounded-full text-white text-[12px] items-center justify-center flex">
              <Chrome stroke="#000" fill="#ffffffa8" />
            </div>
            <span className="truncate">New Tab</span>
            <X
              className="w-4 h-4 font-bold text-white/70 cursor-pointer"
              onClick={() => removeTab(i)}
            />
          </div>
        </div>
      ))}
      <button
        className="ml-2 py-[2px] px-4 group rounded relative z-20 before:content-[''] before:absolute before:top-2 before:left-0 before:border-l before:border-l-white/20 before:h-[20px]"
        onClick={() => {
          setNumTab((tabs) => ++tabs);
          onSetTab(tab + 1);
          setTabs((tabs) => [...tabs, tabs.length]);
        }}
      >
        <div className="w-8 h-8 rounded-full text-[#8E8E8E] group-hover:bg-[#323233] flex items-center justify-center relative">
          <Plus size={18} />
          {plusInView && (
            <motion.span
              initial={{ opacity: 0, y: 70, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              className="popup absolute top-4 z-50 left-8 w-[250px] p-2 py-5 bg-[#000] shadow-[0px_0px_10px_#ffffff14] rounded-lg before:contents-[''] before:absolute before:-left-3 before:top-0 before:w-10 before:h-10 before:bg-[#000] rounded-tl-[0px]"
              style={{ display: hide ? "none" : "block" }}
            >
              Enjoy playing trex on a new tab
            </motion.span>
          )}
        </div>
      </button>
    </div>
  );
}
