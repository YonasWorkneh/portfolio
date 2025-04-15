"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const boxes = [
  { title: "kandake", src: "kandake.png" },
  { title: "gebeya", src: "gebeya.png" },
  { title: "hagurash", src: "hagurash.jpeg" },
  { title: "wedding", src: "wedding.png" },
  { title: "blackcube", src: "blackcube-tab.png" },
  { title: "legendx", src: "legendx-tab.png" },
  { title: "gta-vi", src: "gta-tab.png" },
  { title: "Raja Giri", src: "raja.png" },
];

export default function Carousal() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);
  const [currentScroll, setCurrentScroll] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      setScrollWidth(carouselRef.current.scrollWidth);
    }
  }, []);

  // Auto scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const newScroll = currentScroll + 300;
        if (newScroll >= scrollWidth - carouselRef.current.clientWidth) {
          // Reset to start when reaching the end
          carouselRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          setCurrentScroll(0);
          setActiveSection(0);
        } else {
          carouselRef.current.scrollTo({
            left: newScroll,
            behavior: "smooth",
          });
          setCurrentScroll(newScroll);
          updateActiveSection(newScroll);
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentScroll, scrollWidth, isAutoScrolling]);

  const scrollToSection = (sectionIndex: number) => {
    setIsAutoScrolling(false); // Stop auto-scroll when manually navigating
    if (carouselRef.current) {
      const sectionWidth = carouselRef.current.clientWidth;
      const newScroll = sectionIndex * sectionWidth;

      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
      setCurrentScroll(newScroll);
      setActiveSection(sectionIndex);
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1000);
    }
  };

  const updateActiveSection = (scrollPosition: number) => {
    if (carouselRef.current) {
      const sectionWidth = carouselRef.current.clientWidth;
      const newSection = Math.round(scrollPosition / sectionWidth);
      setActiveSection(newSection);
    }
  };

  return (
    <div className="mt-20 w-full relative overflow-hidden before:content:[''] before:absolute before:top-0 before:left-0 before:w-32 before:h-full before:bg-[linear-gradient(to_right,#1C1C1C,_rgba(21,_21,_21,_0))] before:z-10 after:absolute after:top-0 after:right-0 after:w-32 after:h-full after:bg-[linear-gradient(to_right,_rgba(21,_21,_21,_0),#1C1C1C)] after:z-10">
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden h-[300px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...boxes, ...boxes, ...boxes].map(({ title, src }, index) => (
          <motion.div
            key={`${title}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 },
            }}
            className={`w-[280px] h-[250px] flex items-center justify-center text-white text-2xl font-bold m-2 mx-4 rounded-lg flex-shrink-0`}
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={`/img/${src}`}
              alt={`${title}`}
              width={400}
              height={400}
              className="rounded-md w-[280px] h-[180px] transition-transform duration-500 hover:scale-125"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`relative rounded-full transition-all duration-500 ease-in-out w-2.5 h-2.5 ${
              activeSection === index
                ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-150"
                : " bg-white/30 hover:bg-white/50"
            }`}
          >
            {/* */}
          </button>
        ))}
      </div>
    </div>
  );
}
