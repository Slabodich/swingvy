import React, {useState} from 'react';
import styles from './ItemList.module.css'
import TextAboutAmoCRM from "../TextAboutAmoCRM/TextAboutAmoCRM";
import Navigation from "../ui/Navigation/Navigation";
import NewsItems from "../NewsItems/NewsItems";
import PromotionItems from "../PromotionItems/PromotionItems";

const ItemList = () => {
    const [activeTab, setActiveTab] = useState(false);

    return (
        <section className={styles.wrapper}>
            <TextAboutAmoCRM />
            <div className={styles.ItemList}>
                <Navigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {activeTab === 1 ? <NewsItems />
                : activeTab === 2 && <PromotionItems />}
            </div>
        </section>
    );
};

export default ItemList;