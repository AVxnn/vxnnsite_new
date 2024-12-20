import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SearchHeader from "../searchHeader/searchHeader";
import styles from "./changeHeaderComponent.module.scss";
import { useTranslation } from "react-i18next";
import CustomButton from "@/shared/ui/customButton/customButton";
import HeaderAvatar from "@/widgets/headerAvatar/headerAvatar";
import SwitchLanguage from "../switchLanguage/switchLanguage";
import FramerMagnetic from "@/shared/FramerMagnetic";

const ChangeHeaderComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { t } = useTranslation();

  switch (pathname) {
    case "/":
      return (
        <>
          <div className={styles.buttonForm}>
            <FramerMagnetic>
              <SwitchLanguage />
            </FramerMagnetic>
            <FramerMagnetic>
              <CustomButton
                onClick={() => router.push("https://t.me/romashkog")}
              >
                {t("menu.sendme")}
              </CustomButton>
            </FramerMagnetic>
          </div>
        </>
      );
    case "/blog":
      return (
        <>
          <SearchHeader />
          <FramerMagnetic>
            <HeaderAvatar />
          </FramerMagnetic>
        </>
      );
    default:
      return (
        <>
          <div className={styles.buttonForm}>
            <FramerMagnetic>
              <SwitchLanguage />
            </FramerMagnetic>
            <FramerMagnetic>
              <CustomButton
                onClick={() => router.push("https://t.me/romashkog")}
              >
                {t("menu.sendme")}
              </CustomButton>
            </FramerMagnetic>
          </div>
        </>
      );
  }
};

export default ChangeHeaderComponent;
