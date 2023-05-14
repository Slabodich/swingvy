import React, {useState} from 'react';
import styles from './List.module.css'
import TextAboutAmoCRM from "../TextAboutAmoCRM/TextAboutAmoCRM";
import Navigation from "../ui/Navigation/Navigation";
import NewsItems from "../NewsItems/NewsItems";
import PromotionItems from "../PromotionItems/PromotionItems";

const List = () => {
    const [activeTab, setActiveTab] = useState(2);

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

export default List;