import React from "react";
import styled from "styled-components";

function Button(props) {
  const StyledButton = styled.button`
    padding: 10px 10px;
    background-color: ${props.color || "#0F56B3"};
    width: 100%;
    max-width: 200px;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    &:hover {
      background-color: #cecece;
    }
  `;
  return (
    <StyledButton
      onClick={props.handleClick}
      disabled={props.disabled || false}
      style={props.disabled ? { background: "#cecece" } : null}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
