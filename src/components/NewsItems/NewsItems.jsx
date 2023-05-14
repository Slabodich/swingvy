import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import styles from "./NewsItems.module.css";
import axios from "axios";
import Button from "../ui/Button/Button";

const NewsItems = () => {
    const [newses, setNews] = useState([]);
    const [quantityItem] = useState(5);
    const [lastItemIndex, setLastItemIndex] = useState(quantityItem);
    const firstItemIndex = 0;
    // const sortNews = newses.sort((a,b) => Number(b.pubData) - Number(a.pubDate))
    const currentItem = newses.slice(firstItemIndex, lastItemIndex);

    const paginate = () => {
        if (newses.length > lastItemIndex) {
            setLastItemIndex(lastItemIndex + quantityItem);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3200/news");
            setNews(response.data);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.newsItems}>
                {currentItem.map((news, index) => (
                    <>
                        {(index + 1) % 3 === 0 ? (
                            <Item key={news.id} items={news} isThird={true} isNews={true} />
                        ) : (
                            <Item key={news.id} items={news} isThird={false} isNews={true}/>
                        )}
                    </>
                ))}
            </div>
            <Button onClick={paginate}>Смотреть еще</Button>
        </div>
    );
};

export default NewsItems;
