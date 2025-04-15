"use client";

import { useRef, useState } from "react";
import BoardSvg from "./BoardSvg";
import { motion } from "framer-motion";

export default function TechStack() {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = useRef<HTMLDivElement>(null);
  const buttons = useRef<HTMLDivElement>(null);

  const scrollToSkill = (skill: number) => {
    if (skills.current) {
      const sectionWidth = skills.current.clientWidth;
      const newScroll = skill * sectionWidth;

      skills.current.scrollTo({
        left: skill === 2 ? newScroll + 50 : newScroll,
        behavior: "smooth",
      });
      if (buttons.current) {
        buttons.current.style.left = `${newScroll + 140}px`;
        console.log(buttons.current.style.left);
        console.log(buttons.current.style.top);
      }
      setActiveSkill(skill);
    }
  };

  return (
    <div className="flex items-center w-full justify-center relative bg-[radial-gradient(circle,rgba(255, 255, 255, 0.794)_0%,rgba(0,0,0,0)_60%)] mt-2 sm:mt-5 lg:mt-[1.5rem] 2xl:mt:14">
      {/* main board -- svg */}
      <BoardSvg />
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(74, 158, 255, 0.312) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(74, 255, 74, 0.25) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(255, 204, 0, 0.288) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(74, 158, 255, 0.421) 50%, transparent 100%)",
          ],
        }}
        transition={{
          background: {
            duration: 8,
            times: [0, 0.33, 0.66, 1],
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute bg-[#111] rounded-lg px-[1rem] py-[1rem] top-[100px] shadow-[0px_0px_100px_#ffffff18] z-30 border border-white/10"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <span
          className="bg-[linear-gradient(92.66deg,_#919191,_#eaeaea_19.79%,_#828181_33.33%,_#c6c6c6_70.31%,_#606060);] text-xl sm:text-2xl font-bold"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Full Stack Devlopement
        </span>
        {/* top-pins */}
        <div>
          <div className="absolute top-[-10px] left-[66px]  py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[90px]  py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[114px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[138px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[162px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[186px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[-10px] left-[210px] py-[5px] px-[3px] rounded-t-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* bottom-pins */}
        <div>
          <div className="absolute bottom-[-10px] left-[66px]  py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[90px]  py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[114px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[138px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[162px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[186px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute bottom-[-10px] left-[210px] py-[5px] px-[3px] rounded-b-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* left-pins */}
        <div>
          <div className="absolute top-[27px] left-[-10px]  px-[5px] py-[3px] rounded-l-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[47px] left-[-10px]  px-[5px] py-[3px] rounded-l-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
        {/* right-pins */}
        <div>
          <div className="absolute top-[27px] right-[-10px]  px-[5px] py-[3px] rounded-r-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
          <div className="absolute top-[47px] right-[-10px]  px-[5px] py-[3px] rounded-r-[1px] bg-[linear-gradient(180deg,_#9a9a9a,_#686868_33.33%,_#848484_66.67%,_#3a3a3a)]"></div>
        </div>
      </motion.div>
      <div
        className="flex justify-between absolute w-[320px] sm:w-full gap-8 top-[260px] overflow-x-hidden overflow-y-hidden h-[380px]"
        // drag="x"
        // dragConstraints={{ top: 0, left: 0 }}
        // dragElastic={0.2}
        // onDragEnd={handleDragEnd}
        // animate={controls}
        // style={{ x }}
        ref={skills}
      >
        {/* frontend devlopement */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:right-[5.5rem] before:w-20 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_rgb(0,_216,_255),_rgb(0,_135,_255),rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg shadow-[0px_0px_10px_#ffffff24]">
            <div className="px-6 py-4 flex gap-4 items-center">
              {/* react-svg */}
              <svg
                fill="none"
                height="40"
                viewBox="0 0 45 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_668_4417)">
                  <path
                    d="M22.1988 24.2327C24.5341 24.2327 26.4273 22.3376 26.4273 19.9999C26.4273 17.6622 24.5341 15.7671 22.1988 15.7671C19.8635 15.7671 17.9703 17.6622 17.9703 19.9999C17.9703 22.3376 19.8635 24.2327 22.1988 24.2327Z"
                    fill="#149ECA"
                  />
                  <path
                    d="M22.1989 29.5254C33.8755 29.5254 43.3413 25.2615 43.3413 20.0016C43.3413 14.7417 33.8755 10.4778 22.1989 10.4778C10.5223 10.4778 1.05652 14.7417 1.05652 20.0016C1.05652 25.2615 10.5223 29.5254 22.1989 29.5254Z"
                    stroke="#149ECA"
                    strokeWidth="2.11639"
                  />
                  <path
                    d="M13.9596 24.7643C19.798 34.8869 28.2198 40.9609 32.7703 38.331C37.3208 35.7011 36.2768 25.3631 30.4385 15.2405C24.6002 5.11786 16.1784 -0.956154 11.6279 1.67378C7.07737 4.30371 8.12133 14.6417 13.9596 24.7643Z"
                    stroke="#149ECA"
                    strokeWidth="2.11639"
                  />
                  <path
                    d="M13.9598 15.2396C8.12152 25.3622 7.07756 35.7002 11.6281 38.3301C16.1786 40.9601 24.6004 34.886 30.4387 24.7634C36.277 14.6408 37.321 4.30283 32.7705 1.6729C28.2199 -0.95703 19.7981 5.11699 13.9598 15.2396Z"
                    stroke="#149ECA"
                    strokeWidth="2.11639"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_668_4417">
                    <rect fill="white" height="40.0001" width="44.399" />
                  </clipPath>
                </defs>
              </svg>
              {/* nextJs - svg  */}
              <svg
                height="40"
                viewBox=".5 -.2 1023 1024.1"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
              </svg>
            </div>
            <article className="p-4 py-[45px]">
              <p className="text-xl font-bold mb-2 text-[rgb(105,178,241)]">
                Frontend Devlopement
              </p>
              <p className="text-white/50 text-sm">
                Specializing in React and Next.js, building responsive and
                performant user interfaces with modern tools like Tailwind CSS
                and TypeScript. and React native for mobile app development.
              </p>
            </article>
          </div>
        </div>
        {/* backend development */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:left-[9.4rem] before:w-20 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_rgb(53,160,54),_rgb(37,111,38),rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg relative shadow-[0px_0px_10px_#ffffff24]">
            {/* node js svg */}
            <div className="absolute top-[-10px] left-4">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path fill="url(#a)" d="M0 0h64v64H0z" />
                <defs>
                  <pattern
                    id="a"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#b" transform="scale(.002)" />
                  </pattern>
                  <image
                    id="b"
                    width="500"
                    height="500"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAKNtJREFUeNrs3V1wXNdhH/CzAEiKlChSclw7E6uE4mamnnYqKu2DHzwWqExix40jKqmb1G5M2OPJyIkdQW3SGXemFfRQ5yGZCdVJa7vVWGBa2VakSFTUxI0niUCPH/Jmqi99UgMmsWVJlkSQ+FzsR+/BniWXIBbYXeznxe8nrRZaALvYs3v3f893oVqtBgBgtBUEOgAIdABAoAMAAh0AEOgAINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6ACDQAQCBDgACHQAQ6ACAQAcABDoACHQAQKADAAIdABDoACDQAQCBDgAIdABAoAOAQFcKACDQAQCBDgAIdABAoAOAQAcABDoAINABAIEOAAIdABDoAIBABwAEOgAIdABAoAMAAh0AEOgAINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6ACDQAQCBDgACHQAQ6ACAQAcABDoACHSBDgACHQAQ6ACAQAcABDoACHQAQKADAAIdABDoACDQAQCBDgAIdABAoAOAQAcABDoAINABAIEOAAIdABDoAIBABwAEOgAIdABAoAMAAh0AEOgAINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0JUCAAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6QI+duv/9J7Or09llMrvMv/SXfzWnVBDoAKMX6AvZ1YmGmy5ll+ks2OeVDgIdYDTCfCq7eqnJty9kl5ks2C8qKfJkTBEA+8x92eW7WejPZZdJxYEaOsBo1tAbLWaXs/GS1dgvKznU0AFG07Hs8mh2WchOAqYVBwIdYPSD/cks1C+m2j2MHE3uQO600eTeTBw4F0fELyhN1NABRlccOPfXaeDcccWBGjrAaNbQGxk4hxo6QA7UB85dNHAONXSA0a2hb/VyqC1MM6+kUUMHGF33xJOF2L+uKBDoAKPvTBbqs4oBgQ4w+qYVAQIdYPSdUAQIdABAoAMAAh0ABDoAINABAIEOAAh0ABDoAIBABwAEOgAg0AFAoAMAAh0AEOgAgEAHAIEOAAh0AECgAwACHQAEOgAg0AEAgQ4ACHQAEOgAgEAHAAQ6ACDQAUCgAwACHQAQ6ACAQAcAgQ4ACHQAQKADAJ2bUATD79T975/KruJlIbucf+kv/+qyUgFAoI9OkM9kV7PZ5VjDzU9mt5/LrmcEe2/98lce+LFDEwe+MFYY++mxQuH2cilcubq68h//6DdefFrp9O0YOJ1dncwul9PJ7IJS6Uu5H0+fPdPp82cxlr/PneFWqFarSmE4a+Rz2eXEDj8WD7Cz2cE1q8S679PnPvbEnbcd/fR4YbwQD5F4nJTL1XDlykpY2Vh/5crayi/8r3/zv/+PkuppkJ/d5hho6WQ2HUMv9eNvzf6Wwj6oSPjcEei0eSBNpg+xB9r4tUvpA+68Ety76blfnDl265EvHj546HC1kt1QLYR6oMfrlZX1UCyWQiW7IQv2b7965c3TF77wbTWW7h0DJ9MxcN9eTmYFescViVj297T4uTOdPfd571qBzo0HUmzeimfFj+7hbi6kYL+oRNv3ybkHP3D74VueOXrkyLs3D4kY5NsEeiW78criWvxGPHxCuVouLa+v/e4ffv6FLyjFPR8DMaAf7sbJrEDveUWi8XNnWleIQKd2ME2ng+lYl+7y8fjBqJ+rNb/y5AMnDh86eO6O22794PjYWHY81AK8WaBn/w3r66WwtlKMeZ79u/mfsF7auLy6sf7QM5//Y/3r7R8DOzXxdnQyK9D7VpHwuSPQabN5q12L6eA6q6Sb+9RTDz6RBfmZQwcmJgrVsc1KdyuBHq+Xrq6FSqVSO4gKhXQdwnJx/ZX1UvGnnv38i5eUcEvHwFzYeaxIO671r2f3He/3jEDvW0Wi/rkTy3/Ou1ug75cPscnQefNWu/RzbeOT/+PnZ47eeujR2w7fcjwGeaxltxvopY1yWF5eDynLbwj12L+e1da/9dRnn/uw0m56DMQP/ft6dDJ7sUf3PfKBnk6iZntcPi+nYPe5I9Bz+yHWzeatdunnynz83D8/cduRg39x/Ojh94YU4p0Gevz/1ZVi2MiCvZblhc3rQkr1eF2qlktX11Z/6w8/94KWksEfA/s60NNJ1Gy/Wi0aWkxm9a8L9Lx9kE2ng+nEgP+UfdvP9emnPzp/7PbDH5wYGytshncXAr1SqYblpfWweUNDf3pjwEexf325uPbRZz73x9/Z58dAt5t4BXrrJ1EzAyr7xfS6n9W/LtBH/UNsKvS+eauTA2zf9HP9ytc+8tvHj93ymwcPjE8UQgzwFN5dCPR4XVzf2Bwkt13Te2Oox9uvrq9eLJY2TmfBfmmfHQO9Gisi0Hcu+2Zz+QfB9FqBPrIfYpOh/81b7cp1P9fHn/rQLx09evDLR44cqPWTxyDvQaDH/ywvxwFyYdtQv1ZrTzdUq5XqUnHtG0899NzH98Ex0K+xIgL9xrJvZS7/oJheK9BH5kNs0M1bnXghHWALeXgNfvl//syJw4fHzx87fvDkjcHdu0AvlcthdWWjaYinyvoNtxfLpdXl9bV//41fP3/WMSDQu1j2Z4e8IlFn+WqBPtQfZMPUvNWJx8KI93N98tkPPX/7sYkHxsdr/eT9CvT4TxwgF5eGbaXpvfH21Y31H6wU1z/2h7/+wndycAxMh+EYK7LvAj0r+9kRPIkyvVagD92H2DA3b3VygI1c//onnv7pmaN3jP/OgQNjE40B3c9Ar2RhHpeF3Sm8G2/fWmu/srpyIau1n8mC/dIIHgNTYfjGiuyLQO/BXP5BML1WoA/8Q2yUmrfaNRL96x//+s984NZjhRcPHSkcrwV0IQwq0GsD5Eqb09iuh/jO/elbQ71ULpeWimvnvvbQc59xDAj0Xcp+MvRuLv+g5Kr7T6CPTpjH2sh+6CMcynmkn/j6h04cuCWcu+2OQsOH2eADPU5jW0219FZDfLvbV0vFy6vra499/deGt399Hx0DQxXoHa55P2pGvvtPoI9GkI96P3knhmoe6ZlnP/TErXcUPj02HrZ8iA4+0ONtsYa+USyFVpvet97eGPBL66uvrG1sTH/j185/xzEg0PM8l7/J545lZAV6Tw6kPPWTd+pSqq0P5AD75DMfnjl8NHwxq5kfbvJWHopAj9draxvZ71ZCp/3pjaFeidPc1te+/Qe/+uyUY2B/Bvp+mMu/gwvpc2feO02g7/VA2g/NW0N9gH3y6Q9/4MCRMJeF+Xt3eSsPTaCXy5WwnoV68xBvvym+VK6Urqyt/O7XHnruC46B/RHo+2kufwtMcxPoezqY9rqlowNsT0H+sycmDoVztxytfvDm5vXhDvR4XSyWQrlU2bUGvuPt2wyoWysWLy8VVx/6+kPnn3YM5DPQ87rmfRdsdv9l5T2rKAR6qwdTbFqcC/uzeauTA6zr/Vy/8rWP/Kfb3ln5d+MHwkQbb+WhCvRKdr2+VqwPj9tzf/rW4F9aX/u/K8X1n/3GZ89f6sExMBVGfyrUSAb6fp3L3ybLyAr0ls+MLzqY2i+6bjXBP/j4z81ltfIz7/jxcrtv5aEK9Pit0kYpu1RaCu/67e3U5jcq5cobVxY/+uznXvzTLr7/Y5Br4h1AoPdzD/eceMSiNDcaUwQ3OC3MOzLTjTv5xf/889NZqJ1ZXxoL5eLoF8r4xHhav732/9tfb54lXLvh+k3V699qcvv6xsbYG1cXv9jFP/m8MB9YZeK0MG/b76UWVQT6tiYVQUe6EgJZ9k0XavXlcPnvJnJRMBMHxlJW11N8a4hve9OO13WvLb4dr+6577c/uOcPtRQoRrAPzrQi6LgShkBn2GxGeaHWBF3MaunF5cLoH2Bj2fMZK1yL5OqWr6pbb0/BX6+9Vxtq76Ghlr68thb70esPc7wLf6qazmAdVwQIdPIT6KmvuB7sS6+N5+J5jU+MXe9zbwjpVsI7NGl6/9u33/CGAQQ6Qx7qKdg3lsfD6tvjuXhOYxNjN2b1luubm+Cb96e/vbIUiqWSNwsg0BnW5Av1ZdCvBfvyGzmppY+PXW9Yb6EG3qz/vFSphNevWFsDEOgMdaBXa9HVEOyV4lhYfj0fA+QK42PXprR10p8e/31r+WooltXOAYHOSNTSbwz2lTfHQ7Wcg4NtrBCntV+bt95uf3o5K4Q3l694jwACfUQ9nl3uTYtX3J1dPhVqKyXlL8sL1/cRbwz2aqUQVt7KSS19bGt4t9KfXrt+/epiKG9u+rKvLKZj4IKPgr6LZf5gdjkValuaMuQmFMFQH0zTjXuRp6/nTt3//rgAyEzI237UhVQxLzQEXKGWaMuvj4dbjpfD+IHRXtkwjguoFCqhkj25sfhEq+kJV9MJTLVWiy9s1uMLqUiqoVQubza378OT2dn6fgH7bPvQQdpuadX5tJKdzWLU0GnzYIpLqU41hnmj+AGXNiiIc4fP5eepV2uhVti+xp6XAXIhNr1vTmPboT99S9P7G0uL++1k9u7sPX7D5j9pz4BJtcWetobEsj253Trp8fMou5xONfaXFZcaOjsfTLPtrE2cAn+64cx5tDeUubb+Sj3UCzfU2Ncuj4cjd5bDxC2jv/9ArKXH8+nNM+pqbTGda5X17ItCWjK2kJ3grBSLYXF1eb/WDG86mY3Hidpi151Lnz8LLXzuzMfQ12Kihs72YtPiZKcbDcQDLLvE2vqn0onBaAf6tVHuN9fYl17LyTlo9lwq1UqTQXHhhn70Hy7nvna+WTPM3sOTre6gtaW2eMlHyJ5aQ2KL4HQrYb7lNai3mDyuGAU6TZoWO5WLJsnCzsG+sTK2ecmDWEuvbbV682rt9ab3lY31rIa+nvea4WSne1ynk9n4nn9kpE9mB3MS9anUtTe/h8+c2P0Xx/LcHQYzcNGiDA00uQ/OC6mG0VUNTZLxbPvJ0QrzenW10ND8Hm5qir/66kS4872jvx1bfGrl7J/x7J9aphc2m9ir15rgq+H1pbevbbd6beGZ/JzMznZr293YupWa4eOJwcM+XnZ0w2DDZj4795mpUNtO90T99frS9BPzzVpMsqup7DWIvxNbWfrRDL+YHgs19IGb6eWdp9r6SE31uT4Arno93Lepscd1VdYW8/HWLVXLmzX0a/80TGG7ur66uTJcIRSu74te3xt9tD2y15phC7VFzfDbe3m3FsEsyCezS3xtXgrXt5OOO/G9lN0+F7+/U4tJOqnqR5ifbrebQKDTk9pJn96I8yNVKoWtI9u3Cfb0vc3FZnIyJbtUKdVCvaE/Pf7/5dWlhh3oCnkJ9pc7HSvSRrAvpJolN5vdIciPZ5f42vx1aL6Vbtyz/WL2c7M7tZb0+IQqdtOc7PYJoUCHrrq+Oty2wd4Q7uVSIRcbt2wGeiinAXLX+9Ovri+Hcnbb1h3ochDs+jyHsPyzgI7df/FEqJXuitic/mj2Owvp97bTiwpLxwP49gt96AxVDf3asmgpzRu70q8tvrL5dSGsZIF++I7y5upro269shEOj9eeSLlSDVeLq9eWlblppZ0thVItFLx36FgWynGGzPMd/OqJ9Hu9fgPG5vWZ1I2IGjqjE+hh2/XcC/WMb6i1xxrtUk42bom18Y1KefM5XS2uXJuTHhpq5I1by26tscMeHB/ivy3O2JkU5mrojHKoV5vU2NPt9Rr72tVCOPIjhTCeg3fyWqkYChMHN6eqbT7dauH6yUuM7fqTblZjh/y4aelrBDojFeYNad1GsC/+IIQ73zP6Tz/G9vLGWrjW2XDtebcS7JALl1KQzysKgc6o1863LPvaSrC/8YP1cOj2iXDb0dF/O1dSUBduqoG3EOwwutpe+pqb6UNnqPK82bKvN89Hr/Wxr64XQ3GjFF772438HJT1fvFt+8zT1yF9rQ+d0VdfLVCYq6GTp0TfWhndqcYea7NXl2vLoi5fKYcrb5fCseMH81MWqRCuLZy3TY291lihyZ2RFPvJ4+j1i4pCoJO7QL/enN5KsC8vF0O5fH11me8vFMOxk/kI9OrmfuljNxRCtSHLrzdpNBYSjITYTz5r5Hr3aXJn6GqmjVPWCoXtm+LLlUpYWrpx05LieiX88AfFXBRDbRnYyq5N7fXvwx4s7OF3m22Ic7nJz9b3WxfmAp38h3lrwX7lytq2d/GDv1vPau35aIIuVcrX5+A3BHvQh04XfWn6iRjoD4b2l2uNP99spbit/eEvpCCf7cbOkgh0RiHQWwj24no5rK2Vtr2LGOZv5KSWvhnq5XKTBWVuDHbYY6jHXctOphr0btvQxu8/kv3O5A67r8Xb7w21/ervjTtLmlPee/rQGSKtTVm7fHltx3t549X18I53HAqHDo7++epGuRQmxidqZ97bLihT224VWhR3o5tvEuqbWy/HHdVCbROXM9v82ObWq+lnd2Swmxo6+72GvsuUtatXbxwI16yW/ur3VnNTLGsb6zdOYdumxj5CTp66//39WGr0pANqWw9k5X96l9r6QnaZTrXrl9PNcUT6vdntM62EOWro7Pc8T3uRNBvZHnciW15qbb75Wz8shne9qxQOHzkw8uUS+9LjIMCJsbHNjViuTWEbzZXi4k5dF7NQ6cko5+x+J0Nt69T7HFFNPZ+VU5z7PbtTM3hqTndipIYOndfSm41sv3J5PVQqrYfX3/3NSm6KZaW41nTr1BEc5R536XoyC5X57DLVpSA/nl1228ub687UT6z61GKCQGd/hfmNe543Bvv6ejmsLJfaururVzfC0tV8rCAX90tf2yg23RN9RMXgfSkLlLlUs+40zGO/cKxpPuwgasvmvuYp2KcVh0CHrtbOmwX70mJnwfy3f7Ocm+KJu7HF5vWtW6fmYEhcR7XFWLvPLjHIfy+FE53peosJAh22TFmrBfvKUimsr5U7urvVlVJ48821XBRNXD2utrXqzXui56y2eHqXIJ+M4RNr9ymM6I6utJgg0GHbke2xz3zxrb3NK//+9/NTS1/Paumlcummke45qy0+n2qLJ7cEeewnnw36yXtN/7pAhy7UzhunrMWm9iultgbCbScuRPP9V/MT6stxgFy4cQpbTmuL3021xanUx7uQavH0nv51gQ57zPN6k3tcr71UCVff7s6gttdeW87VkrCxph7y04e+W20xNq0/GfSTD0Jj/7opbAIdWk/0QuH69Oq3X+/eEq4xzL/3/au5Kaql4mqtMaMQbM5CPzS2mGiGF+iwW6Bf70MvrlXC+mqlq3f/2uvLYb1YzkVR1QbIrdYb3r136JfYYrKQxjIg0KF5Db3eh/7Wa73ZYOV7r+anlr5SXN9cPU8FnT7b7F+PUwZ3m5GAQGefh/qVN0uhvNGb/u4fvrkSrmzZR32UXVlbsn0qg9J0RgICfT9Z6NPjzI9awcQR7Utvl3r6GN979Upu3kjFcimUquXDDikGSP+6QN/X5vrxIGlP4ksjVC7zl1+P09R6XKvNauh5qaUXCoXqc59/8ZtduCs7aHVmsUv3cz4HZaF/XaDvO59KQdsvp7v4odNrZ4urlb7se/r/Lr2VizfToYkDv9/Fk8xFh+fATs7j/bycg/LQvy7Q94W4n/CpXmwZuUst/WJ2NZldzg17AT31C9+6fOTo+PtuuXXslV4/1nqxFN54a2lk30zjY2OlWw4e/A9/9pt//htdep/EGvqMw7QtMYBnu1j+U+lzIg/0rw9AoVqtKoUkNRV1eyWq2OQ92+8gb/L84oEVt5js+rKZ2fPr6sisf/7lUzPrq9VHN9YqPeuTmxgfCz/5vruy6/HsQBir7cVeLdS2F4/XlXRdrU0T27wO1Rv+P/5n622b16H+/9dviyPSK5VKKGd3vPU67ncexw/c9L30df04jU3shw5MfPvP/u1fTPXoPTIZ7Ce+m8V0TJ/t0WswlV6DPK1T/3gqM107An0kA30xhefZYXsTp6aws938wOh2oNd95L+eemL1avnTWa715P7vevcd4a533TESgZ4F+SsHJiZ+6k9mvnWpD++RPIZKN8SWrpl+HNNpW9j4mZSXFfJ6eiKEQO9VoL+QDvqFEXi+M934wOhVoEcf/W/3n9goVs9lwd71WmOspf/T9/39MDE2MbSBPjZeuDwxMfbYN2f+/OwA3iN5C5VOXUjH9MU+l//xVP552us9npBO93kskUAX6G17OR308yP0nI+n2vqZYQ30up/7yv0fKK5Wnllfrby7m/f79+48Gn7iPe8aukDPfqs0PjF27k8e/tZn8vAeGeHwicf0+QG/BpMhf10hF1KwLwQE+hAF+mI66OdG+LnvqX+9H4FeF/vXV69Wfqdcqk506z7/2T+cjE3aQxPoYwfChbFCOPPC5/7sUl7eIyNms8sse1/PDtlxOhXy1RVyKSvjSekj0Icl0B8LQ9hPvocy6Kh/vZ+BXvez/+XU82tL5Qe60b9+7LbD4R/f/WMDD/QwXv1BYaz6sed/7Zvfydt7ZITEfvLZYa455qwr5BH96t1h2lrnYj/53fEMPk8jN2PTYjpjfiwM+bzkb/76Sw/edsfE3YdvG9tzv+bi0mpYXF4d2HMpjIXV8YPhkfOf+9MfHeYwr79HsquTo/AeaVN9aunQNwOnAIzH6eM5KPeLATX0AdXQR66ffA/l0XLf6SBq6I1i//raSuXFvUxzO3br4fCP7n5Pf2vo1ezW8fJXn/7VFz8zou+RyVRTHOX+9ZHuMkuvQTxOHxjF1pB4AiV9BHq/A33k+8n3UC679p0OOtDrPvKlU7+9tlT5zU771//Be94V3nns9v4E+ljpYqVQPv2Nz7x4KQfvkakU7KPWv56bLrP0GsTj9J4R+HOHZn0OgZ7f4Ipnik/m+aDfY/k06zu9kJXN1DD9rR/+/VPz68vlD7bbv37o4IHwkz8x2dNALxVKl8uFjY8+9ekXvpPTYyi+R4a9b3ckppbm8DUYysGGAj2/oXWx4Qw3twd9F1oyGuev3z2MZRTnrxfXKn+xtlx5bzu/N/nud4YfvfOOrgd6OZRLG4Xib/3B9HNnc/7+OJ7eH48O4Z+3L7rMhvQ1sFqcQIe9+bkv3/9La6uVL7fav765JOxP/HgYi2NGuxDoWc28WioUv/XVM898eJ+d+E2G4enb3ZerlA3Ja6BiJNChu+Iysllt/Uwr/et3vfMd4cfe8Y49B3pWI3+lXNj4qSf/9XOX9mu5D0Hf7r6vGQ7oNbiQyn3ep49Ah66rLyPbSv/6ve+9OxyaONhRoMd+8izMH/rqJ559ehDP87Nzn4kDGestEpe/NP3EwKcGDWDutJXIbn4NpkPv+9cNeBPo0D+tLCMbR7u/990/2lagx37yYmH9d5/4+DNfGECI1/tNt1uff/NDNgv2gX7I9mlt8qFYrnWIQ71X/esGvAl0GJy4jOzacuWLpWL18Hbf/yeTk+HwwUO7BnrsJy8W1r5dDqUzT/yrP+p783oW5q3WvDY3xsiCfX7AoTIZur82uUBp/zXoVv+6AW8CHYZDs21abz9yJLzvPXftGOjFsbVXNsLG9H//pWf7Pg0tC/Kp0Nn8782BSlmwLww4VLq1jGzftjXNYbBPhc771w14E+gwfJpt0/q+u+4KR285fFOgZyF+eaOw9thX/uUzfR85nQX5ZOjOCm2bayxkwT7QINzDVr4D2dY0p8E+HVrvXzfgTaDD8NvsX1+rPL++UvmR+P+HDhwI90zefS3Q43Kta4WVr37pY0/3fbnWXfrJO7WYautzAw6UdrZpNfCqd6/BTv3ryl2gw+iJ/esb69XZ0kb12Ik73xWOHjkSyhPrF0qhdOYr/+KZQfST93qXs81a1xD0r++01PBi+t5Zzes9fQ0mQ60F6HQ6cYzv9znjEwQ6jLxPPPczk0/9wrcWBvHYaQpau/uQP54+kOujyttpmj+Xgn1hkGWemoCn0/OOgTIfhnxbUxDowHZB3k4TdGMte3prGKfBc+0MfLpWEx50/zog0GGUwzzWqtvpJ29pOlob09sa7zf2r5vTDQIdaCPIY016LrTeT765RnkWuGfbeIxOFha5kILdaHIQ6MAOITsZ2l9o5VwK2ct7eMx2FxbZ02MCAh3yGuSdLIXa1dpyP1oFAIEOeQ7zdjcr6Wl/dod/z8CXkQUEOgwqyGONuO0R51lwzg5xi8H0oKe5gUAX6NCvIJ8MnfVZ931OeId9+o+nv1X/Ogh0yGWQdzqqfOCrtnWwOt1QLCMLAh3odiBOh/bnfc8OWyB2MC/+5RTs894FINBhlIN8KrS/relQ7Hy2S0tDuyvX7Wmb1rTsbTwpOpluimUTBwWe17QPAh16GXqTof2104dib/I2Q7adteXbXkZ2y8lDrO3PpzCPjx3HIMSWjNMWugGBDr0Iuhjk+6ZZOnUnxOfcav96y9PusvuOQR1Pjqa3/nzDgL0Y7lNCHQQ6dCvYjqcaZDvT0HIxcKzD/dnPZc99epcToziA8N5Q2y3upS0nBZtjDLKfi2U+mX096V0IIYwpAtiz822E+eMphOby8MRjE3qaHx9ry+da/LUzWRjvtMpcDPvHttS8432/kFoDZht+7kRqKQCBrghgTzXUGCat9CXHaWh3ZyGVy3XQY/9/qnWfCrWuhN08nJrOt5bnyRTaW5vl5xqC/NpjpnI96Z0IIUwoAtiTmV2+v6+WR03P82SL0/Vmtim/4+l+tvaLx/uKJwCLW4I9Pt6UtyGoocNeNWtqj8HzSOzf3Y9zsVOXQgzgx3b4saY1621q7xdTeB9LXzfeh+lrINChc6l5uJnT+303sob+9Wahvl1XRT2st9a657L7iqvWXUq19dDwc/PejSDQYS+O7xBmQua6lssijS/YXL8+jaDfaqF+IpBGw8ca+3lFDPrQYT+0JEymmmy8xK9PhuZ924uplryQrucHMM97Nj32XPr6sfT3hHTbfOqjj1PbHrPLGwh0GPYgjqH15DaB29JiKun346Cze9p42GOpBhwvZ9L9XEpB2pdlaWNAp6Vz51PtO4b68VRjr68WF8P8XD+2lIVRockdhtd0k8A9vUuQn0wrrT3ZZpg3cyIF6EJq5u65dMJyMoV67DP/bnZ5O7s8n1oZHtxpcRpQQwfyWKvvlngy8Wh9w5Re19ZTU/p0/SQl1MYsXLQpCwh0yHuYn+5hmDeKm6PM7dZS0IMaO7ADTe6QjzA/nkK2Xx7oV/M7oIYO+0kM1902R4lrocdBZgthm6brdFJwMl2mUk18JzNxTXZN4CDQge6Z3uF7cW3107tN70rBPJ8uZ9N0t7M7BPux9LhnFT8MniZ3GHFpwFiz2nmccjbVyVzttOFK7Cc/1+GJBCDQgTYc3+F7c11oEo9z2RebfO8exQ8CHeiOqV7eeTohmNuhhWDKSwACHdi7hQ5r7+2wXjoIdGCAgf5wVoOe2esDpM1m4prqF7Zc4sh5c8RhCBjlDqNvt0D9vRTqsZYdg/lih4PkZhU1CHSgR2IfdxbYsbZ83w4/FtdjfzhdYr93SDXshXB9Z7XLtn0FgQ4MVqw9v9Tm79y39SQgBX19C9VrF0uvgkAH+lNLj3uEP16vge/Rsa1hn913DPnYZH8+eywD5GAIGRQH+Qn12E/+WI/uPoZ83B/9+SzcF9KuboBAB3oU6rPZ1b2h1j/eK7E//sks1OfT+u+AQAd6EOqxz3sq+/LuVGN/uUcPFZvkhToMCX3okN9gXwi1wXLxUl/RLa77HgN4qiGU9+KedP8zShwEOtCfgJ8PtXnoN0kbvNS3T51M162G/XTcG902qiDQgcGHfX1a2vyWoI+7rcXLmR1+/Viq8Rv9DgId6FQWumdTjbrRbDcWiUlT1M7HGngK+xNNfvSkQIfBMigORjvMY991nHt+35bLS918nNQfr58cBDrQI8d3CPuTXX4sfeQg0IEe2WlJ1mnFAwIdGA0LOwV6l+eIT6u9g0AHeiCNTr/U5Ntx9HlXFn5JS73uNNJ93qsBg2WUO4y+uezyaJPvxYVfFtJI+Ll290HPfm8y1BaO2SnML9mNDQQ6sHcxrGdSjbxZTT0G/qNZQMdlYGOo1wP4csPX9cVl6l/Hy4kWHn/WSwACHdijuEJbWgCmlalq96TLA116+Beyx5/zKsDg6UOHfIT6fHb1qT4/bKztTyt9EOhAd0M91pRPheaD5LrpXHaZsn47CHSgdzX12Pcdt01d7MFDxH3WT2WPMy3MYbjoQ4f8hXoM2tl4SdPNYv/6VGg+aG43scYf12mfM5odBDrsK3Hu9zDUYFMz/Fz6myZDbWvUqfTt+napW803XC+0O9UNEOgwanaqrZ6NG6cMU7N0CuaF0MdFYNKiNrM71PyBLtGHDp0HZAzrZv3UcSGWi6nJe19KO8HFE4j7mvyImj+oocPQOB+ar6IWF2V5MoX6zH7pf86e71SoNfPvtijNnLcPCHQYFrNh52VRQ6qhfjcLunMp2Ftthp8csSCfTCF9Xws/fsmCNNBdmtxhD1K/dKsLusTgj+uqz7ZYyz0xCmUQ+8nTc/rrFsM8dlOc9u6B7ipUq1WlAHsPtelQW1O91alhl1Jt/fw29xVHns/vcF8Pbvd7I/S8T5v+BgIdhrqmmsLtTBu/Vp/jHQM8/v5UC79/96CnkqUWhPhc72nxV2Kt/Gz2d896p4BAh1EJ9pMp7O7rwd1fyEJxaoDPbTI9t3Y2d2l37AAg0GGogv10Cr9u9oWfSsu79vu5xNaDmbDzNq03nXxkl9lB/L0g0IFehOFsm0HYTNyq9PQA/v7pUBvN3+qJyaUU5HNefRDokLdQnwytTXFrJm5V2tfdzVI/efyb2+k6iJvCnNW8DgIdBPuN+j6YrMPBfS+EWj/5glcZBDrsp2CPoXk6XeIgusbm7NhkHad1zYfaDmf9rJXHE4d2ugdeTkE+71UFgQ4M/gSj3QF8iynI55QeCHSgs/CdCrX56uf3ukBLm8u11j0eaoPe9JODQAc6DN/ZcGPfdkfh2rCt6cNt/FqchjatnxwEOtB+iNf72qd3qEW31fydtjWNYd7Ocq3T+slBoAOdB/pcaH20+Y4D1NrY1rTxRMFyrSDQgS7V0GOgttM0fsNSq5ZrBYEODE+wt7s+/GKqjYfQfj/5jN3QQKADvQ32XqwPHzXdzhUQ6EBvQr2+UcqjXbi7xXSCYLlWEOjAgIJ9MrQ/h7xR7CefNQ0NBDowHMHebjO8bU1BoANDHOyzYed12C3XCgIdGJFQnwy1RWimQm3Tl4XsEvvG42C3Of3kINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6ACDQAQCBDgACXSkAgEAHAAQ6ACDQAQCBDgACHQAQ6ACAQAcABDoACHQAQKADAAIdABDoACDQAQCBDgAIdABAoAOAQAcABDoAINABAIEOAAIdABDoAIBABwAEOgAIdABAoAMAAh0AEOgAINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0AU6AAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6ACDQAQCBDgACHQAQ6ACAQAcABDoACHQAQKADAAIdABDoACDQAQCBDgAIdABAoAOAQAcABDoAINABAIEOAAIdABDoAIBABwAEOgAIdABAoAMAAh0AEOgAINABAIEOAAh0AECgA4BAVwoAINABAIEOAAh0AECgA4BABwAEOgAg0AEAgQ4AAh0AEOgAgEAHAAQ6AAh0AECgAwACHQAQ6AAg0AEAgQ4ACHQAQKADgEAHAAQ6ACDQAQCBDgACHQAQ6ACAQAcAWvP/BRgA0cA20JIE3icAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
            <article className="p-4">
              <p className="text-[rgb(55,156,57)] text-xl font-bold mb-2 mt-[100px]">
                Backend Devlopement
              </p>
              <p className="text-white/50 text-sm">
                Creating robust server-side applications using Node.js, Express,
                and PostgreSQL. Experienced in RESTful APIs and GraphQL.
              </p>
            </article>
          </div>
        </div>
        {/* devops */}
        <div className="p-2 bg-gradient-to-b from-[#1e1d1d] to-[#1C1C1C] border-[1px] border-[#ffffff1d] w-[300px] sm:w-full h-[300px] rounded-lg relative before:content-[''] before:inline-block before:h-[1px] before:absolute before:top-[-1px] before:left-[5rem] before:w-28 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),_#ffbc31,_#ff9e00,rgba(0,0,0,0.1))]">
          <div className="bg-[linear-gradient(rgb(36,_36,_36),_rgb(18_18_18_/_14%)_65.62%)] h-full w-[300px] sm:w-full rounded-lg shadow-[0px_0px_10px_#ffffff24]">
            <div className="px-4">
              {/* dev ops svg */}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 300.000000 225.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                  fill="#ffbc31"
                  stroke="#ffbc31"
                >
                  <path
                    d="M1340 1863 c0 -4 -18 -32 -41 -62 -22 -29 -39 -54 -37 -56 4 -2 118
-25 129 -25 4 0 5 8 2 18 -9 36 147 63 238 42 80 -18 164 -67 215 -123 58 -64
69 -53 16 17 -47 61 -137 126 -214 152 -57 20 -185 25 -250 11 -31 -6 -38 -5
-38 7 0 8 -4 18 -10 21 -5 3 -10 3 -10 -2z m60 -78 c-19 -14 -44 -25 -57 -25
-26 0 -27 3 -13 31 8 15 21 19 57 19 l47 0 -34 -25z"
                  />
                  <path
                    d="M955 1759 l-16 -59 -49 0 c-45 0 -49 2 -55 29 -3 15 -18 40 -33 54
l-27 26 -75 -26 c-41 -15 -76 -27 -78 -28 -1 -2 7 -26 18 -55 11 -29 19 -54
18 -55 -2 -2 -24 -19 -51 -39 l-47 -36 -48 34 -47 34 -47 -69 -47 -68 44 -39
45 -39 -12 -51 -13 -51 -60 -3 -60 -3 3 -80 c4 -98 21 -122 89 -127 40 -3 46
-7 58 -35 14 -32 14 -33 -31 -64 -24 -18 -44 -36 -44 -39 0 -9 112 -151 131
-167 11 -9 23 -4 59 27 l44 38 27 -20 c26 -20 26 -20 12 -70 -15 -49 -15 -51
8 -73 18 -17 153 -65 182 -65 2 0 10 25 17 55 l13 55 54 0 c46 0 53 -3 53 -20
0 -10 13 -35 30 -53 l30 -34 77 28 c43 15 77 31 76 36 -1 4 -10 30 -20 57 -15
40 -15 50 -5 54 8 2 29 17 47 33 18 16 35 29 39 29 3 0 25 -14 48 -30 22 -17
44 -30 47 -30 3 0 26 30 51 66 l45 66 -46 42 -45 41 15 53 16 52 57 0 58 0 0
77 c0 70 -3 80 -26 105 -24 24 -32 26 -68 22 -40 -6 -42 -5 -55 32 -13 36 -12
38 12 56 14 10 35 26 47 36 l21 17 -59 75 c-85 108 -81 106 -135 64 -44 -35
-46 -35 -71 -19 -30 20 -30 20 -11 76 15 42 15 44 -7 65 -13 12 -60 32 -105
46 l-81 25 -17 -58z m-155 -19 c17 -42 47 -60 96 -60 44 0 75 24 89 71 7 22
27 24 90 7 36 -10 45 -16 45 -34 0 -12 6 -25 13 -28 8 -3 6 -9 -7 -20 -18 -15
-18 -17 -3 -34 9 -10 17 -24 17 -30 0 -7 15 -20 34 -29 32 -15 36 -15 69 6 48
29 60 27 99 -21 42 -51 43 -82 4 -113 -27 -21 -27 -24 -16 -66 14 -52 33 -68
82 -69 20 0 39 -4 42 -9 4 -5 9 -37 12 -70 l7 -61 -42 0 c-23 0 -40 -4 -37 -8
7 -12 -33 -44 -44 -37 -6 4 -10 -10 -10 -30 0 -22 -4 -34 -10 -30 -16 10 -12
-11 5 -25 8 -7 15 -18 15 -26 0 -7 9 -19 21 -27 41 -29 15 -124 -33 -122 -13
1 -45 11 -71 23 -58 26 -63 27 -47 7 10 -12 10 -15 -1 -15 -8 0 -23 -11 -33
-25 -10 -14 -25 -25 -32 -25 -17 0 -18 -28 -3 -67 8 -22 7 -30 -5 -39 -9 -6
-13 -14 -9 -18 4 -4 0 -4 -10 0 -9 3 -17 2 -17 -3 0 -5 -18 -9 -40 -10 -34 -2
-42 2 -50 20 -4 12 -21 34 -37 48 -37 34 -99 30 -113 -7 -5 -13 -15 -23 -22
-22 -8 2 -13 -7 -13 -20 -1 -43 -25 -45 -119 -9 -27 10 -28 12 -22 62 7 64 -9
90 -65 105 -36 10 -43 9 -59 -10 -26 -30 -58 -18 -97 36 -18 24 -33 48 -33 52
0 5 14 24 31 43 24 27 29 40 25 64 -9 43 -55 83 -102 87 l-39 3 0 65 0 65 35
5 c48 8 60 17 76 56 22 53 18 87 -16 119 -37 36 -38 52 -2 94 28 34 28 34 59
17 33 -16 93 -22 93 -8 0 4 10 12 22 17 12 6 30 21 40 35 15 21 17 33 10 72
l-9 47 36 15 c59 25 87 21 101 -14z"
                  />
                  <path
                    d="M820 1637 c-3 -3 -20 -7 -38 -10 -19 -3 -58 -20 -89 -39 -275 -165
-260 -553 27 -692 60 -29 73 -31 170 -31 99 0 110 2 172 33 116 57 173 127
215 267 35 114 -14 271 -112 364 -76 72 -148 103 -254 108 -47 3 -88 3 -91 0z
m227 -57 c66 -29 146 -111 178 -182 53 -118 44 -242 -26 -347 -70 -105 -181
-164 -309 -164 -101 0 -173 28 -249 99 -83 77 -116 151 -116 264 0 72 4 94 28
146 85 183 308 266 494 184z"
                  />
                  <path
                    d="M630 1251 l0 -129 48 5 c79 7 91 12 108 45 21 41 21 131 0 163 -17
26 -70 45 -123 45 l-33 0 0 -129z m101 58 c37 -37 12 -139 -33 -139 -4 0 -8
36 -8 80 0 85 6 94 41 59z"
                  />
                  <path
                    d="M840 1253 l0 -128 62 2 c60 1 63 3 66 27 3 24 1 26 -37 26 -37 0 -41
2 -41 25 0 22 4 25 35 25 31 0 34 3 31 23 -2 17 -11 23 -34 25 -27 3 -32 7
-32 29 0 24 3 25 35 20 33 -5 35 -4 35 24 0 29 0 29 -60 29 l-60 0 0 -127z"
                  />
                  <path
                    d="M1000 1265 c36 -148 32 -140 71 -139 l34 1 26 104 c14 57 29 114 33
127 7 20 4 22 -27 22 l-34 0 -13 -90 c-7 -49 -17 -87 -21 -84 -5 3 -9 15 -9
26 0 12 -5 50 -11 85 -11 62 -11 63 -44 63 l-32 0 27 -115z"
                  />
                  <path
                    d="M1873 1571 c-39 -14 -72 -30 -72 -36 -1 -5 6 -32 15 -60 13 -38 14
-50 5 -53 -7 -2 -28 -17 -46 -33 -18 -16 -35 -29 -39 -29 -3 0 -26 15 -51 32
-28 20 -49 29 -53 22 -4 -5 -26 -37 -49 -70 l-41 -61 47 -37 48 -38 -16 -54
-16 -54 -57 0 -58 0 1 -82 c0 -80 1 -84 30 -107 24 -19 37 -22 68 -17 36 5 38
4 50 -31 13 -35 12 -37 -12 -55 -14 -10 -35 -26 -47 -36 l-21 -17 59 -75 c85
-108 81 -106 133 -65 24 19 46 35 49 35 3 -1 16 -9 28 -20 24 -20 24 -20 8
-67 -16 -46 -16 -48 6 -69 13 -12 60 -33 104 -46 l82 -25 16 59 16 58 49 0
c46 0 50 -2 56 -29 3 -15 18 -40 33 -54 l27 -26 75 26 c41 15 76 27 78 28 1 2
-7 26 -18 55 -11 29 -19 54 -18 55 2 2 24 19 50 38 l46 36 48 -34 47 -34 48
67 48 67 -44 42 -45 41 12 51 11 50 60 3 60 3 -2 80 c-3 99 -21 125 -87 125
-38 0 -44 4 -58 32 -9 17 -16 32 -16 34 0 1 20 17 45 35 25 18 45 36 45 39 0
9 -112 151 -131 167 -11 9 -23 4 -59 -27 l-44 -38 -27 20 -27 20 15 50 c13 46
13 52 -3 69 -13 14 -161 69 -186 69 -3 0 -11 -25 -18 -55 l-13 -55 -48 0 c-45
0 -50 2 -63 33 -7 17 -24 41 -37 53 l-24 20 -72 -25z m102 -44 c20 -49 37 -58
97 -55 52 3 53 4 73 46 22 47 29 49 104 27 l52 -16 -3 -39 c-1 -22 -6 -40 -11
-40 -5 0 -3 -7 4 -16 7 -9 18 -26 24 -37 15 -30 60 -45 86 -29 55 34 66 33
106 -9 23 -24 39 -51 39 -67 2 -30 -21 -62 -44 -62 -10 0 -12 -7 -8 -22 4 -13
9 -35 12 -49 7 -30 37 -49 91 -58 l38 -6 0 -70 c0 -63 -2 -70 -19 -67 -10 2
-23 -2 -28 -10 -8 -10 -11 -10 -15 0 -8 20 -43 -32 -43 -65 0 -21 -3 -24 -9
-13 -6 8 -7 18 -5 22 3 4 3 8 -1 8 -3 0 -9 -10 -14 -22 -6 -16 -1 -32 21 -65
16 -24 33 -43 37 -43 12 0 5 -64 -10 -87 -17 -28 -61 -24 -131 12 -16 8 -30
10 -33 4 -4 -5 0 -9 7 -9 7 0 -4 -16 -25 -35 -39 -36 -57 -43 -57 -23 0 6 -2
9 -5 7 -2 -3 3 -28 11 -57 15 -49 14 -52 -5 -74 -15 -15 -21 -17 -21 -7 0 11
-2 11 -9 1 -11 -18 -74 -19 -79 -2 -3 8 -20 28 -38 47 -25 25 -42 33 -69 33
-22 0 -34 -4 -30 -10 3 -5 0 -10 -8 -10 -8 0 -20 -14 -28 -32 -11 -27 -14 -29
-20 -12 -6 16 -8 14 -8 -9 -1 -37 -16 -41 -81 -19 l-55 19 3 60 c3 56 1 61
-25 79 -34 23 -95 45 -87 32 3 -5 -2 -17 -12 -27 -16 -15 -24 -16 -44 -7 -14
6 -28 15 -32 21 -3 5 -18 24 -32 40 -33 38 -33 45 4 80 32 31 37 53 19 88 -23
43 -54 65 -94 69 l-40 3 -3 53 c-4 60 8 82 45 82 37 0 60 16 72 51 19 56 14
93 -19 124 -36 34 -36 39 -7 82 24 36 51 42 83 18 30 -23 58 -18 109 21 l47
37 -6 51 c-6 59 -2 69 39 84 55 19 75 15 90 -21z"
                  />
                  <path
                    d="M1993 1419 c-123 -21 -233 -104 -287 -219 -28 -59 -31 -74 -31 -165
0 -91 3 -106 31 -165 70 -148 231 -242 384 -226 118 14 195 51 271 134 46 50
59 72 78 137 36 122 20 234 -48 340 -24 36 -96 109 -110 110 -3 1 -25 11 -47
23 -36 18 -148 44 -179 41 -5 -1 -33 -5 -62 -10z m224 -53 c73 -33 153 -112
186 -183 18 -39 22 -66 22 -148 0 -89 -3 -106 -28 -156 -34 -70 -109 -142
-185 -177 -48 -22 -71 -27 -147 -27 -80 0 -97 3 -155 31 -303 144 -281 561 35
673 84 30 187 25 272 -13z"
                  />
                  <path
                    d="M1853 1160 c-37 -15 -58 -58 -57 -119 0 -100 56 -159 124 -131 41 17
60 57 60 125 0 66 -18 106 -55 123 -30 14 -42 14 -72 2z m68 -89 c13 -44 3
-88 -24 -105 -23 -15 -37 2 -44 50 -11 87 45 132 68 55z"
                  />
                  <path
                    d="M2233 1158 c-12 -6 -27 -23 -33 -38 -17 -41 -3 -78 42 -106 46 -30
45 -50 -4 -47 -24 1 -37 -4 -45 -17 -17 -26 8 -45 59 -45 52 0 80 32 76 84 -2
29 -10 41 -40 60 -51 33 -50 89 1 61 17 -8 22 -6 32 11 6 12 7 25 2 30 -15 15
-67 19 -90 7z"
                  />
                  <path
                    d="M2020 1035 l0 -125 28 0 c26 0 27 2 24 45 -4 42 -2 45 21 45 13 0 36
9 51 21 20 16 26 29 26 60 0 57 -26 79 -95 79 l-55 0 0 -125z m95 45 c0 -18
-6 -26 -22 -28 -20 -3 -23 1 -23 28 0 27 3 31 23 28 16 -2 22 -10 22 -28z"
                  />
                  <path
                    d="M1090 634 c0 -4 16 -28 35 -55 59 -79 161 -145 264 -169 51 -12 167
-9 217 5 16 5 23 1 27 -16 6 -21 11 -17 51 41 l46 65 -58 12 c-78 17 -84 16
-78 -5 5 -15 -2 -21 -35 -31 -150 -45 -309 -3 -414 110 -44 48 -55 56 -55 43z
m573 -150 c3 -4 2 -15 -4 -25 -7 -14 -21 -19 -52 -19 l-42 1 30 24 c29 24 55
31 68 19z"
                  />
                </g>
              </svg>
            </div>
            <article className="p-4">
              <p className="text-[#ffbc31] text-xl font-bold mb-2">DevOps</p>
              <p className="text-white/50 text-sm">
                Automating infrastructure and deployments using Docker.
                Implementing containerized solutions ensuring efficient CI/CD
                workflows for seamless application delivery.
              </p>
            </article>
          </div>
        </div>
        <div
          className={`flex gap-2 sm:hidden absolute  w-full bottom-[20px] left-[140px]`}
          ref={buttons}
        >
          <button
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 0
                ? "!bg-[#00d8ff] shadow-[0px_0px_20px_#00d8ff] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(0)}
          ></button>
          <button
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 1
                ? "!bg-[rgb(55,156,57)] shadow-[0px_0px_20px_rgb(55,156,57)] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(1)}
          ></button>
          <button
            className={`w-2 h-2 rounded-full bg-white/20 ${
              activeSkill === 2
                ? "!bg-[#ffbc31] shadow-[0px_0px_20px_#ffbc31] scale-150"
                : ""
            }`}
            onClick={() => scrollToSkill(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}
