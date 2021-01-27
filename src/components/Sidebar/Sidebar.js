import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import HomeIcon from "../../asset/img/home.svg";
import HangerIcon from "../../asset/img/remigho-hanger-1.svg";
import ShoeIcon from "../../asset/img/shoe.svg";
import ToyIcon from "../../asset/img/toy.svg";
import PhoneIcon from "../../asset/img/cellphone.svg";
import HeartIcon from "../../asset/img/empty-heart.svg";
import UserIcon from "../../asset/img/user.svg";
import SportIcon from "../../asset/img/sport.svg";
import GithubIcon from "../../asset/img/github.svg";
import CartIcon from "../../asset/img/cart.svg";
import { PRIMARY_COLOR } from "../../common";
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
  position: fixed;
`;
const NavItem = styled.li`
  padding: 20px;
  margin: 0;
  ${(props) =>
    props.active &&
    ` ${Icon} {
      -webkit-filter: invert(100%) !important;
    }
    background-color: ${PRIMARY_COLOR}; 
        pointer-events: none;
    `}
  &:hover {
    background-color: ${"#e2e2e2"};
  }
`;
function Sidebar() {
  const history = useHistory();
  const currentPath = history.location.pathname.toLowerCase();
  return (
    <div>
      <Nav>
        <NavItem active={currentPath.includes("/all")}>
          <Link to="/all">
            <Icon src={HomeIcon} alt="home"></Icon>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/category/clothes">
            <Icon src={HangerIcon} alt="hanger"></Icon>
          </Link>
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
          <Link to="/">
            <Icon src={UserIcon} alt="user"></Icon>
          </Link>
        </NavItem>
        <NavItem>
          <Icon src={GithubIcon} alt="github"></Icon>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Sidebar;
