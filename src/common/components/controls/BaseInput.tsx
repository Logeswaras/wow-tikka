import React from "react";

// import BaseErrors from "../ui/BaseErrors";

interface TextInputProps {
  name: string;
  value?: any;
  type: string;
  label?: string;
  labelClass?: string;
  inputClass?: string;
  inputBgColor?: string;
  placeholder?: string;
  readOnly?: boolean;
  size?: string;
  minLength?: number;
  maxLength?: number;
  inputIcon?: any;
  iconClass?: string;
  handleBlur?: any;
  handleChange?: any;
  formik?: any;
}

const BaseInput: React.FC<TextInputProps> = ({
  inputIcon,
  iconClass,
  labelClass,
  inputClass,
  inputBgColor,
  label,
  value,
  name,
  placeholder,
  readOnly,
  type,
  minLength,
  maxLength,
  size,
  handleChange,
  handleBlur,
  formik,
}) => {
  return (
    <>
      <div className={`${size}`}>
        {label && <label className={`form-label ${labelClass}`}>{label}</label>}
        <div className={`form-group ${inputIcon && "has-search"}`}>
          {inputIcon ? (
            <span className="form-control-feedback">
              {/* <BaseIcon icon={inputIcon} classes={iconClass} /> */}
            </span>
          ) : null}

          <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            minLength={minLength}
            maxLength={maxLength}
            className={`form-control ${inputClass} ${inputBgColor}`}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {/* {formik && <BaseErrors name={name} formik={formik}></BaseErrors>} */}
        </div>
      </div>
    </>
  );
};

export default BaseInput;
