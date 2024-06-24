"use client";

import React from "react";
import Image from "next/image";
import styles from "./aboutMe.module.scss";
import photo from "../../../public/images/photo.jpg";
import { useTranslation } from "react-i18next";
import CustomButton from "@/shared/ui/customButton/customButton";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.containerAbout}>
      <div className={styles.leftBlock}>
        <Image src={photo} alt={"George Photo"} />
      </div>
      <div className={styles.rightBlock}>
        <span className={styles.tag}>{t(`about.tag`)}</span>
        <h2 className={styles.title}>{t(`about.title`)}</h2>
        <p className={styles.description}>{t(`about.description`)}</p>
        <div className={styles.formBtns}>
          <CustomButton size={"s"}>{t(`about.resumeRU`)}</CustomButton>
          <CustomButton typeButton="secondary" size={"s"}>
            {t(`about.resumeEN`)}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
