import React, { useState } from "react";
import styles from "./List.module.css";
import TextAboutAmoCRM from "../../TextAboutAmoCRM/TextAboutAmoCRM";
import Navigation from "../../ui/Navigation/Navigation";
import PromotionItems from "../../PromotionItems/PromotionItems";
import NewsItems from "../../NewsItems/NewsItems";

const List = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className={styles.wrapper}>
      <TextAboutAmoCRM />
      <div className={styles.ListItem}>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 ? (
          <NewsItems />
        ) : (
          activeTab === 2 && <PromotionItems />
        )}
      </div>
    </section>
  );
};

export default List;
