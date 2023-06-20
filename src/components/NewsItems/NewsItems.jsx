import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import styles from './NewsItems.module.css';
import axios from 'axios';
import Button from '../ui/Button/Button';
import CircularProgress from '@mui/material/CircularProgress';

const NewsItems = ({ isLoading, setIsLoading }) => {
  const [newses, setNews] = useState([]);
  const [quantityItem] = useState(5);
  const [lastItemIndex, setLastItemIndex] = useState(quantityItem);

  const firstItemIndex = 0;
  const currentItem = newses.slice(firstItemIndex, lastItemIndex);

  const paginate = () => {
    if (newses.length > lastItemIndex) {
      setLastItemIndex(lastItemIndex + quantityItem);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get('https://server-h42k.onrender.com/news');
      setNews(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.newsItems}>
        {!isLoading ? (
          currentItem.map((news, index) => (
            <Item key={news.id} items={news} isThird={(index + 1) % 3 === 0} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      {!isLoading && <Button onClick={paginate}>Смотреть еще</Button>}
    </div>
  );
};

export default NewsItems;
