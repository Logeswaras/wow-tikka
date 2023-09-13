import React from "react";
import Button from "react-bootstrap/Button";

interface IProps {
  id?: string;
  name?: string;
  types?: "button" | "submit" | "reset";
  defaultClass: string;
  handleClick?: any;
  handleSubmit?: any;
  variant?: any;
}

const button: React.FC<IProps> = ({
  id,
  name,
  types,
  defaultClass,
  handleClick,
  handleSubmit,
  variant,
}) => {
  return (
    <>
      {/* <button
        id={id}
        type={types}
        className={`rounded-1 ${defaultClass}`}
        onClick={handleClick}
        onSubmit={handleSubmit}
      >
        {name && name}
      </button> */}
      <Button
        id={id}
        type={types}
        variant={variant}
        className={`rounded-1 ${defaultClass}`}
        onClick={handleClick}
        onSubmit={handleSubmit}
      >
        {name && name}
      </Button>
    </>
  );
};

export default button;
