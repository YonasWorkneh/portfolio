import { Variants } from "framer-motion";

export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 1.25, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const rotateUp = (inc?: number) => {
  const rotateValue = Math.floor(Math.random() * 200) - 100;
  return {
    initial: {
      opacity: 0,
      y: 100,
      rotate: rotateValue,
    },
    enter: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: inc ? 1.5 + inc : 1.5,
        ease: "easeInOut",
      },
    },
  };
};

const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};
// Update the animation variants
export const borderAndContentReveal = {
  initial: {
    width: 0,
    opacity: 0,
  },
  enter: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smoother motion
      when: "beforeChildren",
    },
  },
};

export const contentReveal = {
  initial: {
    clipPath: "inset(0 100% 0 0)", // Use clipPath instead of width for smoother text reveal
    opacity: 0,
  },
  enter: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96], // Same easing for consistency
    },
  },
};

export const fadeInUp = (delay = 1.25, scale = 1) => {
  return {
    initial: {
      opacity: 0,
      scale,
      y: 50, // Moves up from 40px below
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, delay },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 },
    },
  };
};

export const fadeIn = {
  initial: { opacity: 0, y: 100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0, ease: "easeInOut" },
  },
};
export const scaleUp = (init = 0.8, delay = 0) => {
  return {
    initial: { opacity: 0, scale: init },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay,
      },
    },
  };
};
export default anim;
