import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  width: 81px;
  height: 36px;
  color: black;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  background: #e0e0e0;
  color: #3f3f3f;
`;
const Button = ({ color, size, endIcon, variant, hover, focus }) => {
  return (
    <div>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
};

export default Button;
