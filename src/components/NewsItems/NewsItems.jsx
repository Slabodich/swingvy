import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";
import styles from './NewsItems.module.css'
import axios from "axios";

const NewsItems = () => {

    const [newses, setNews] = useState([]);

    const [isFhird, setIsFhird] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3200/news')
            setNews(response.data)
        }

        fetchData()
    }, [])

    return (
        <div className={styles.newsItems}>
            {newses.map((news) => (
                <>
                    {news.id % 3 === 0 ?
                    <Item
                        isFhird={isFhird}
                        key={news.id}
                        news={news}
                    />
                    : <Item key={news.id} news={news}/>}
                </>
            ))}
        </div>
    );
};

export default NewsItems;