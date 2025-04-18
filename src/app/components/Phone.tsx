import { ReactNode, useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  PanInfo,
} from "framer-motion";
import StatusBar from "./StatusBar";
import { ArrowUpLeft } from "lucide-react";

interface PhoneProps {
  children: ReactNode;
  className?: string;
  onClosePhone?: () => void;
}

const greetings = [
  "ሰላም",
  "Hello",
  "Hola",
  "Привет",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "你好",
  "مرحبا",
  "नमस्ते",
  "Hallo",
  "안녕하세요",
  "สวัสดี",
  "Γεια σας",
  "שלום",
];

export default function Phone({
  children,
  className = "",
  onClosePhone,
}: PhoneProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isFirst, setIsFirst] = useState(true);
  const closeBtn = useRef<HTMLDivElement>(null);
  const time = currentTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  // Motion values for swipe animation
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 200], [1, 0]);
  const scale = useTransform(y, [0, 200], [1, 0.8]);
  const controls = useAnimation();
  const [showIndicator, setShowIndicator] = useState(true);

  const handleGreetingComplete = useCallback(() => {
    controls
      .start({
        y: -500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      })
      .then(async () => {
        setIsFirst(false);
        await controls.start({ y: 0, opacity: 1, scale: 1 });
      });
  }, [controls]);

  // Handle greeting animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isFirst) {
      interval = setInterval(() => {
        setCurrentGreeting((prev) => {
          if (prev + 1 >= greetings.length) {
            clearInterval(interval);
            handleGreetingComplete();
            return prev;
          }
          return prev + 1;
        });
      }, 160);
    }
    return () => clearInterval(interval);
  }, [isOpen, isFirst, controls, handleGreetingComplete]);

  useEffect(() => {
    const handleClose = async () => {
      onClosePhone?.();
      setShowContent(false);
      await controls.start({ y: 2000, opacity: 1, scale: 1 });
      closeBtn.current?.style.setProperty("width", "4px");
    };
    if (!isOpen) {
      handleClose();
    } else {
      closeBtn.current?.style.setProperty("width", "8px");
    }
  }, [isOpen, controls, onClosePhone]);

  // Update time and date
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 200) {
      await controls.start({
        y: -500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
      setShowContent(true);
    } else {
      await controls.start({ y: 0, opacity: 1, scale: 1 });
    }
  };

  const handleBottomSwipe = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -50) {
      await controls.start({
        y: -500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
      setShowContent(true);
    } else {
      await controls.start({ y: 0, opacity: 1, scale: 1 });
    }
  };

  return (
    <div
      className={`relative mx-auto border-[12px] border-[#1e1d1d] rounded-[2.5rem] shadow-xl ring-2 ring-white/10 ${className} [clip-path:inset(-1px_-1px_-1px_-1px)]`}
    >
      {/* Camera and sensors */}
      <div
        className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] ${
          isOpen ? " bg-[#000000]" : " bg-[#2e2c2c81]"
        } rounded-3xl flex items-center justify-end gap-2  pr-4`}
      >
        <div className="w-3 h-3 rounded-full bg-[#2e2d2d] border-2 border-[#2d2d2d]"></div>
      </div>

      {/* Open Control */}
      <div
        className="absolute -right-1 top-[100px] w-1 h-16 bg-[#1e1d1d] rounded-r-lg ring-1 ring-white/10 group hover:w-2 active:scale-95 transition-all duration-200 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowIndicator(false);
        }}
        ref={closeBtn}
      >
        {showIndicator && (
          <span className="absolute -bottom-[28px] -left-2 animate-bounceLeft transition-transform z-50 rotate-[23deg]">
            <ArrowUpLeft size={30} />
          </span>
        )}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#2d2d2d] rounded-r-lg group-hover:opacity-0 transition-opacity duration-200"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#4a4a4a] to-[#2d2d2d] rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>

      {/* Mute Control */}
      <div className="absolute -left-1 top-[100px] w-1 h-6 bg-[#1e1d1d] rounded-l-lg ring-1 ring-white/10 group hover:w-3 active:scale-95 transition-all duration-200">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#2d2d2d] rounded-l-lg group-hover:opacity-0 transition-opacity duration-200"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#4a4a4a] to-[#2d2d2d] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
      <div className="absolute -left-1 top-[180px] w-1 h-12 bg-[#1e1d1d] rounded-l-lg ring-1 ring-white/10 group hover:w-3 active:scale-95 transition-all duration-200">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#2d2d2d] rounded-l-lg group-hover:opacity-0 transition-opacity duration-200"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#4a4a4a] to-[#2d2d2d] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
      <div className="absolute -left-1 top-[260px] w-1 h-12 bg-[#1e1d1d] rounded-l-lg ring-1 ring-white/10 group hover:w-3 active:scale-95 transition-all duration-200">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#2d2d2d] rounded-l-lg group-hover:opacity-0 transition-opacity duration-200"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#4a4a4a] to-[#2d2d2d] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>

      {/* Screen content */}
      <div
        className={`w-full h-full rounded-[2rem] overflow-hidden transition-colors duration-500 ${
          showContent || isOpen
            ? "bg-[url('/img/phone-bg.jpg')] bg-cover bg-center"
            : "bg-[#00000080]"
        }`}
      >
        {showContent ? (
          children
        ) : isOpen ? (
          isFirst ? (
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center bg-white/20 absolute rounded-[2.5rem]"
              style={{ backdropFilter: "blur(5px)", y, opacity, scale }}
              animate={controls}
              // style={{}}
            >
              <h2 className="text-4xl font-bold text-white animate-fade-in-out">
                {greetings[currentGreeting]}
              </h2>
            </motion.div>
          ) : (
            <motion.div
              className={`w-full h-full flex flex-col p-3 absolute  bg-cover bg-center top-0 left-0 rounded-[2rem] ${y} ${opacity} ${scale}`}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={controls}
            >
              {/* Status Bar */}
              <StatusBar />
              {/* Time and Date */}
              <div className="flex-1 flex flex-col items-center mt-20">
                <p className="text-2xl text-white/60">
                  {currentDate.toLocaleDateString([], {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h1 className="text-[90px] font-bold text-white mb-2">
                  {time.toLowerCase().includes("pm") ||
                  time.toLowerCase().includes("am")
                    ? time.slice(0, -2)
                    : time}
                </h1>
              </div>

              {/* Swipe up text */}
              <div className="w-full h-12 flex items-center justify-center mb-[-35px]">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="text-sm text-white/40"
                >
                  Swipe up to open
                </motion.p>
              </div>

              {/* Bottom swipe section */}
              <motion.div
                className="w-full h-20 flex items-center justify-center -mb-[30px]"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleBottomSwipe}
              >
                <motion.div
                  className="w-[130px] h-[5px] rounded-full bg-[#e2e1e1]"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
          )
        ) : null}
      </div>
    </div>
  );
}
