"use client";

import styles from "./PageTransition.module.scss";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const PageTransition = ({ children }) => {
  const key = usePathname();
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className={styles.effect}>
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={key}
          variants={!shouldReduceMotion ? variants : null}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
