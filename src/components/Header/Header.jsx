import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import SvgSelector from "../SvgSelector/SvgSelector";
import Search from "../ui/Search/Search";
import Burger from "../ui/Burger/Burger";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.logo}>
                    <Link to={"/"}><SvgSelector id={"logo"} class={styles.image}/></Link>
                </div>
                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.profile}>
                    <span className={styles.name}>Георгий</span>
                    <Link to={"/profile"} className={styles.avatar}><SvgSelector id={"ava"}/></Link>
                </div>
                <div className={styles.burger}> <Burger/> </div>

            </div>
            <div className={styles.headerBottom}>
                <Search/>
            </div>
        </header>
    );
};

export default Header;