import React from "react";
import Button from "react-bootstrap/Button";

import BaseIcon from "../ui/BaseIcon";

interface IProps {
  id?: string;
  name?: string;
  types?: "button" | "submit" | "reset";
  defaultClass: string;
  handleClick?: any;
  handleSubmit?: any;
  variant?: any;
  icon?: any;
}

const button: React.FC<IProps> = ({
  id,
  name,
  types,
  defaultClass,
  handleClick,
  handleSubmit,
  variant,
  icon,
}) => {
  return (
    <>
      <Button
        id={id}
        type={types}
        variant={variant}
        className={defaultClass}
        onClick={handleClick}
        onSubmit={handleSubmit}
      >
        {name && name} {icon && <BaseIcon icon={icon} />}
      </Button>
    </>
  );
};

export default button;
