import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../common";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
const Container = styled.div`
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;
const Box = styled.div`
  background-color: #fff;
  padding: 50px;
  text-align: center;
  border-radius: 16px;
`;
function NotFound() {
  const history = useHistory();
  return (
    <Container>
      <Box>
        <Logo size="3rem"></Logo>
        <h1 style={{ fontSize: "4rem", margin: "10px" }}>404</h1>
        <h1>Page not found</h1>
        <Button handleClick={() => history.push("/all")}>Go home</Button>
      </Box>
    </Container>
  );
}

export default NotFound;
