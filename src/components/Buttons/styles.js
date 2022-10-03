import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ size }) =>
    size === "lg" ? "92px" : size === "md" ? "81px" : "73px"};
  height: ${({ size }) =>
    size === "lg" ? "42px" : size === "md" ? "36px" : "32px"};
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
 
  color: ${({ color }) =>
    color === "danger" || "secondary" || "primary" ? "#FFFFFF" : "#3F3F3F"};
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
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #3D5AFE" : ""};
    &hover:{
      
    }
`;
