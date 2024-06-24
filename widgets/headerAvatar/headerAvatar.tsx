import React from "react";
import styles from "./headerAvatar.module.scss";
import Image from "next/image";

const HeaderAvatar = () => {
  return (
    <div className={styles.headerAvatar}>
      <div className={styles.avatar}>
        <Image
          layout="fill"
          objectFit="cover"
          src={
            "https://i.pinimg.com/564x/f2/43/2e/f2432e0cccca7e6909e3d626eef45c89.jpg"
          }
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default HeaderAvatar;
