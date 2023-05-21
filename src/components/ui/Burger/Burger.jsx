import React, { useState } from "react";
import styles from "./Burger.module.css";
import cnBind from "classnames/bind";

const Burger = () => {
  const [nav, setNav] = useState(false);

  const cx = cnBind.bind(styles);
  return (
    <div>
      <div
        className={cx("menu", {active: nav})}
      >
        <h3 className={styles.title}>Меню раздела</h3>
        <a href="#">Избранное</a>
        <a href="#">Моя компания</a>
        <a href="#">Моё развитие</a>
        <a href="#">Новости компании</a>
        <a href="#">Телефонная книга</a>
        <img className={styles.logo} src="/src/accets/images/amoCRMLogo.svg" alt="Logo" />
      </div>
      <div onClick={() => setNav(!nav)} className={styles.btn}>
        {nav ? (
          <img src="/src/accets/images/CrossIcon.svg" />
        ) : (
          <img src="/src/accets/images/MenuIcon.svg" />
        )}
      </div>
    </div>
  );
};

export default Burger;
