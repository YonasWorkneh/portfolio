import { useRef } from "react";
import {
  motion,
  PanInfo,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import StatusBar from "./StatusBar";

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

  const filterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  const sideImageVariant = {
    hidden: (dir: "left" | "right") => ({
      x: dir === "left" ? -100 : 100,
      opacity: 0,
      rotate: dir === "left" ? -5 : 5,
    }),
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const centerImageVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1.2,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5, type: "spring" },
    },
  };
  const filters = [
    {
      label: "All",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffa6"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
          />
        </svg>
      ),
    },
    {
      label: "Recents",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffa6"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      label: "Fullstack",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffa6"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>
      ),
    },
    {
      label: "Mobile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffa6"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
  ];

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

              {/* Top Image Section */}
              <div className="flex justify-center items-center mt-10 relative">
                {[
                  { src: "/img/hagurash.jpeg", dir: "left" },
                  { src: "/img/wedding.png", dir: "left" },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    custom={img.dir}
                    variants={sideImageVariant}
                    initial="hidden"
                    animate="visible"
                    className={`w-[150px] h-[200px] ${
                      i === 1 ? "-ml-2" : ""
                    } rounded-tl-lg rounded-bl-lg`}
                    style={{
                      background: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
                <motion.div
                  variants={centerImageVariant}
                  initial="hidden"
                  animate="visible"
                  className="w-[650px] h-[200px] rounded-lg relative z-30 scale-110"
                  style={{
                    background: "url(/img/black-cube.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    scale: 1.1,
                  }}
                />
                {[
                  { src: "/img/gta.png", dir: "right" },
                  { src: "/img/legendx.png", dir: "right" },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    custom={img.dir}
                    variants={sideImageVariant}
                    initial="hidden"
                    animate="visible"
                    className={`w-[150px] h-[200px] ${
                      i === 1 ? "-ml-2" : ""
                    } rounded-tr-lg rounded-br-lg`}
                    style={{
                      background: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </div>

              {/* Filters */}
              <div className="flex gap-3 mt-10 justify-between">
                {filters.map((filter, i) => (
                  <motion.button
                    key={filter.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={filterVariants}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="bg-[#000] size-10 rounded-full border border-[#edebeb32] flex items-center justify-center">
                      {filter.icon}
                    </span>
                    <span className="text-xs">{filter.label}</span>
                  </motion.button>
                ))}
              </div>
              {/* projects */}
              <div className="my-10">
                <ProjectCard
                  imageUrl="/img/pjapp/bcube.png"
                  label="Black cube"
                />
                <ProjectCard imageUrl="/img/pjapp/raja.png" label="Raja Giri" />
                <ProjectCard
                  imageUrl="/img/pjapp/legendx.png"
                  label="LegendX"
                />
                <ProjectCard imageUrl="/img/pjapp/gta.png" label="GTA VI" />
                <ProjectCard imageUrl="/img/epicure.png" label="Epicure" />
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

function ProjectCard({ imageUrl, label }: { imageUrl: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10"
    >
      <div
        className="w-full h-[200px] bg-cover bg-center bg-no-repeat rounded-md py-2 border border-[#ffffff1a]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p className="mt-1 text-white/70">{label}</p>
    </motion.div>
  );
}

export default ProjectsApp;
