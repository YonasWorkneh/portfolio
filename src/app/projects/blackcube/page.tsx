"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

// components

import Curve from "@/app/components/Curve";
import { fadeIn } from "@/app/utils/anim";
import Frame from "../components/Frame";
import Header from "./Header";
import Banner from "./Banner";
import Overview from "./Overview";
import Highlight from "./Highlight";
import Problem from "./Problem";
import Solution from "./Solution";

export default function Page() {
  const [active, setActive] = useState(""); // existing state

  // sections
  const frame = useRef(null);
  const overview = useRef<HTMLElement>(null);
  const highlights = useRef(null);
  const problem = useRef(null);
  const solution = useRef(null);
  const serviceRef = useRef<HTMLVideoElement>(null);
  const overviewAnim = useRef<HTMLElement>(null);

  // observer for elements
  const frameInView = useInView(frame, {});
  const overviewInView = useInView(overview, { margin: "-200px 0px" });
  const overviewAnimInView = useInView(overviewAnim, {
    margin: "-200px 0px",
    once: true,
  });
  const highlightsInView = useInView(highlights, {});
  const problemInView = useInView(problem, { margin: "-300px 0px" });
  const solutionInView = useInView(solution, {});
  const servicesInView = useInView(serviceRef, {});

  useEffect(() => {
    if (frameInView) setActive("");
    if (overviewInView) setActive("overview");
    if (highlightsInView) setActive("highlights");
    if (problemInView) setActive("problem");
    if (solutionInView) setActive("solution");
    if (servicesInView && serviceRef.current) serviceRef.current.play();
  }, [
    frameInView,
    overviewInView,
    highlightsInView,
    problemInView,
    solutionInView,
    serviceRef,
    servicesInView,
  ]);

  return (
    <Curve>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 bg-[radial-gradient(#46454555,#00000097)] min-h-[100vh] relative">
        <div className="max-w-[1440px] mx-auto">
          <section className="pt-8 sm:pt-12 md:pt-16 min-h-[100vh]" ref={frame}>
            <Header active={active} />
            <Frame>
              <Banner />
            </Frame>
          </section>
          {/* overview */}
          <motion.section
            id="overview"
            className="py-10 rounded-3xl my-28 px-4"
            ref={(el) => {
              overview.current = el;
              overviewAnim.current = el;
            }}
            initial="initial"
            animate={overviewAnimInView ? "enter" : "initial"}
            variants={fadeIn}
          >
            <Overview />
          </motion.section>

          <section
            id="highlights"
            className="py-10 px-4 sm:px-8 md:px-20 lg:px-40 min-h-dvh bg-[#111111b4] rounded-[25px] border border-white/10"
            ref={highlights}
          >
            <Highlight />
          </section>
          <section
            id="problem"
            className="py-10 rounded-3xl my-28 px-4"
            ref={problem}
          >
            <Problem />
          </section>
          <section
            id="solution"
            className="rounded-3xl  my-16 sm:my-28 px-4"
            ref={solution}
          >
            <Solution />
          </section>
        </div>
      </div>
    </Curve>
  );
}
