"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    // const mouseOver = (e: MouseEvent) => {
    //   const target = e.target as HTMLElement;
    //   if (target.closest("button, a, [role='button'], [tabindex]")) {
    //     setCursorVariant("hover");
    //   } else {
    //     setCursorVariant("default");
    //   }
    // };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "#fff",
      mixBlendMode: "normal" as const,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="cursor hidden sm:block"
      variants={variants}
      animate={cursorVariant}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "#fff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}

export function useCustomCursor() {
  const [, setCursorVariant] = useState("default");

  const handleHoverStart = () => setCursorVariant("hover");
  const handleHoverEnd = () => setCursorVariant("default");

  return { handleHoverStart, handleHoverEnd };
}
