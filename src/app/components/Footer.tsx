import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [displayText, setDisplayText] = useState("");
  const words = ["connect", "work", "grow"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let isDeleting = false;
    const currentWord = words[index];

    const animateText = () => {
      if (!isDeleting) {
        if (currentIndex <= currentWord.length) {
          setDisplayText(currentWord.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(animateText, 200);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(animateText, 1500);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentWord.slice(0, currentIndex - 1));
          currentIndex--;
          timeoutId = setTimeout(animateText, 150);
        } else {
          isDeleting = false;
          setIndex((prev) => (prev + 1) % words.length);
          timeoutId = setTimeout(animateText, 700);
        }
      }
    };

    timeoutId = setTimeout(animateText, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  return (
    <footer className="w-full border-t border-[#ffffff27]">
      <div className="max-w-[1440px] mx-auto py-10 sm:py-20 px-8 sm:px-0 ">
        <div>
          <div className="flex items-center gap-10 justify-center sm:justify-start flex-col sm:flex-row">
            <motion.svg
              className="size-[150px] stroke-[#ffffff8a] stroke-[3px] animate-infiniteDraw ml-[-10px]"
              style={{
                fillOpacity: 0,
                strokeDasharray: 4500,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
            </motion.svg>

            <div className="text-white/90 text-[2rem] font-michroma h-20 sm:text-[4rem] flex gap-2 ml-[25px] sm:ml-0">
              Let&apos;s{" "}
              <div className="sm:ml-4 inline-flex min-w-[190px] font-michroma h-16 ml-0 sm:min-w-[280px]">
                <span className="font-michroma items-center text-white/90 text-[2rem] sm:text-[4rem] capitalize">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className={`ml-1 font-michroma text-white/90 text-[2rem] sm:text-[4rem]`}
                >
                  |
                </motion.span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-lg">Main</p>
              <Link href={"/"} className="text-white/70 hover:text-white  ">
                Projects
              </Link>
              <Link href={"/about"} className="text-white/70 hover:text-white">
                About
              </Link>
            </div>

            <div>
              <p className="text-left text-lg sm:text-center">Contact</p>
              <div className="flex gap-6 mt-4">
                <a
                  href={"https://www.linkedin.com/in/yonas-workneh/"}
                  className="text-white/70 hover:text-white"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon w-[23px] sm:w-[31px] h-[23px] sm:h-[31px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-9c34c54e=""
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                  </svg>
                </a>
                <a
                  href={"https://www.github.com/YonasWorkneh"}
                  className="text-white/70 hover:text-white"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon w-[23px] sm:w-[31px] h-[23px] sm:h-[31px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-9c34c54e=""
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    ></path>
                  </svg>
                </a>
                <a
                  href={"https://t.me/yonna_hill"}
                  className="text-white/70 hover:text-white"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="icon w-[23px] sm:w-[31px] h-[23px] sm:h-[31px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 2L2.5 10.5c-.7.3-.7.9 0 1.1L7 14.3l2.5 7.2c.3.7.9.7 1.2.1l3-5.1 5.6 4.3c.7.3 1.2-.1 1.3-.8L23.9 3c.1-.8-.5-1.2-1.2-1zm-5 16l-3.5-2.7-2.2 3.7-.7-4.4 7.6-7.1-9.3 5.9-4.1-1.3L20 4l-3 14z"
                    ></path>
                  </svg>
                </a>

                <a
                  href={"https://x.com/yonna_hil"}
                  className="text-white/70 hover:text-white"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon w-[23px] sm:w-[31px] h-[23px] sm:h-[31px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                    data-v-9c34c54e=""
                  >
                    <path
                      fill="currentColor"
                      d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-10">
          <p className="text-white/70">
            &copy; 2025 Yonas Workneh. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
