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
     color && color === "danger"
       ? "#FFFFFF"
       : color && color === "secondary"
       ? color && "#FFFFFF"
       : color && color === "primary"
       ? color && "#FFFFFF"
       : color && color === "white"
       ? "#FFFFFF"
       : color && color === "blue"
       ? "#3D5AFE"
       : "#3F3F3F"};


  
   
background ${({ color, background, variant }) =>
  color && color === "danger"
    ? "#D32F2F"
    : color && color === "primary"
    ? "#2962FF"
    : color && color === "secondary"
    ? "#455A64"
    : variant === "outlined"
    ? "white"
    : background && background === "blue"
    ? "#3D5AFE"
    : background && background === "plain"
    ? "#FFFFFF"
    : "#E0E0E0"};
  &:hover,
  &:focus {
    background: "#F0F";
    cursor: pointer
  }
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #3D5AFE" : "#FFFFFF"};
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
