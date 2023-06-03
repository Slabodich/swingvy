import React from 'react';
import styles from './SideBar.module.css';
import {Link} from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
        <Link to={"/profile"}><span>Профиль</span></Link>
        <a href="#"><span>Настройки</span></a>
      </div>
  );
};

export default SideBar;