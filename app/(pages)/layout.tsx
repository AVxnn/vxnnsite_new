"use client";
import Menu from "@/widgets/menu/menu";
import React, { useEffect } from "react";
import styles from "./layout.module.scss";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/shared/i18n/i18n";
import Header from "@/widgets/header/header";
import ChangeHeaderComponent from "@/shared/components/changeHeaderComponent/changeHeaderComponent";
import StarrySky from "@/widgets/StarrySky";
import PageTransition from "@/widgets/PageTransition";
import { usePathname } from "next/navigation";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <I18nextProvider i18n={i18n}>
      <StarrySky />
      <div className={styles.container}>
        <Header>
          <ChangeHeaderComponent />
        </Header>

        <PageTransition key={pathname}>{children}</PageTransition>
        <Menu />
      </div>
    </I18nextProvider>
  );
};

export default LayoutPages;
