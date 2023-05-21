import React from "react";
import styles from "./CheckBox.module.css";
import cnBind from "classnames/bind";

const CheckBox = ({
  name,
  checked,
  disabled,
  value,
  errors,
  touched,
  lastcheckBox,
    onChange
}) => {
  const cx = cnBind.bind(styles);
  return (
    <div className={cx("wrapper", {lastcheckBox: lastcheckBox})}>
      <input
        className={styles.checkBox}
        id={value}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={value} className={cx({ errorLable: errors && touched })}>
        {value}{" "}
      </label>
      {errors && touched && <div className={styles.error}>{errors}</div>}
    </div>
  );
};

export default CheckBox;
