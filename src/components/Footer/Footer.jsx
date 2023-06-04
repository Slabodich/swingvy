import React from "react";
import styles from "./Footer.module.css";
import SvgSelector from "../SvgSelector/SvgSelector";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#" className={styles.social}>
          <SvgSelector id={"youtube"} />
        </a>
        <a href="#" className={styles.social}>
          <SvgSelector id={"instagram"} />
        </a>
      </div>
      <div className={styles.menu}>
        <a href="#" className={styles.link}>
          Правила
        </a>
        <a href="#" className={styles.link}>
          Документы
        </a>
        <a href="#" className={styles.link}>
          Политика конфиденциальности
        </a>
      </div>
      <div className={styles.logo}>
        <a href="#">
          <SvgSelector id={"logoLight"} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
