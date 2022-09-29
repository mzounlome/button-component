import "./Button.scss";

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ size }) =>
    size === "lg" ? "92px" : size === "md" ? "81px" : "73px"};
  height: ${({ size }) =>
    size === "lg" ? "42px" : size === "md" ? "36px" : "32px"};
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
 
  color: ${({ color }) =>
    color === "danger"
      ? "#FFFFFF"
      : color === "secondary"
      ? "#FFFFFF"
      : color === "primary"
      ? "#FFFFFF"
      : "#3F3F3F"};
  background: ${({ variant }) =>
    variant === "outlined" ? "white" : "#E0E0E0"};
   
background ${({ color }) =>
  color === "danger"
    ? "#D32F2F"
    : color === "primary"
    ? "#2962FF"
    : color === "secondary"
    ? "#455A64"
    : "#E0E0E0"};
  &:hover,
  &:focus {
    background: "pink";
  }
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #3D5AFE" : ""};
`;

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
}) => {
  return (
    <div className="button-container">
      <StyledButton
        color={color}
        variant={variant}
        size={size}
        disabled={disabled}
        hover={hover}
      >
        {startIcon === "local_grocery_store" && <MdOutlineLocalGroceryStore />}{" "}
        {text ? text : "Default"}
        {endIcon === "local_grocery_store" && <MdOutlineLocalGroceryStore />}
      </StyledButton>
    </div>
  );
};

export default Button;
