import React from "react";
import styles from "./TextAboutAmoCRM.module.css";

const TextAboutAmoCrm = () => {
  return (
    <article>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Получите <span style={{ color: "#4C8BF7" }}>максимум</span> от отдела
          продаж
        </h1>
        <p className={styles.paragraph}>
          amoCRM — это полный набор инструментов, которые раскроют потенциал
          вашего отдела продаж и повысят его эффективность. Считается лучшей
          CRM-системой по версии{" "}
          <a href="https://crmrating.ru/" target="_blank">
            crmrating.ru
          </a>
        </p>
      </div>
    </article>
  );
};

export default TextAboutAmoCrm;
