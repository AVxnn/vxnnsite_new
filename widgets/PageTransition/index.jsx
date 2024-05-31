"use client";

import { useContext, useRef } from "react";
import styles from "./PageTransition.module.scss";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  in: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -20,
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
