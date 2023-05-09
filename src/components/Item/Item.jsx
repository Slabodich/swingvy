/* eslint-disable react/prop-types */
import React, {useRef, useEffect} from 'react';
import styles from './Item.module.css'
import shave from "shave";
import cnBind from 'classnames/bind'

import likes from './Likes.svg'
import comments from './Comments.svg'
import views from './Views.svg'
import star from './Star.svg'
import plug from './Заглушка.png'


const Item = ({news, isThird}) => {
    const elemRef = useRef(null)

    const cx = cnBind.bind(styles)

    useEffect(() => {
        shave(elemRef.current, 69);
    }, []);
    return (
        <div className={styles.item}>
            <div
                className={styles.img}
                style={news.link ? { backgroundImage: `url(${news.link})`}
                : {backgroundImage: `url(${plug})`}}
            >
                <button className={styles.favorite}>
                    <img
                        className={styles.imgFavorite}
                        src={star}
                        alt="favorite"
                    />
                </button>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{news.title}</h2>

                <p ref={elemRef} className={cx('preview', {'active': isThird === true})}>
                    {news.previewtext}
                </p>
                <div className={styles.downPanel}>
                    <span>{news.pubDate}</span>
                    <span><img src={likes} alt="likes"/>123</span>
                    <span><img src={comments} alt="comments"/>76</span>
                    <span><img src={views} alt="views"/>225</span>
                </div>
            </div>
        </div>
    );
};

export default Item;