import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import styles from './PromotionItems.module.css';
import Button from '../ui/Button/Button';

const PromotionItems = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://server-h42k.onrender.com/promotions',
      );
      setPromotions(response.data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.promotionItems}>
        {promotions.map((promotion) => (
          <Item key={promotion.id} items={promotion} isPromo={true} />
        ))}
      </div>
      <Button>Смотреть еще</Button>
    </div>
  );
};

export default PromotionItems;
