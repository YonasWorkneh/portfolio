"use client";
import { Plus } from "lucide-react";
import TechStack from "./TechStack";
import { motion, useInView } from "framer-motion";
import anim from "../utils/anim";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const fadeInUp = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 50, // Moves up from 40px below
    },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.5, ease: "easeIn" },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 },
    },
  };
  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
  };
  const ref = useRef(null); // to trigger the animation as I get to the element

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
  }); // Ensures it triggers once when the element is visible
  const rotatingWords = ["websites.", "interfaces.", "applications."];
  const [wordIndex, setWordIndex] = useState(0);
  const [delayed, setDelayed] = useState(true);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.015,
        staggerDirection: -1,
      },
    },
  };

  // Letter variants for smoother animation
  const letterVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      filter: "blur(3px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(3px)",
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3500); // Longer duration for smoother perception

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(function () {
    setDelayed(false);
  }, []);

  return (
    <div className="px-5 sm:px-0">
      <motion.div
        className="relative p-2 pb-0 border-t-[1px] h-[550px] sm:h-[600px] 2xl:h-[calc(100dvh-200px)] lg:h-[calc(100dvh-100px)] border-l-[1px] border-r-[1px] border-[#ffffff76] rounded-t-3xl bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f211] to-[#f2f2f21a] mb-28 sm:mb-30 md:mb-40"
        {...anim(fadeInUp)}
      >
        <div className="relative rounded-t-3xl overflow-hidden bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-t-[1px] border-l-[1px] border-r-[1px] border-[#ffffff76] h-full">
          <div className="bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f280] to-[#f2f2f21a] w-full p-3 sm:p-4 md:p-5 flex justify-between">
            <div className="gap-1 sm:gap-1.5 hidden sm:flex">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28C840]" />
            </div>
            <div>
              <Plus className="text-white-300 size-4 sm:size-5" />
            </div>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 p-4 sm:p-8 md:p-14">
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[70px] 2xl:text-[100px] tracking-wider font-medium leading-tight">
              I design & develop
              <br />
              interactive{" "}
              <motion.span
                key={wordIndex}
                className="absolute inline-block pl-2 sm:pl-3 md:pl-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {rotatingWords[wordIndex].split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="absolute -bottom-1 left-5 sm:left-20 right-0 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: 1,
                    opacity: 0.7,
                    transition: {
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: delayed ? 0.2 + 1 : 0.2,
                    },
                  }}
                  exit={{
                    scaleX: 0,
                    opacity: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                />
              </motion.span>
            </h2>

            <div className="mt-[10rem] sm:mt-6 md:mt-[8rem]">
              <p className="text-base sm:text-xl md:text-2xl text-white text-right">
                Frontend lead @ Pluto Technologies.
                <br />
                <span className="text-base sm:text-lg md:text-xl text-gray-400 text-right">
                  Formerly at Markadank.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-200">
          <div className="animate-bounceColor transition-transform">
            <div className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-20 sm:h-30 md:h-40 absolute bottom-0 left-[-1px] w-3 sm:w-4 md:w-5 z-100 bg-[linear-gradient(to_bottom,#1c1c1c20,#1C1C1C_60%)]"></div>
        <div className="h-20 sm:h-30 md:h-40 absolute bottom-0 right-[-1px] w-3 sm:w-4 md:w-5 z-100 bg-[linear-gradient(to_bottom,#1c1c1c20,#1C1C1C_60%)]"></div>
      </motion.div>

      <motion.div
        className="relative p-2 mb-[150px] sm:p-3 border-t-[1px] h-[750px] sm:h-[850px] 2xl:h-[950px]  border-[1px] border-[#ffffff76] rounded-3xl bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f211] to-[#f2f2f21a]"
        ref={ref}
        initial="initial"
        animate={isInView ? "enter" : "initial"}
        variants={fadeIn}
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff76] h-full">
          <div className="bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f280] to-[#f2f2f21a] w-full p-3 sm:p-4 md:p-5 flex justify-between">
            <div className="gap-1 sm:gap-1.5 hidden sm:flex">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28C840]" />
            </div>
            <div>
              <Plus className="text-white-300 size-4 sm:size-5" />
            </div>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 h-fit sm:h-[600px] md:h-[700px] p-4 sm:p-6 md:p-8">
            <h2 className="text-base sm:text-2xl md:text-3xl lg:text-[40px] tracking-[2px] font-medium sm:leading-tight before:h-3 sm:before:h-4 md:before:h-5 before:w-3 sm:before:w-4 md:before:w-5 before:rounded-full before:bg-white before:shadow-[0px_0px_20px_#fff] before:conent-[''] before:inline-block before:absolute before:top-[28px] sm:before:top-5 md:before:top-6 relative before:left-0 px-4 sm:px-6 md:px-10 pl-6 md:pl-[45px]">
              <span>Building modern web applications with</span>
              <br className="hidden sm:block" />{" "}
              <span>cutting-edge technologies</span>
            </h2>
            <div className="mt-[-2rem] sm:mt-0 md:mt-2 lg:mt-4 2xl:mt-8">
              <TechStack />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
