import { borderAndContentReveal, contentReveal } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Solution() {
  const solutionCard = useRef(null);
  const solutionGrid = useRef(null);
  const solutionCardInView = useInView(solutionCard, { once: true });
  const solutionGridInView = useInView(solutionGrid, { once: true });
  return (
    <div>
      <div>
        <h1 className="relative pl-8 uppercase text-md text-[#ffffff54] font-tenor font-semibold before:content-[''] before:absolute before:top-[3px] before:left-0 before:inline-block before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:shadow-[0px_0px_10px_#fff]">
          The Solution
        </h1>
      </div>
      <div className="flex justify-center">
        <motion.div
          ref={solutionCard}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={
            solutionCardInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl rounded-3xl py-6 px-2 sm:p-8 md:p-12 overflow-hidden 
                    border border-transparent
                    bg-[#1a1a1a]
                    before:content-[''] before:absolute before:top-0 before:left-[30%] before:right-[30%] before:h-[2px]
                    before:bg-gradient-to-r before:from-transparent before:via-[#0a3e1a] before:to-transparent
                    before:shadow-[0_0_10px_1px_rgba(10, 62, 26, 0.88)] mt-10"
        >
          {/* Circular background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(10,62,26,0.15)_0%,rgba(10,46,26,0.05)_30%,rgba(20,20,20,0)_60%)]"></div>

          {/* Glow effect overlay */}
          <div className="absolute top-0 left-[30%] right-[30%] h-[3px] blur-[2px] bg-gradient-to-r from-transparent via-[#0a3e1a] to-transparent opacity-60"></div>

          {/* Content */}
          <div className="relative text-center space-y-4 md:space-y-6">
            <h2 className="text-gray-400 text-xs sm:text-sm md:text-base tracking-widest uppercase font-tenor">
              KEY DISCOVERY
            </h2>
            <p className="text-white text-[14px] sm:text-xl md:text-2xl font-medium leading-tight md:leading-10 font-tenor">
              Bringing a product like LegendX to life at this pace requires
              tight collaboration, indvidual—speed alone wasn’t enough.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="relative">
        <motion.div
          ref={solutionGrid}
          initial={"initial"}
          animate={solutionGridInView ? "enter" : "initial"}
          variants={borderAndContentReveal}
          className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff6d] to-transparent" // Added gradient for softer edges
        />
        <motion.div
          initial="initial"
          animate={solutionGridInView ? "enter" : "initial"}
          variants={contentReveal}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-14 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={
              solutionGridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <p
              className="text-[20px] md:text-[25px] mb-6 md:mb-0"
              style={{ textShadow: "0px 0px 10px #ffffff39" }}
            >
              Collabration &mdash; clear communication is everything
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={
              solutionGridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <p className="text-white/50 font-tenor">
              While the primary objective was to build LegendX efficiently, I
              quickly recognized the critical role of teamwork and
              collaboration. Many projects in this space fail to deliver at
              speed, but our team’s seamless communication and shared vision
              were essential in overcoming this challenge. <br /> <br />{" "}
              Effective collaboration was key—not just in completing tasks, but
              in blending different perspectives and expertise. It’s not enough
              to have individual skills; success comes from harmonizing efforts
              to create something greater than the sum of its parts. The goal
              wasn’t only to build a product quickly, but to craft a platform
              that was the result of true teamwork, where every contribution
              shaped a cohesive, high-performing solution.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
