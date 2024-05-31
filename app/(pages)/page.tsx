"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import StarrySky from "../../widgets/StarrySky";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className={styles.cont}>
        <h1 className={styles.title}>
          {t("main.title")} <br />
          <span className={styles.secondTitle}>{t("main.subtitle")}</span>
        </h1>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: t("main.description") }}
        ></div>
      </div>
    </main>
  );
}
