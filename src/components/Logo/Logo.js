import React from "react";
import styled from "styled-components";

function Logo({ size }) {
  const Heading = styled.h1`
    font-family: "Rozha One", serif;
    margin: 0;
    font-size: ${size || "1rem"};
  `;
  return (
    <Heading>
      <span style={{ color: "#0F56B3" }}>Easy</span>Buy
    </Heading>
  );
}

export default Logo;
