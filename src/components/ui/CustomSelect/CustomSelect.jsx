import React from "react";
import Select from "react-select";
import "./CustomSelect.css";
import classname from "classnames";

const CustomSelect = ({ onChange, options, value, lable, errors, touched }) => {

  const defaultValue = () => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="wrapper">
      <label className={classname("wrapper__lable-select", { errorLabel: errors && touched })}htmlFor={lable}>
        {lable}
      </label>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        classNamePrefix="custom-select"
        options={options}
        placeholder="..."
      />
       {errors && touched && (
        <div  className={classname("error")}>{errors}</div>
      )}
    </div>
  );
};

export default CustomSelect;
