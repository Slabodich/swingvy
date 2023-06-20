import React, { useState } from 'react';
import styles from './List.module.css';
import Navigation from '../../ui/Navigation/Navigation';
import PromotionItems from '../../PromotionItems/PromotionItems';
import NewsItems from '../../NewsItems/NewsItems';

const List = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.wrapper}>
      <div className={styles.ListItem}>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 ? (
          <NewsItems isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          activeTab === 2 && (
            <PromotionItems isLoading={isLoading} setIsLoading={setIsLoading} />
          )
        )}
      </div>
    </section>
  );
};

export default List;
