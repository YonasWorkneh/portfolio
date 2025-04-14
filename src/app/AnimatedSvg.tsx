import React from "react";

const AnimatedSVG = () => {
  return (
    <svg
      fill="none"
      height="264"
      role="img"
      viewBox="0 0 891 264"
      width="891"
      data-lines="true"
      aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
    >
      <style>
        {`
          @keyframes draw {
            from {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dasharray: 1000;
              stroke-dashoffset: 0;
            }
          }

          path {
            animation: draw 2s linear forwards infinite;
          }
        `}
      </style>
      <path
        d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64"
        stroke="url(#blue-pulse-1)"
        strokeOpacity="0.1"
        strokeWidth="2"
      ></path>
      <path
        d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174"
        stroke="url(#pink-pulse-2)"
        strokeOpacity="0.1"
        strokeWidth="2"
      ></path>
      <g>
        <path
          d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
          stroke="url(#orange-pulse-1)"
          strokeWidth="2"
        ></path>
      </g>
      <g>
        <path
          d="M349 130L5 130C2.79088 130 1 131.791 1 134L1 264"
          stroke="url(#blue-pulse-1)"
          strokeLinecap="round"
          strokeWidth="2"
        ></path>
      </g>
      <g>
        <path
          d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
          stroke="url(#pink-pulse-2)"
          strokeLinecap="round"
          strokeWidth="2"
        ></path>
      </g>
      <defs>
        <linearGradient id="blue-pulse-1" x1="400" y1="83" x2="350" y2="133.75">
          <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
          <stop offset="0.05" stopColor="#2EB9DF"></stop>
          <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="pink-pulse-2" x1="475" y1="120" x2="488" y2="150">
          <stop stopColor="#FF4A81" stopOpacity="0"></stop>
          <stop offset="0.0564843" stopColor="#FF4A81"></stop>
          <stop offset="0.4616" stopColor="#DF6CF6"></stop>
          <stop offset="1" stopColor="#0196FF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="orange-pulse-1" x1="360" y1="130" x2="400" y2="170">
          <stop stopColor="#FF7432" stopOpacity="0"></stop>
          <stop offset="0.0550784" stopColor="#FF7432"></stop>
          <stop offset="0.373284" stopColor="#F7CC4B"></stop>
          <stop offset="1" stopColor="#F7CC4B" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedSVG;
