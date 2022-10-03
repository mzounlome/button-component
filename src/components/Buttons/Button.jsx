import { MdOutlineLocalGroceryStore } from "react-icons/md";
import React from "react";
import { StyledButton } from "./style";

const Button = ({
  color,
  size,
  endIcon,
  variant,
  hover,
  focus,
  text,
  startIcon,
  disabled,
  disabledShadow,
  background,
}) => {
  return (
    <div className="button-container">
      <StyledButton
        color={color}
        background={background}
        variant={variant}
        size={size}
        disabled={disabled}
        hover={hover}
        disabledShadow={disabledShadow}
      >
        {startIcon === "local_grocery_store" && <MdOutlineLocalGroceryStore />}
        {text ? text : "Default"}
        {endIcon === "local_grocery_store" && <MdOutlineLocalGroceryStore />}
      </StyledButton>
    </div>
  );
};

export default Button;
