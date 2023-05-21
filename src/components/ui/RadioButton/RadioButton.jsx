import React from "react";
import styles from "./RadioButton.module.css";

const RadioButton = ({  onChange, checked, disabled, lable, value }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        id={value}
        value={value}
        name={"radio"}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        
      />
      <label htmlFor={lable}>{lable}</label>
    </div>
  );
};

export default RadioButton;
