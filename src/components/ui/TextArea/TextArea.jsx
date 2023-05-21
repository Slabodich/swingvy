import React, { useRef } from "react";
import styles from "./TextArea.module.css";
import TextareaAutosize from "react-textarea-autosize";
import cnBind from "classnames/bind";

const TextArea = ({ lable, value, onChange, id, name, errors, touched }) => {
  const cx = cnBind.bind(styles);
  const areaRef = useRef(null);
  const defaultRow = () => {
    areaRef.current.style.height = "16px";
  };
  return (
    <div className={styles.wrapper}>
      <label
        className={cx("lable", { errorLabel: errors && touched })}
        htmlFor={lable}
      >
        {lable}
      </label>
      <TextareaAutosize
        id={id}
        name={name}
        onChange={onChange}
        ref={areaRef}
        onBlur={defaultRow}
        value={value}
        className={cx("textArea", {errorInput: errors && touched})}
        placeholder="..."
      />
      {errors && touched && (
        <div  className={cx( "error")}>{errors}</div>
      )}
    </div>
  );
};

export default TextArea;
