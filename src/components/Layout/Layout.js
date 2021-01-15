import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Logo = styled.h1`
  font-family: "Rozha One", serif;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
function Layout(props) {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content>
        <Logo>
          <span style={{ color: "#0F56B3" }}>Easy</span>Buy
        </Logo>
        {props.children}
        <Footer></Footer>
      </Content>
    </Container>
  );
}

export default Layout;
