import React from "react";
import Form from "react-bootstrap/Form";

import BaseIcon from "../ui/BaseIcon";
import BaseErrors from "../ui/BaseErrors";
import { InputGroup } from "react-bootstrap";

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
  inputText?: any;
  // ref?: React.RefObject<HTMLInputElement>;
}

const BaseInput: React.FC<TextInputProps> = ({
  inputText,
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
  // ref,
}) => {
  return (
    <>
      <div className={`${size}`}>
        {label && (
          <Form.Label className={`form-label ${labelClass}`}>
            {label}
          </Form.Label>
        )}

        <InputGroup className={`form-group  ${inputIcon && "icon"} `}>
          {(inputIcon || inputText) && (
            <InputGroup.Text>
              {inputIcon && <BaseIcon icon={inputIcon} classes={iconClass} />}
              {inputText && inputText}
            </InputGroup.Text>
          )}

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
            // ref={ref}
          />
        </InputGroup>
        {formik && <BaseErrors name={name} formik={formik}></BaseErrors>}
      </div>
    </>
  );
};

export default BaseInput;
