import React, { useState } from "react";
import styles from "./Burger.module.css";
import cnBind from "classnames/bind";
import SvgSelector from "../../SvgSelector/SvgSelector";
import {Link} from "react-router-dom";

const Burger = () => {
  const [nav, setNav] = useState(false);

  const cx = cnBind.bind(styles);
  return (
    <div>
      <div
        className={cx("menu", {active: nav})}
      >
        <h3 className={styles.title}>Меню раздела</h3>
          <Link to={"/profile"}><span>Профиль</span></Link>
          <a href="#"><span>Настройки</span></a>
          <div className={styles.logo}>
              <SvgSelector id={"logo"}  />
          </div>

      </div>
      <div onClick={() => setNav(!nav)} className={styles.btn}>
        {nav ? (
          <SvgSelector id={"cross"} />
        ) : (
          <SvgSelector id={"menu"} />
        )}
      </div>
    </div>
  );
};

export default Burger;
