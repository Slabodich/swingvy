import React from "react";
import cnBind from "classnames/bind";
import styles from "./Input.module.css";
import InputMask from "react-input-mask";

const Input = ({
  id,
  name,
  type,
  lable,
  onChange,
  onBlur,
  value,
  placeholder,
  mask,
  errors,
  touched,
  lastContact
}) => {
  const cx = cnBind.bind(styles);
  return (
    <div className={cx("wrapper",{lastCont: lastContact})}>
      <label
        className={cx("lable", { errorLabel: errors && touched })}
        htmlFor="name"
      >
        {lable}
      </label>
      <InputMask
        mask={mask}
        className={cx("input", {errorInput: errors && touched})}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {touched && errors && (
        <div  className={cx( "error")}>{errors}</div>
      )}
    </div>
  );
};

export default Input;
