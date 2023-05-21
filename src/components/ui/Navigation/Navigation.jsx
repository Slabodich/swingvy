import React from "react";
import styles from "./Navigation.module.css";
import cnBind from "classnames/bind";
const tabs = [
  {
    _id: 1,
    name: "Новости",
  },
  {
    _id: 2,
    name: "Акции",
  },
];
const cx = cnBind.bind(styles);

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab._id}
          onClick={() => setActiveTab(tab._id)}
          className={cx("button", { active: activeTab === tab._id })}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
