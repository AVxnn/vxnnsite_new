"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import StarrySky from "../../widgets/StarrySky";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [colors, setColors] = useState<Record<number, string>>({});

  const handleMouseOver = (index: number) => {
    const newColor = getRandomColor();
    setColors((prevColors) => ({ ...prevColors, [index]: newColor }));

    setTimeout(() => {
      setColors((prevColors) => ({ ...prevColors, [index]: "" }));
    }, 5000);
  };

  const renderAnimatedText = (text: string) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={styles.letter}
        style={{ color: colors[index] || "inherit" }}
        onMouseOver={() => handleMouseOver(index)}
      >
        {char}
      </span>
    ));

  return (
    <main className={styles.main}>
      <div className={styles.cont}>
        <h1 className={styles.title}>
          {t("main.title")} <br />
          <span className={styles.secondTitle}>
            {renderAnimatedText(t("main.subtitle"))}
          </span>
        </h1>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: t("main.description") }}
        ></div>
      </div>
    </main>
  );
}
