import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import StatusBar from "./StatusBar";

function ProjectsApp({ onCloseProjectApp }: { onCloseProjectApp: () => void }) {
  const y = useMotionValue(0); // Track vertical position
  const opacity = useTransform(y, [0, 200], [1, 0]); // Fade out as swiped down
  const scale = useTransform(y, [0, 200], [1, 0.8]); // Scale down as swiped down
  const controls = useAnimation(); // Animation controls
  const handleDragEnd = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -20) {
      // If swipe distance exceeds threshold, animate out
      await controls.start({
        y: 500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
      onCloseProjectApp(); // Call the close function
    } else {
      // Reset position if swipe is below threshold
      await controls.start({ y: 0, opacity: 1, scale: 1 });
    }
  };

  return (
    <div className="p-3 h-full w-full bg-[#100f0f] relative">
      <StatusBar />
      <div className="pt-5 px-3 h-full overflow-hidden">
        {/* Scrollable content wrapper */}
        <div
          className="scrollable-content h-full overflow-y-auto"
          style={{
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For Internet Explorer and Edge
          }}
        >
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
        </div>
        {/* Swipe section */}
        <motion.div
          className="w-full h-[.5rem] flex items-center justify-center absolute bottom-2 -ml-3"
          style={{
            y, // Bind motion value to vertical position
            opacity, // Bind opacity transformation
            scale, // Bind scale transformation
          }}
          drag="y" // Enable vertical dragging
          dragConstraints={{ top: 0, bottom: 200 }} // Limit drag range
          onDragEnd={handleDragEnd} // Handle drag end
        >
          <div className="w-[130px] h-[5px] rounded-full bg-[#e2e1e17b]"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsApp;
