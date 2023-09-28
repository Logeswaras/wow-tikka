import React from "react";
import { faBagShopping } from "../icons/Icons";
import { Badge } from "react-bootstrap";

//custom component
import BaseIcon from "../components/ui/BaseIcon";

interface IProps {
  count: number;
  defaultClass: string;
}

const BaseBadge: React.FC<IProps> = ({ count, defaultClass }) => {
  return (
    <div className={`position-relative ${defaultClass}`}>
      <BaseIcon icon={faBagShopping} classes="fs-3 text-warning" />
      <Badge
        bg="danger"
        className="position-absolute lg-card-icon rounded-circle"
        style={{ top: -5, left: 15 }}
      >
        {count}
      </Badge>
    </div>
  );
};

export default BaseBadge;
