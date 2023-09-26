import React from "react";
import Form from "react-bootstrap/Form";

import BaseIcon from "../ui/BaseIcon";

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
        {label && (
          <Form.Label className={`form-label ${labelClass}`}>
            {label}
          </Form.Label>
        )}

        <div className={`form-group  ${inputIcon && "icon"}`}>
          {inputIcon ? (
            <span className="form-control-feedback">
              <BaseIcon icon={inputIcon} classes={iconClass} />
            </span>
          ) : null}

          <Form.Control
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
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          {/* {formik && <BaseErrors name={name} formik={formik}></BaseErrors>} */}
        </div>
      </div>
    </>
  );
};

export default BaseInput;
