import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { AUTHEN_TOKEN, PRIMARY_COLOR } from "../../common";

const Logo = styled.h1`
  font-family: "Rozha One", serif;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Content = styled.div`
  position: relative;
  text-align: center;
  width: calc(100vw - 100px);
`;
const Box = styled.div`
  min-height: calc(100vh - 70px);
`;
function Layout(props) {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content>
        <Box>
          <Logo style={{ textAlign: "center" }}>
            <span style={{ color: "#0F56B3" }}>Easy</span>Buy
          </Logo>
          <p style={{ margin: "10px 10px 20px 10px" }}>
            Hi{" "}
            <span style={{ color: PRIMARY_COLOR, fontWeight: "500" }}>
              {localStorage.getItem(AUTHEN_TOKEN)}
            </span>
            , We're happy to have you here!
          </p>
          {props.children}
        </Box>
        <Footer></Footer>
      </Content>
    </Container>
  );
}

export default Layout;
