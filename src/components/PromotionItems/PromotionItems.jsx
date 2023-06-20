import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import styles from './PromotionItems.module.css';
import Button from '../ui/Button/Button';
import CircularProgress from '@mui/material/CircularProgress';

const PromotionItems = ({ isLoading, setIsLoading }) => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(
        'https://server-h42k.onrender.com/promotions',
      );
      setPromotions(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.promotionItems}>
        {!isLoading ? (
          promotions.map((promotion) => (
            <Item key={promotion.id} items={promotion} isPromo={true} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default PromotionItems;
