import React from "react";
import styled from "styled-components";

function Button(props) {
  const StyledButton = styled.button`
    padding: 10px 10px;
    background-color: ${props.color || "#0F56B3"};
    width: 100%;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    text-transform: uppercase;
    &:hover {
      background-color: #cecece;
    }
  `;
  return (
    <StyledButton onClick={props.handleClick}>{props.children}</StyledButton>
  );
}

export default Button;
