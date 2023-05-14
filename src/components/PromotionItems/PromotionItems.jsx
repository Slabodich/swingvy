import React, {useEffect, useState} from 'react';
import axios from "axios";
import Item from "../Item/Item";
import styles from "./PromotionItems.module.css"

const PromotionItems = () => {

  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3201/promotions");
      setPromotions(response.data);
    };
  
    fetchData();
  }, []);
  return (
    <div className={styles.promotionItems}>
      {promotions.map((promotion) => (
            <Item key={promotion.id} items={promotion} isPromo={true}/>  
      ))}
    </div>
  );
};

export default PromotionItems;