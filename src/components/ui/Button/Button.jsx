import React from 'react';
import styles from "./Button.module.css"
import cnBind from "classnames/bind";

const Button = ({save, cancel, children, ...props}) => {
  const cx = cnBind.bind(styles);
  return (
    <button {...props}className={cx("Button", {saveBtn: save, cancelBtn: cancel})}>
      {children}
    </button>
  );
};

export default Button;