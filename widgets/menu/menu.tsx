import React, { useState, useEffect } from "react";
import styles from "./menu.module.scss";
import { useTranslation } from "react-i18next";
import { dataMenu } from "@/public/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import FramerMagnetic from "@/shared/FramerMagnetic";

interface item {
  title: string;
  link: string;
  key: string;
}

const Menu = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const [prevScrollY, setPrevScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? "down" : "up";

      controls.start({ y: scrollDirection === "down" ? 100 : 0 });
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
      className={styles.menu}
    >
      {dataMenu.map((item, idnex: number) => {
        return (
          <FramerMagnetic key={item.key}>
            <Link
              className={`${styles.item} ${
                item.link === pathname ? styles.active : ""
              }`}
              href={item.link}
            >
              {t(`menu.${item.title}`)}
            </Link>
          </FramerMagnetic>
        );
      })}
    </motion.div>
  );
};

export default Menu;
