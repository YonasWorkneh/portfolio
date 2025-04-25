import { fadeInUp } from "@/app/utils/anim";
import { motion, useInView } from "framer-motion";
import { Clock, Lock } from "lucide-react";
import React, { useRef } from "react";

export default function Problem() {
  const cst1 = useRef(null);
  const cst2 = useRef(null);
  const cst3 = useRef(null);
  const probStmt = useRef(null);
  const probStmtInView = useInView(probStmt, {
    once: true,
    margin: "-100px 0px",
  });
  const cst1InView = useInView(cst1, { once: true });
  const cst2InView = useInView(cst2, { once: true });
  const cst3InView = useInView(cst3, { once: true });
  return (
    <div>
      <h1 className="relative pl-8 uppercase text-md text-[#ffffff54] font-tenor font-semibold before:content-[''] before:absolute before:top-[3px] before:left-0 before:inline-block before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:shadow-[0px_0px_10px_#fff]">
        The problem
      </h1>
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        ref={probStmt}
        animate={probStmtInView ? "enter" : "initial"}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          enter: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className="text-[20px] mt-10 sm:text-[40px]"
        style={{ textShadow: "0px 0px 10px #ffffff64" }}
      >
        Givin black cube secure digital pressence where it was most needed.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 sm:mt-20">
        <p
          className="text-[20px] md:text-[25px]"
          style={{ textShadow: "0px 0px 10px #ffffff39" }}
        >
          A pile of constraints
        </p>
        <div>
          <p className="text-white/50 font-tenor">
            In today&apos;s digital landscape, law firms struggle to establish a
            strong online presence that effectively communicates their
            expertise, credibility, and professionalism. Many legal websites are
            outdated, lack engaging visuals, and fail to provide a seamless user
            experience. Clients seeking legal assistance often face difficulty
            navigating complex information, booking consultations, and accessing
            essential resources. <br />
            <br />
            <span className="hidden sm:inline">
              Black Cube, a modern law firm, requires a website that not only
              reflects its reputation and authority but also enhances user
              engagement through interactive design, smooth animations, and an
              intuitive interface. The challenge is to create a
              high-performance, visually compelling, and secure web platform
              that delivers essential legal information, builds trust, and
              streamlines client interactions.
            </span>
          </p>
          <div className="mt-10">
            <motion.div
              ref={cst1}
              initial="initial"
              animate={cst1InView ? "enter" : "initial"}
              variants={fadeInUp(0.1)}
              className="flex gap-[2rem] bg-[linear-gradient(#e7838312,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <Clock
                color="rgba(241, 80, 80, 0.779)"
                className="size-[40px] sm:size-[25px]"
              />
              <p className="text-white/60 text-sm sm:text-base">
                With just three months, balancing interactive design,
                performance, and security required strict prioritization and
                efficiency.
              </p>
            </motion.div>
            <motion.div
              ref={cst2}
              initial="initial"
              animate={cst2InView ? "enter" : "initial"}
              variants={fadeInUp(0.3)}
              className="flex gap-[2rem] bg-[linear-gradient(#fb8b8b12,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <Lock
                color="rgba(241, 80, 80, 0.779)"
                className="size-[40px] sm:size-[25px]"
              />
              <p className="text-white/60 text-sm sm:text-base">
                Keeping the site secure was a challenge, requiring strong
                encryption, safe logins, and making sure there are no loop
                holes.
              </p>
            </motion.div>
            <motion.div
              ref={cst3}
              initial="initial"
              animate={cst3InView ? "enter" : "initial"}
              variants={fadeInUp(0.5)}
              className="flex gap-[2rem] bg-[linear-gradient(#fb8b8b12,transparent)] px-2 sm:px-5 py-10 rounded-xl shadow-[0px_0px_10px_#ff55550d] border border-[#ffffff0f] mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                strokeWidth="1.5"
                stroke="rgba(241, 80, 80, 0.779)"
                className="size-[40px] sm:size-[40px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>

              {/* <Clock color="rgba(241, 80, 80, 0.779)" /> */}
              <p className="text-white/60 text-sm sm:text-base">
                Making the site visually dynamic with GSAP and Three.js while
                keeping it fast and smooth was a challenge.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
