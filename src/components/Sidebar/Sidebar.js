import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import HomeIcon from "../../asset/img/home.svg";
import HangerIcon from "../../asset/img/tshirt.svg";
import ShoeIcon from "../../asset/img/shoe.svg";
import ToyIcon from "../../asset/img/toy.svg";
import PhoneIcon from "../../asset/img/cellphone.svg";
import HeartIcon from "../../asset/img/empty-heart.svg";
import UserIcon from "../../asset/img/user.svg";
import SportIcon from "../../asset/img/sport.svg";
import GithubIcon from "../../asset/img/github.svg";
import CartIcon from "../../asset/img/cart.svg";
import { PRIMARY_COLOR, DEFAULT_COLOR } from "../../common";
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
    background-color: ${DEFAULT_COLOR};
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
            <Icon src={HomeIcon} alt="home" data-tip data-for="home"></Icon>
          </Link>
        </NavItem>
        <ReactTooltip id="home" place="right">
          Home
        </ReactTooltip>
        <NavItem active={currentPath.includes("/clothings")}>
          <Link to="/category/clothings">
            <Icon src={HangerIcon} alt="hanger"></Icon>
          </Link>
        </NavItem>
        <NavItem active={currentPath.includes("/shoes")}>
          <Link to="/category/shoes">
            <Icon src={ShoeIcon} alt="shoe"></Icon>
          </Link>
        </NavItem>
        <NavItem active={currentPath.includes("/toy")}>
          <Link to="/category/toy">
            <Icon src={ToyIcon} alt="toy"></Icon>
          </Link>
        </NavItem>
        <NavItem active={currentPath.includes("/electronics")}>
          <Link to="/category/electronics">
            <Icon src={PhoneIcon} alt="phone"></Icon>
          </Link>
        </NavItem>
        <NavItem active={currentPath.includes("/sports")}>
          <Link to="/category/sports">
            <Icon src={SportIcon} alt="sport"></Icon>
          </Link>
        </NavItem>
        <NavItem active={currentPath.includes("/wishlist")}>
          <Link to="/wishlist">
            <Icon
              src={HeartIcon}
              alt="wishlist"
              data-tip
              data-for="wishlist"
            ></Icon>
          </Link>
        </NavItem>
        <ReactTooltip id="wishlist" place="right">
          Wishlist
        </ReactTooltip>
        <NavItem active={currentPath.includes("/cart")}>
          <Link to="/cart">
            <Icon src={CartIcon} alt="cart"></Icon>
          </Link>
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
