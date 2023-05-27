import React, {useRef, useEffect, useState} from "react";
import styles from "./Item.module.css";
import shave from "shave";
import cnBind from "classnames/bind";
import moment from "moment";
import {Link} from "react-router-dom";
import SvgSelector from "../SvgSelector/SvgSelector";

const Item = ({items, isThird, isPromo}) => {
    const [isFavorite, setFavorite] = useState(false);

    const cx = cnBind.bind(styles);

    const headingRef = useRef(null);

    const previewRef = useRef(null);

    const datePub = moment(items.pubDate * 1000).format("DD.MM.YYYY");
    const Image = items.image ? items.image : items.link;

    const Star = isFavorite && !isThird ? (
        <SvgSelector id={"starActive"}/>
    ) : isFavorite && isThird ? (
        <SvgSelector id={"starActiveWhite"}/>
    ) : isThird ? (
        <SvgSelector id={"starWhite"}/>
    ) : (
        <SvgSelector id={"star"}/>
    );

    const bgImg =
        (isThird && Image)
            ? {backgroundImage: `url(${Image})`}
            : isThird
                ? {backgroundImage: `url('/src/accets/images/Plug.png')`}
                : {backgroundImage: "none"};
    const cardImg = isThird
        ? {backgroundImage: "none"}
        : Image
            ? {backgroundImage: `url(${Image})`}
            : {backgroundImage: `url('/src/accets/images/Plug.png')`};

    const viewsIcon = isThird ?
        (<SvgSelector id={"viewsIconLight"}/>)
        : (<SvgSelector id={"viewsIcon"}/>)
    const likesIcon = isThird ?
        (<SvgSelector id={"likesIconLight"}/>)
        : (<SvgSelector id={"likesIcon"}/>);
    const commentIcon = isThird ?
        (<SvgSelector id={"commentIconLight"}/>)
        : (<SvgSelector id={"commentIcon"}/>);


    useEffect(() => {
        const updateShaveSize = () => {
            const headingHeight = headingRef.current.clientHeight;
            const contentHeight = 153;
            const textHeight = contentHeight - headingHeight;
            shave(previewRef.current, textHeight);
        };
        window.addEventListener("resize", updateShaveSize);
        updateShaveSize();
        return () => window.removeEventListener("resize", updateShaveSize);
    }, []);
    return (
        <div
            className={cx("item", {itemIsThird: isThird, itemIsPromo: isPromo})}
            style={bgImg}
        >
            <button
                className={cx("favorite", {
                    favoriteIsThird: isThird,
                    favoriteIsPromo: isPromo,
                })}
                onClick={() => setFavorite(!isFavorite)}
            >
                {Star}
            </button>
            <div
                className={cx("img", {imgIsPromo: isPromo})}
                style={cardImg}
            />
            <div className={cx("contentWrapper", {contentIsPromo: isPromo})}>
                <h2
                    ref={headingRef}
                    className={cx("titleText", {titleTextIsThird: isThird})}
                >
                    {items.title}
                </h2>
                <Link to={!isPromo && `/news/${items.id}`}>
                    <p
                        ref={previewRef}
                        className={cx("previewText", {
                            previewTextIsThird: isThird,
                            previewTextIsPromo: isPromo,
                            previewTextIsNews: !isPromo,
                        })}
                    >
                        {items.previewtext}
                    </p>
                </Link>
            </div>
            <div
                className={cx("downPanel", {
                    downPanelIsThird: isThird,
                    downPanelIsPromo: isPromo,
                })}
            >
                <span>{datePub}</span>
                {isPromo && (
                    <span className={styles.promoState}>Предложение активно</span>
                )}

                <div className={styles.likeCount}>
                    {likesIcon}
                    <span>123</span>
                </div>
                <div
                    style={isPromo && {display: "none"}}
                    className={styles.commentCount}
                >
                    {commentIcon}
                    <span>76</span>
                </div>
                <div className={styles.viewCount}>
                    {viewsIcon}
                    <span>225</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
