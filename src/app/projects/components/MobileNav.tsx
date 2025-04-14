import { handleScroll } from "@/app/utils/util";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import React from "react";

const MobileNav = ({
  active,
  isOpen,
  setIsOpen,
}: {
  active: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 135 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  const sections = ["overview", "highlights", "problem", "solution"];

  // Add this scroll handler
  return (
    <div className="md:hidden fixed z-50">
      {/* Menu Icon */}
      <motion.button
        className="fixed bottom-8 right-8 size-12 bg-[#1a1a1a] rounded-full border border-white/20 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          variants={menuIconVariants}
          transition={{ duration: 0.3 }}
          className="text-white text-3xl font-thin"
        >
          +
        </motion.div>
      </motion.button>

      {/* Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed bottom-24 right-8 w-48 bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden z-50"
            >
              <div className="py-2">
                {sections.map((section, i) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    custom={i}
                    variants={itemVariants}
                    className={`block px-6 py-3 capitalize transition-colors
                      ${active === section ? "text-white" : "text-white/30"}
                      hover:bg-white/5`}
                    onClick={(e) => handleScroll(e, section, setIsOpen)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-1.5 rounded-full ${
                          active === section
                            ? "bg-white shadow-[0px_0px_10px_#fff]"
                            : "bg-white/30"
                        }`}
                      />
                      {section}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
