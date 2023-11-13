import React, { memo, useEffect } from "react";
import styles from "./switchLanguage.module.scss";
import En from "@/public/icons/en";
import Ru from "@/public/icons/ru";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  const changeLanguage = (newLanguage: string) => {
    localStorage.setItem("lang", newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const currentStorage = localStorage.getItem("lang");
    if (currentStorage) {
      i18n.changeLanguage(currentStorage);
    }
  }, []);

  return (
    <div className={styles.changeLanguage}>
      {currentLanguage === "en" ? (
        <div onClick={() => changeLanguage("ru")}>
          <En />
        </div>
      ) : (
        <div onClick={() => changeLanguage("en")}>
          <Ru />
        </div>
      )}
    </div>
  );
};

export default memo(SwitchLanguage);
