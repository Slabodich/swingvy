import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";
import styles from './NewsItems.module.css'
import axios from "axios";

const NewsItems = () => {

    const [newses, setNews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3200/news')
            setNews(response.data)
        }

        fetchData()
    }, [])

    return (
        <div className={styles.newsItems}>
            {newses.map(news => (
                <Item key={news.id} news={news}/>
            ))}
        </div>
    );
};

export default NewsItems;