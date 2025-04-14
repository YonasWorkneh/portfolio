import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import anim, { fadeInUp } from "@/app/utils/anim";

export default function Banner() {
  return (
    <div className="h-full w-full flex items-center justify-center py-2 sm:py-4 px-2 sm:px-4">
      <div className="relative w-full max-w-[800px]">
        <motion.div {...anim(fadeInUp(1.5, 0.8))}>
          <Image
            src={"/img/blackcube/home.png"}
            alt="home"
            className="border border-white/10 rounded-lg w-full"
            width={800}
            height={1000}
            priority
          />
        </motion.div>
        <motion.div
          {...anim(fadeInUp(1.75, 0.8))}
          className="border border-white/10 rounded-md absolute top-[65%] right-[-5px] sm:top-[30%] md:top-[300px] sm:right-0 md:right-[-100px] 
                      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[280px] 
                      h-auto 
                      p-2 sm:p-6 md:p-6 
                      bg-[radial-gradient(#46454555,#00000097)]"
        >
          <div className="flex gap-2 items-center">
            <Image
              src={"/img/blackcube/interactive.png"}
              alt="interactive-design"
              width={40}
              height={40}
              className="size-[25px] sm:size-[30px] md:size-[35px]"
            />
            <span
              className="font-tenor tracking-wider text-white/60 text-[10px] sm:text-xs md:text-sm"
              style={{ textShadow: " 0px 0px 10px #ffffff6e" }}
            >
              Interactive Design
            </span>
          </div>
          <p className="text-white/40 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2">
            Modern interactive design with gsap and three.js.
          </p>
          <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
            <Image
              src={"/img/blackcube/gsap.avif"}
              alt="interactive-design"
              className="size-[25px] sm:size-[30px] md:size-[35px] rounded-full object-cover object-center"
              width={160}
              height={60}
            />
            <span className="size-[25px] sm:size-[30px] md:size-[35px] bg-white rounded-full flex justify-center items-center">
              <Image
                src={"/img/blackcube/three.png"}
                alt="interactive-design"
                width={30}
                height={30}
                className="size-[15px] sm:size-[20px] md:size-[25px]"
              />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
