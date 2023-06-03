import React from "react";
import {ReactComponent as Star} from "../../accets/images/Star.svg";
import {ReactComponent as Views} from "../../accets/images/Views.svg";
import {ReactComponent as Likes} from "../../accets/images/Likes.svg";
import {ReactComponent as Comments} from "../../accets/images/Comments.svg";
import {ReactComponent as Logo} from "../../accets/images/Logo.svg";
import {ReactComponent as Avatar} from "../../accets/images/ava.svg";
import {ReactComponent as Cross} from "../../accets/images/CrossIcon.svg";
import {ReactComponent as Menu} from "../../accets/images/MenuIcon.svg";
import styles from "./SvgSelector.module.css";

const SvgSelector = ({id}) => {
    {
        switch (id) {
            case "star":
                return (
                    <Star/>
                );
            case "starWhite":
                return (
                    <Star className={styles.starWhite}/>
                );
            case "starActive":
                return (
                    <Star className={styles.starActive}/>
                );
            case "starActiveWhite":
                return (
                    <Star className={styles.starActiveWhite}/>
                );
            case "viewsIcon":
                return (
                    <Views/>
                );
            case "viewsIconLight":
                return (
                    <Views className={styles.viewsIconLight}/>
                );
            case "likesIcon":
                return (
                    <Likes />
                );
            case "likesIconLight":
                return (
                    <Likes className={styles.likesIconLight}/>
                );
            case "commentIcon":
                return (
                    <Comments />
                );
            case "commentIconLight":
                return (
                    <Comments className={styles.commentIconLight}/>
                );
            case "logo":
                return (
                    <Logo />
                );
            case "ava":
                return (
                    <Avatar />
                );
            case "cross":
                return (
                    <Cross />
                );
            case "menu":
                return (
                    <Menu />
                );
            default:
                return <svg></svg>;
        }
    }
};

export default SvgSelector;
