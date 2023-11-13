"use client"
import Menu from "@/widgets/menu/menu";
import React from "react";
import styles from "./layout.module.scss";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/shared/i18n/i18n";
import Header from "@/widgets/header/header";
import ChangeHeaderComponent from "@/shared/components/changeHeaderComponent/changeHeaderComponent";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div className={styles.container}>
        <Header>
          <ChangeHeaderComponent />
        </Header>
        {children}
        <Menu />
      </div>
    </I18nextProvider>
  );
};

export default LayoutPages;
