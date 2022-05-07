import React from "react";
import { Spring } from "react-spring";

const StyledIcon = ({ open, iconName }) => (
  <Spring
    from={{ transform: "rotate(0deg)" }}
    to={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)"
    }}
  >
    {props => (
      <i className="material-icons" style={{ ...props, padding: 16 }}>
        {iconName || "keyboard_arrow_down"}
      </i>
    )}
  </Spring>
);

export default StyledIcon;
