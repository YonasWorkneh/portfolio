"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathName = usePathname();
  const projects = useRef<HTMLAnchorElement>(null);
  const about = useRef<HTMLAnchorElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(
    function () {
      console.log(pathName);
    },
    [pathName]
  );

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget === projects.current)
      projects.current?.classList.add("projects");
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <header
        className="flex justify-between items-center p-4 sm:p-6 md:p-8 fixed w-full z-[20000]"
        // style={{ backdropFilter: "blur(5px)" }}
      >
        <div className="hidden sm:block">
          <h1 className="font-medium font-michroma text-[12px] sm:text-[13px] md:text-[14px] tracking-[2px]">
            Yonas Workneh
          </h1>
          <p className="text-gray-400 font-michroma text-[8px] sm:text-[9px] md:text-[10px] text-center mt-0.5 sm:mt-1">
            Software Engineer
          </p>
        </div>

        {/* Center nav on mobile, right on larger screens */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
          <nav className="flex gap-0.5 sm:gap-1 bg-[#2c2c2c7f] rounded-full p-[2px] sm:p-[3px] md:p-[4px] py-[4px] sm:py-[5px] md:py-[7px] backdrop-blur-lg hover:bg-[#3a3a3a51] relative border border-[#ffffff09]">
            <Link
              href={"/"}
              className={`projects group/item px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-michroma tracking-widest text-xs sm:text-sm`}
              ref={projects}
              onMouseEnter={handleHover}
            >
              Projects
            </Link>
            <Link
              href={"/about"}
              className={`about group/item px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-michroma text-xs sm:text-sm`}
              ref={about}
              onMouseEnter={handleHover}
            >
              About
            </Link>
            {/* spotlight */}
            <div
              className={`absolute bg-white h-[1px] sm:h-[1.5px] md:h-[2px] shadow-white -top-0 transition-all duration-500 ease-in ${
                pathName.includes("about")
                  ? "right-8 sm:right-9 md:right-10 w-3 sm:w-3.5 md:w-4"
                  : "left-[40px] sm:left-[45px] md:left-[55px] w-[14px] sm:w-[16px] md:w-[18px]"
              }`}
            ></div>
            {/* box  */}
            <div
              className={`active highlight bg-[#3C3C3C] h-[80%] rounded-full absolute top-0 -z-10 mt-[3px] sm:mt-[4px] md:mt-[5px] ${
                pathName.includes("about")
                  ? "right-0.5 sm:right-0.75 md:right-1 w-[76px] sm:w-[90px] md:w-[100px]"
                  : "left-0.5 sm:left-0.75 md:left-1 w-[96px] sm:w-[105px] md:w-[120px]"
              }`}
            ></div>
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 ml-2 sm:ml-3 md:ml-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="https://www.linkedin.com/in/yonas-workneh/"
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-michroma tracking-[1px]"
            >
              LinkedIn
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-michroma tracking-[2px]"
            >
              Resume
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#2c2c2c7f] backdrop-blur-lg border border-[#ffffff09] relative z-[20000]"
        >
          <motion.div
            className="relative w-6 h-6 flex flex-col justify-center gap-1.5 left-0"
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              closed: {
                transition: { duration: 0.3, ease: "easeInOut" },
              },
              open: {
                transition: { duration: 0.3, ease: "easeInOut" },
              },
            }}
          >
            <motion.span
              className="absolute left-0 top-1 inline-block h-[1px] bg-white"
              variants={{
                closed: {
                  width: "14px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
                open: {
                  width: "26px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
            />
            <motion.span
              className="absolute left-0 top-3 inline-block h-[1px] bg-white right-0"
              variants={{
                closed: {
                  width: "24px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
                open: {
                  width: "20px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
            />
            <motion.span
              className="absolute right-0 top-5 flex h-[1px] bg-white justify-end"
              variants={{
                closed: {
                  width: "14px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
                open: {
                  width: "26px",
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
            />
          </motion.div>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] sm:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-0 bottom-0 bg-[#1a1a1a] border-t border-[#ffffff09] rounded-t-3xl p-6 z-[20000] sm:hidden"
            >
              <div className="flex flex-col gap-6">
                {/* Links */}
                <motion.a
                  variants={itemVariants}
                  custom={0}
                  href="#"
                  className="flex items-center justify-between py-3 text-lg font-michroma tracking-wider hover:text-gray-300 transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  custom={1}
                  href="#"
                  className="flex items-center justify-between py-3 text-lg font-michroma tracking-wider hover:text-gray-300 transition-colors"
                >
                  Resume
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  custom={2}
                  className="h-px bg-[#ffffff09] my-2"
                />

                {/* Name */}
                <motion.div
                  variants={itemVariants}
                  custom={3}
                  className="flex flex-col items-center gap-1"
                >
                  <h1 className="font-medium font-michroma text-lg tracking-[2px]">
                    Yonas Workneh
                  </h1>
                  <p className="text-gray-400 font-michroma text-sm">
                    Software Engineer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
