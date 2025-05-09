"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Curve from "../components/Curve";
import PhotoFrame from "../components/PhotoFrame";
import Link from "next/link";

export default function Page() {
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return { ref, isInView };
  };

  const fadeIn = (isInView: boolean, delay: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.5, ease: "easeOut", delay },
  });

  const section1 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();
  const section5 = useScrollAnimation();
  const section6 = useScrollAnimation();
  const section7 = useScrollAnimation();
  const section8 = useScrollAnimation();
  const section9 = useScrollAnimation();
  const section10 = useScrollAnimation();
  return (
    <Curve>
      <main className="px-4 sph:px-10 lg:px-0 lg:max-w-[1000px] 2xl:max-w-[1350px] mx-auto pt-32 lg:pt-36 2xl:pt-48 bg-[radial-gradient(circle_closest-corner_at_50%_0,#36363625,#0000)]">
        <motion.h1 className="pt-[2px] uppercase text-sm lg:text-base 2xl:text-lg text-[#ffffff6a] before:contents-[''] before:inline-block before:size-[10px] lg:before:size-[15px] before:rounded-full tracking-widest before:bg-[#fff] before:shadow-[0px_0px_10px_#fff] relative before:absolute before:top-[0] before:translate-y-1/2 before:left-0 pl-5 lg:pl-10">
          About me
        </motion.h1>
        <motion.h2
          ref={section1.ref}
          {...fadeIn(section1.isInView, 1.1)}
          className="sm:text-4xl md:text-6xl lg:text-[45px] 2xl:text-[65px] tracking-wider font-semibold leading-tight mt-5 lg:mt-10 bg-[linear-gradient(92.66deg,_#c4c3c3,_#eaeaea_19.79%,_#a2a1a1_33.33%,_#c6c6c6_70.31%,_#606060);] py-3"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 20px #ffffff39",
          }}
        >
          I&apos;m passionate about crafting visually stunning, memorable
          digital experiences.
        </motion.h2>
        <div className="block lg:grid lg:grid-cols-2 my-10 lg:my-28">
          <motion.div
            // ref={section1.ref}
            {...fadeIn(section1.isInView, 1.2)}
            className="h-[450px] w-[350px] lg:h-[600px] lg:w-[400px] 2xl:h-[800px] 2xl:w-[600px]"
          >
            <PhotoFrame img="db.jpg" />
          </motion.div>
          <motion.div
            {...fadeIn}
            className="mt-16"
            // ref={section2.ref}
            {...fadeIn(section1.isInView, 1.3)}
          >
            <p className="text-[15px] lg:text-[22px] 2xl:text-2xl">
              This is me &mdash; alongside some flicks from recent moments,
              captured with heart and a hint of story.
            </p>
            <motion.div
              {...fadeIn}
              className="w-[350px] h-[450px] lg:h-[600px] lg:w-[400px] 2xl:h-[880px] 2xl:w-[600px]  pt-20"
            >
              <PhotoFrame img="photo.jpg" />
            </motion.div>
          </motion.div>
          <motion.div
            ref={section3.ref}
            {...fadeIn(section3.isInView, 0.4)}
            style={{ gridColumn: "1/3" }}
          >
            <div className="w-[350px] px-4 mt-20 lg:mt:0 lg:-mt-12 lg:w-[400px] 2xl:w-[600px]">
              <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
                My background in Software development
              </h3>
              <p className="mt-5 text-[#ffffffae] text-[14px] 2xl:text-[20px]">
                I started coding during the COVID lockdown, just looking for
                something to do. What began as an escape from boredom quickly
                turned into a passion before I even knew it. Each line of code
                pulled me deeper into the world of problem-solving. That spark
                led me to study Software Engineering at Addis Ababa Science &
                Technology University — and I’ve been building ever since.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={section4.ref}
            {...fadeIn(section4.isInView, 0.4)}
            className="mt-10"
          >
            <div className="h-[450px] w-[350px] lg:w-[400px] lg:h-[600px] 2xl:w-[600px] 2xl:h-[880px] mt-20 ">
              <PhotoFrame img="hackathon.jpg" />
            </div>
          </motion.div>
          <motion.div
            ref={section5.ref}
            {...fadeIn(section5.isInView, 0.4)}
            className="mt-20 lg:mt-48 w-[350px] lg:w-[400px] 2xl:w-[600px]"
          >
            <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
              Building Beyond Limits
            </h3>
            <p className="mt-5 text-[#ffffffae] mb-10 text-[14px] 2xl:text-[20px]">
              Hackathons have been more than competitions — Each challenge
              sharpened my skills, fueled my passion, and reminded me why I love
              building solutions that matter. <br /> <br /> Inclufi, a
              decentralized peer-to-peer lending platform powered by the XRP
              Ledger (XRPL), got me and my team this award at the 2024 Gresfet
              hackathon organized by Organization for Southern Cooperation
              bringing together countries from all across global south.
            </p>
            <Link
              href="https://www.linkedin.com/posts/yonas-workneh_gresfet-inclufi-osc-activity-7270213017693257730-jaK2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ-dbIBdOxFXFiW90WPW6qNL_ekKCKolmU"
              target="_blank"
              className="bg-[#000] p-2 rounded-full px-5 border border-[#ffffff36] relative before:contents-[''] before:absolute before:-top-0 before:left-1/2 before:w-[50px] before:h-[1px] before:bg-[linear-gradient(to_right,_transparent,_#fffdfd7c,_transparent)] before:-translate-x-1/2 before:-translate-y-1/2"
            >
              Learn more
            </Link>
            <motion.div
              ref={section6.ref}
              {...fadeIn(section6.isInView, 0.5)}
              className="mt-20 w-[350px] h-[450px] lg:w-[400px] 2xl:w-[600px] lg:h-[350px] 2xl:h-[550px]"
            >
              <PhotoFrame img="award.jpg" />
            </motion.div>
          </motion.div>
          <motion.div
            ref={section7.ref}
            {...fadeIn(section7.isInView, 0.5)}
            className="mt-20 lg:-mt-16  w-[350px] lg:w-[400px] 2xl:w-[600px]"
            style={{ gridColumn: "1/3" }}
          >
            <h3 className="lg:text-[18px] 2xl:text-xl font-semibold">
              Hobbies & Interests
            </h3>
            <p className="mt-5 text-[#ffffffae] mb-10 2xl:text-[20px] text-[14px]">
              When I&apos;m not coding, you&apos;ll often find me exploring new
              places, diving into a good book, or sharpening my skills over a
              game of competitive chess—a passion that&apos;s been close to my
              heart for years.
            </p>
          </motion.div>
          <motion.div
            ref={section8.ref}
            {...fadeIn(section8.isInView, 0.7)}
            className="w-[350px] lg:-mt-16"
          >
            <div className="mt-20 w-[350px] h-[450px] lg:w-[400px] lg:h-[600px] 2xl:w-[600px] 2xl:h-[880px]">
              <PhotoFrame img="chess.JPG" />
            </div>
          </motion.div>
          <motion.div
            ref={section9.ref}
            {...fadeIn(section9.isInView, 0.8)}
            className="mt-28 w-[350px] lg:w-[400px] 2xl:w-[600px]"
          >
            <h3 className="lg-text[18px] 2xl:text-xl font-semibold">
              EUSSF{" "}
              <span className="text-sm">
                (Ethiopian University Students Sports Festival)
              </span>
            </h3>
            <p className="mt-5 text-[#ffffffae] mb-10 2xl:text-[20px] text-[14px]">
              Back in 2024, I had the honor of captaining my university chess
              team in the finals — a proud and defining moment in my journey
              both as a player and a leader. That same year, I also received
              official recognition from FIDE and earned my first international
              rating, marking a major milestone in my competitive chess career.
            </p>
            <motion.div
              ref={section10.ref}
              {...fadeIn(section10.isInView, 0.9)}
              className="h-[350px] mt-20 lg:h-[350px] 2xl:h-[550px]"
            >
              <PhotoFrame img="chess.png" />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </Curve>
  );
}
