"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import anim, { text, curve, translate } from "../utils/anim";
import { usePathname } from "next/navigation";

const routes = {
  "/": "Projects",
  "/about": "About",
  "/projects/blackcube": "Black Cube",
  "/projects/gta": "GTA VI",
  "/projects/legendx": "LegendX",
};

export default function Curve({ children }: { children: ReactElement }) {
  const router = usePathname();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <div
        style={{ opacity: dimensions.width === 0 ? 1 : 0 }}
        className="bg-black transition-[opacity_0s_linear_0.1s] fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0 z-50"
      />
      <motion.p
        className="px-4 sm:px-10 absolute left-1/2 top-[40%] translate-x-[-50%] text-white text-[24px] sm:text-[32px] md:text-[46px] z-[1000] text-center before:content-[''] before:absolute flex items-center justify-center before:left-0 before:inline-block before:w-[12px] sm:before:w-[16px] md:before:w-[20px] before:h-[12px] sm:before:h-[16px] md:before:h-[20px] before:rounded-full before:bg-white before:shadow-[0px_0px_10px_#fff]"
        style={{ textShadow: "0px 0px 10px #fff" }}
        {...anim(text)}
      >
        {routes[router as keyof typeof routes]}
      </motion.p>
      {dimensions.width !== 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0 z-50"
      viewBox={`0 0 ${width} ${height + 600}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
