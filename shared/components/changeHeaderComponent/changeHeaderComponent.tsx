import { usePathname } from "next/navigation";
import React from "react";
import SearchHeader from "../searchHeader/searchHeader";
import styles from "./changeHeaderComponent.module.scss";
import { useTranslation } from "react-i18next";
import CustomButton from "@/shared/ui/customButton/customButton";
import HeaderAvatar from "@/widgets/headerAvatar/headerAvatar";
import SwitchLanguage from "../switchLanguage/switchLanguage";

const ChangeHeaderComponent = () => {
  const pathname = usePathname();

  const { t } = useTranslation();

  switch (pathname) {
    case "/":
      return (
        <>
          <div className={styles.buttonForm}>
            <SwitchLanguage />

            <CustomButton>{t("menu.sendme")}</CustomButton>
          </div>
        </>
      );
    case "/blog":
      return (
        <>
          <SearchHeader />
          <HeaderAvatar />
        </>
      );
    default:
      return (
        <>
          <div className={styles.buttonForm}>
            <SwitchLanguage />
            <CustomButton>{t("menu.sendme")}</CustomButton>
          </div>
        </>
      );
  }
};

export default ChangeHeaderComponent;
