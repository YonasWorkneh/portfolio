import { scaleUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Highlight() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img1InView = useInView(img1, { once: true, margin: "-150px 0px" });
  const img2InView = useInView(img2, { once: true, margin: "-150px 0px" });
  const img3InView = useInView(img3, { once: true, margin: "-150px 0px" });
  const img4InView = useInView(img4, { once: true, margin: "-150px 0px" });

  return (
    <div>
      <div className="text-center flex justify-center mb-1">
        <div className="h-[60px] w-[60px] rounded-full bg-[radial-gradient(#4645452b,#00000038)] grid place-items-center border border-white/40 shadow-[0px_0px_10px_#ffffff37]">
          <div className="w-[10px] h-[10px] bg-white rounded-full shadow-[0px_0px_10px_#fff] "></div>
        </div>
      </div>
      <h2 className="before:h-4 font-tenor font-semibold text-sm text-[#ffffff54] px-20 relative text-center uppercase tracking-widest mt-2">
        Highlights
      </h2>
      <div className="mt-10">
        <motion.div
          ref={img1}
          initial="initial"
          animate={img1InView ? "enter" : "initial"}
          variants={scaleUp()}
          className="w-full"
        >
          <Image
            src={"/img/hero-scrolled.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img1InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>

        <motion.div
          ref={img2}
          initial="initial"
          animate={img2InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/poster.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
        <motion.div
          ref={img3}
          initial="initial"
          animate={img3InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/scrolled.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
        <motion.div
          ref={img4}
          initial="initial"
          animate={img4InView ? "enter" : "initial"}
          variants={scaleUp()}
        >
          <Image
            src={"/img/footer.png"}
            alt="home-page"
            width={1000}
            height={300}
            className={`border border-white/10 rounded-xl w-full mt-20 ${
              img3InView ? "opacity-90" : "opacity-70"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
}
