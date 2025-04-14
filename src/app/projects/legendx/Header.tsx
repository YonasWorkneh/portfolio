import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";
import anim, { rotateUp } from "@/app/utils/anim";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

export default function Header({ active }: { active: string }) {
  const title = "LegendX";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [active]);

  return (
    <header className="mb-10 sm:mb-16 md:mb-20">
      <BackButton bgColor="bg-[#2a2a56a5]" />
      <div>
        <motion.h1 className="text-center px-2 sm:px-4 mt-[70px] sm:mt-[30px]">
          {title.split("").map((char, index) => (
            <motion.span
              {...anim(rotateUp(index / 20))}
              className="font-tenor text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] inline-block m-1 sm:m-2 md:m-3 lg:m-4"
              style={{ textShadow: "0px 0px 20px #ffffff52" }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 1.5, duration: 1, ease: "easeInOut" },
          }}
          className="text-center text-white/60 text-sm sm:text-base"
        >
          <span>Addis Ababa, </span> &mdash; December 2024
        </motion.p>
      </div>
      <div className="hidden md:block">
        <Nav active={active} />
      </div>
      <MobileNav
        active={active}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
    </header>
  );
}
