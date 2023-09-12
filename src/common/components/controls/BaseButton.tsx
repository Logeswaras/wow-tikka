import React from "react";

interface IProps {
  id?: string;
  name?: string;
  types?: "button" | "submit" | "reset";
  defaultClass: string;
  handleClick?: any;
  handleSubmit?: any;
}

const Button: React.FC<IProps> = ({
  id,
  name,
  types,
  defaultClass,
  handleClick,
  handleSubmit,
}) => {
  return (
    <>
      <button
        id={id}
        type={types}
        className={`rounded-1 ${defaultClass}`}
        onClick={handleClick}
        onSubmit={handleSubmit}
      >
        {name && name}
      </button>
    </>
  );
};

export default Button;
