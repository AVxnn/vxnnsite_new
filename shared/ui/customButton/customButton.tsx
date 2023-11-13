import React from "react";
import styles from "./customButton.module.scss";
import Link from "next/link";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "default" | "secondary";
  size?: "s" | "m";
  full?: boolean;
  className?: string;
  id?: string;
  ILink?: string;
  style?: any;
  children: React.ReactNode;
};

const CustomButton = ({ typeButton = 'default', full = false, size = 'm', ILink = '', children, ...attributes }: ButtonProps) => {
  if (ILink !== '') {
    return (
      <Link href={ILink} className={styles.link}>
        <button className={`${styles.customButton} ${styles[typeButton]} ${styles[size]} ${full ? styles.width : ''}`} {...attributes}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${styles.customButton} ${styles[typeButton]} ${styles[size]} ${full ? styles.width : ''}`} {...attributes}>
      {children}
    </button>
  );
};

export default CustomButton;