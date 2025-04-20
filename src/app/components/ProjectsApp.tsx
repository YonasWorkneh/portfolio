import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import StatusBar from "./StatusBar";
import { useEffect } from "react";

function ProjectsApp({
  onCloseProjectApp,
  isFirst,
  onSetIsFirst,
}: {
  onCloseProjectApp: () => void;
  isFirst: boolean;
  onSetIsFirst: (isFirst: boolean) => void;
}) {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 200], [1, 0]);
  const scale = useTransform(y, [0, 200], [1, 0.8]);
  const controls = useAnimation();

  const handleDragEnd = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -20) {
      await controls.start({
        y: 500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
      onCloseProjectApp();
    } else {
      await controls.start({ y: 0, opacity: 1, scale: 1 });
    }
  };

  return (
    <div className="p-3 h-full w-full bg-[#100f0f] relative">
      <StatusBar />
      <div className="pt-5 px-3 h-full overflow-hidden">
        <div
          className="scrollable-content h-full overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {isFirst ? (
            <LandingPage onExplore={() => onSetIsFirst(false)} />
          ) : (
            <>
              <h1 className="text-xl">Projects</h1>
              <div className="flex justify-center items-center mt-10 relative">
                <div
                  className="w-[150px] h-[200px] rounded-tl-lg rounded-bl-lg"
                  style={{
                    background: "url(/img/hagurash.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="b w-[150px] h-[200px] rounded-tl-lg rounded-bl-lg -ml-2"
                  style={{
                    background: "url(/img/wedding.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="w-[650px] h-[200px] scale-125 rounded-lg relative z-30"
                  style={{
                    background: `url(/img/black-cube.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="w-[150px] h-[200px] rounded-tr-lg rounded-br-lg relative"
                  style={{
                    background: "url(/img/gta.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="w-[150px] h-[200px] rounded-tr-lg rounded-br-lg -ml-2"
                  style={{
                    background: "url(/img/legendx.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </>
          )}
        </div>
        <motion.div
          className="w-full h-[.5rem] flex items-center justify-center absolute bottom-2 -ml-3"
          style={{
            y,
            opacity,
            scale,
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 200 }}
          onDragEnd={handleDragEnd}
        >
          <div className="w-[130px] h-[5px] rounded-full bg-[#e2e1e13c]"></div>
        </motion.div>
      </div>
    </div>
  );
}

function LandingPage({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="h-full flex flex-col items-center gap-10 justify-center">
      <h1 className="text-4xl font-bold text-center">
        <div className="relative flex items-center justify-center">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            className="absolute"
          >
            <motion.circle
              cx="90"
              cy="90"
              r="0"
              fill="none"
              stroke="#ffffff2b"
              strokeWidth="1"
              animate={{ r: 60 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 1,
              }}
            />
            <motion.circle
              cx="90"
              cy="90"
              r="0"
              fill="none"
              stroke="#ffffff2b"
              strokeWidth="1"
              animate={{ r: 80 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 1.2,
              }}
            />
          </svg>

          <motion.svg
            className="size-[70px] stroke-[2.5px] fill-[#ffffffc2] z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 1,
            }}
          >
            <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
          </motion.svg>
        </div>
      </h1>
      <p className="text-center text-[#ffffffc2] text-xl my-10">
        Since 2022 &mdash; Over 15+ projects
      </p>
      <button
        onClick={() => onExplore()}
        className="bg-[#000] p-2 rounded-full px-10 border border-[#edebeb1e] relative before:contents-[''] before:absolute before:-top-0 before:left-1/2 before:w-[50px] before:h-[1px] before:bg-[linear-gradient(to_right,_transparent,_#fffdfd7c,_transparent)] before:-translate-x-1/2 before:-translate-y-1/2"
      >
        Explore
      </button>
    </div>
  );
}

export default ProjectsApp;
