import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import CustomButton from "@/shared/ui/customButton/customButton";
import { useTranslation } from "react-i18next";
import { motion, useAnimation, useScroll } from "framer-motion";

interface headerProps {
  children: React.ReactNode;
}

const Header = ({ children }: headerProps) => {
  const { t } = useTranslation();

  const [prevScrollY, setPrevScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? "down" : "up";

      controls.start({ y: scrollDirection === "down" ? -100 : 0 });
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, controls]);

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.2 }}
      className={styles.header}
    >
      <div className={styles.logotype}>
        <h2>VXNN</h2>
      </div>
      {children}
      
    </motion.div>
  );
};

export default Header;
