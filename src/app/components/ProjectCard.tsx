"use client";
import { MoveRight } from "lucide-react";
import { ReactElement, ElementType, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: ReactElement;
  imgSrc?: string;
  projLink?: string;
  bgGradient?: string;
  children?: ReactElement;
  as?: ElementType; // Allows customization of wrapper component
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  projLink,
  bgGradient,
  children,
  as: Component = "div", // Default to <div> but can be overridden
}: ProjectCardProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0 },
    },
  };
  const ref = useRef(null); // to trigger the animation as I get to the element
  const isInView = useInView(ref, { once: true, margin: "-150px 0px" }); // Ensures it triggers once when the element is visible

  return (
    <motion.div
      className="relative p-3 border-[1px] h-[600px] lg:h-[calc(100dvh-120px)] 2xl:h-[calc(100dvh-120px)]border-[1px] border-[#ffffff76] rounded-3xl bg-[linear-gradient(rgb(30,_29,_29),_rgb(28,_28,_28))] mb-[200px]"
      ref={ref}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
      variants={fadeIn}
    >
      <Component
        href={projLink ? projLink : null}
        className={`${projLink ? "group" : ""} h-full ${
          bgGradient ? bgGradient : ""
        }`}
      >
        <div
          className={`relative rounded-3xl overflow-hidden  border-[1px] border-[#ffffff76] h-full pb-1 transition-all px-5 py-10 sm:p-14`}
        >
          <header>
            <div className="flex justify-between">
              <h2 className="text-4xl md:text-[40px] font-medium leading-tight tracking-tight drop-shadow-md font-tenor">
                {title}
              </h2>
              {projLink && (
                <button className="group-hover:translate-x-3 transition-transform">
                  <MoveRight size={45} />
                </button>
              )}
            </div>
            <p
              className={`text-2xl sm:text-4xl md:text-[23px] font-medium leading-tight mt-5 text-[#8d8c8caf] ${
                projLink ? "group-hover:text-[#c7c7c7e3]" : ""
              } font-tenor`}
            >
              {description}
            </p>
          </header>
          <div
            className={`absolute bottom-0 left-0 px-3 sm:static sm:p-14 pb-0 sm:pb-10  h-[300px] sm:h-full w-full ${
              projLink
                ? "group-hover:translate-y-[-10px] transition-transform"
                : ""
            }`}
          >
            {children ? (
              children
            ) : (
              <div
                className="w-full h-[300px] sm:h-full bg-cover bg-no-repeat rounded-xl py-2"
                style={{ backgroundImage: `url(${imgSrc})` }}
              ></div>
            )}
          </div>
        </div>
      </Component>
    </motion.div>
  );
}
