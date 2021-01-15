import React from "react";
import styled from "styled-components";
import HomeIcon from "../../asset/img/home.svg";
import HangerIcon from "../../asset/img/remigho-hanger-1.svg";
import ShoeIcon from "../../asset/img/boot-vector-publicdomain.svg";
import ToyIcon from "../../asset/img/toy.svg";
import PhoneIcon from "../../asset/img/cellphone.svg";
import HeartIcon from "../../asset/img/heart-plain.svg";
import UserIcon from "../../asset/img/user.svg";
import SportIcon from "../../asset/img/sport.svg";
import GithubIcon from "../../asset/img/github.svg";
import CartIcon from "../../asset/img/cart.svg";

const primaryColor = "#0F56B3";
const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-item: space-around;
  position: sticky;
`;
const NavItem = styled.li`
  padding: 20px;
  margin: 0;
  &:hover {
    ${Icon} {
      -webkit-filter: invert(100%) !important;
    }
    background-color: ${primaryColor};
  }
`;
function Sidebar() {
  return (
    <div>
      <Nav>
        <NavItem>
          <Icon src={HomeIcon} alt="home"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={HangerIcon} alt="hanger"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={ShoeIcon} alt="shoe"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={ToyIcon} alt="toy"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={PhoneIcon} alt="phone"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={SportIcon} alt="sport"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={HeartIcon} alt="phone"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={CartIcon} alt="cart"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={UserIcon} alt="user"></Icon>
        </NavItem>
        <NavItem>
          <Icon src={GithubIcon} alt="github"></Icon>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Sidebar;
