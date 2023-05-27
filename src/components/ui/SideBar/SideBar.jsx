import React from 'react';
import styles from './SideBar.module.css';
import {Link} from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
        <Link to={"/profile"}><span>Профиль</span></Link>
        <a href="#"><span>Моя компания</span></a>
        <a href="#"><span>Моё развитие</span></a>
        <a href="#"><span>Новости компании</span></a>
        <a href="#"><span>Телефонная книга</span></a>
      </div>
  );
};

export default SideBar;