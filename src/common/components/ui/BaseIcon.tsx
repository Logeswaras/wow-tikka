import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  icon: any;
  classes?: string;
}

const BaseIcon: React.FC<IProps> = ({ icon, classes }) => {
  return <FontAwesomeIcon icon={icon} className={classes} />;
};

export default BaseIcon;
