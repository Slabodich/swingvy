/* eslint-disable react/prop-types */
import React, {useRef, useEffect, useState} from "react";
import styles from "./Item.module.css";
import shave from "shave";
import cnBind from "classnames/bind";
import moment from "moment";

import star from "../../accets/images/Star.svg"
import activeStar from "../../accets/images/ActiveStar.svg"
import whiteStar from "../../accets/images/WhiteStar.svg"
import views from "../../accets/images/Views.svg"
import whiteViews from "../../accets/images/WhiteViews.svg"
import likes from "../../accets/images/Likes.svg"
import whiteLikes from "../../accets/images/WhiteLikes.svg"
import comment from "../../accets/images/Comments.svg"
import whiteComment from "../../accets/images/WhiteComments.svg"

const Item = ({items, isThird, isPromo}) => {
    const [isFavorite, setFavorite] = useState(false);

    const cx = cnBind.bind(styles);

    const headingRef = useRef(null);

    const previewRef = useRef(null)

    const datePub = moment(items.pubDate * 1000).format("DD.MM.YYYY");
    const Image = items.image ? items.image : items.link;

    useEffect(() => {
        const updateShaveSize = () => {
            const headingHeight = headingRef.current.clientHeight;
            const contentHeight = 153;
            const textHeight = contentHeight - headingHeight;
            shave(previewRef.current, textHeight);
        }
        updateShaveSize()
    }, []);
    return (
        <div
            className={cx("item", {itemIsThird: isThird, itemIsPromo: isPromo})}
            style={
                (isThird && items.link) || (isThird && items.image)
                    ? {backgroundImage: `url(${Image})`}
                    : isThird
                        ? {backgroundImage: `url('/src/accets/images/Plug.png')`}
                        : {backgroundImage: "none"}
            }
        >
            <button
                className={cx("favorite", {
                    favoriteIsThird: isThird,
                    favoriteIsPromo: isPromo,
                })}
                onClick={() => setFavorite(!isFavorite)}
            >
                <>
                    {isFavorite ? (
                        <img
                            className={styles.imgFavorite}
                            src={activeStar}
                            // src="/src/accets/images/ActiveStar.svg"
                            alt="favorite"
                        />
                    ) : isThird ? (
                        <img
                            className={styles.imgFavorite}
                            // src="src/accets/images/WhiteStar.svg"
                            src={whiteStar}
                            alt="favorite"
                        />
                    ) : (
                        <img
                            className={styles.imgFavorite}
                            src={star}
                            alt="favorite"
                        />
                    )}
                </>
            </button>
            <div
                className={cx("img", {imgIsPromo: isPromo})}
                style={
                    isThird
                        ? {backgroundImage: "none"}
                        : items.link || items.image
                            ? {backgroundImage: `url(${Image})`}
                            : {backgroundImage: `url('/src/accets/images/Plug.png')`}
                }
            />
            <div className={cx("contentWrapper", {contentIsPromo: isPromo})}>
                <h2
                    ref={headingRef}
                    className={cx("titleText", {titleTextIsThird: isThird})}
                >
                    {items.title}
                </h2>
                <p
                    ref={previewRef}
                    className={cx("previewText", {previewTextIsThird: isThird, previewTextIsPromo: isPromo})}
                >
                    {items.previewtext}
                </p>
            </div>
            <div className={cx("downPanel", {downPanelIsThird: isThird, downPanelIsPromo: isPromo})}>
                <span>{datePub}</span>
                {isPromo && (<span className={styles.promoState}>Предложение активно</span>
                )}

                <div className={styles.likeCount}>
                    <>
                        {isThird ? (
                            <img
                                // src="/src/accets/images/WhiteLikes.svg"
                                src={whiteLikes}
                                alt="likes"/>
                        ) : (
                            <img
                                src={likes}
                                //src="/src/accets/images/Likes.svg"
                                alt="likes"/>
                        )}
                    </>
                    <span style={{}}>
                   123
                 </span>
                </div>
                <div style={isPromo && {display: "none"}} className={styles.commentCount}>
                    {isThird ? (
                        <img
                            src={whiteComment}
                            //src="/src/accets/images/WhiteComments.svg"
                            alt="comments"/>
                    ) : (
                        <img
                            src={comment}
                            //src="/src/accets/images/Comments.svg"
                            alt="comments"/>
                    )}
                    <span>
                    76
                </span>
                </div>
                <div className={styles.viewCount}>
                    {isThird ? (
                        <img
                            src={whiteViews}
                            //src="/src/accets/images/WhiteViews.svg"
                            alt="views"/>
                    ) : (
                        <img
                            src={views}
                            //src="/src/accets/images/Views.svg"
                            alt="views"/>
                    )}
                    <span>
                    225
                </span>
                </div>
            </div>
        </div>
    );
};

export default Item;
