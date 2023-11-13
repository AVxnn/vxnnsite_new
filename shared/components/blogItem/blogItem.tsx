import React from "react";
import styles from "./blogItem.module.scss";
import { BiShare, BiHeart, BiSolidPencil, BiSolidTimeFive } from "react-icons/bi";
import Image from "next/image";
import CustomButton from "@/shared/ui/customButton/customButton";

const BlogItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.leftBlock}>
        <div className={styles.avatar}>
          <Image width={46} height={46} objectFit="cover" src={'https://i.pinimg.com/564x/f2/43/2e/f2432e0cccca7e6909e3d626eef45c89.jpg'} alt='avatar' />
        </div>
        <div className={styles.menu}>
          <div className={styles.share}><BiShare /></div>
          <div className={styles.like}><BiHeart /></div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <h2 className={styles.title}>С перелётом что-то пошло не так: как решить проблему и не потратить все нервы</h2>
        <div className={styles.image}>
          <Image layout="fill" objectFit="cover" src={'https://i.pinimg.com/564x/f2/43/2e/f2432e0cccca7e6909e3d626eef45c89.jpg'} alt='avatar' />
        </div>
        <div className={styles.infoBar}>
          <div className={styles.date}>
            <BiSolidPencil />
            Сегодня
          </div>
          <div className={styles.readTime}>
            <BiSolidTimeFive />
            Читать 6 минут
          </div>
        </div>
        <p className={styles.description}>С перелётом что-то пошло не так: как решить проблему и не потратить все нервы</p>
        <div className={styles.buttonTools}>
          <CustomButton style={{textAlign: 'start'}} full >Читать</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
