import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Tooltip from "react-tooltip-lite";
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
        <Tooltip content="Home" direction="right">
          <Link to="/all">
            <NavItem active={currentPath.includes("/all")}>
              <Icon src={HomeIcon} alt="home"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Clothings" direction="right">
          <Link to="/category/clothings">
            <NavItem active={currentPath.includes("/clothings")}>
              <Icon src={HangerIcon} alt="hanger"></Icon>
            </NavItem>
          </Link>
        </Tooltip>

        <Tooltip content="Shoes" direction="right">
          <Link to="/category/shoes">
            <NavItem active={currentPath.includes("/shoes")}>
              <Icon src={ShoeIcon} alt="shoe"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Toy" direction="right">
          <Link to="/category/toy">
            <NavItem active={currentPath.includes("/toy")}>
              <Icon src={ToyIcon} alt="toy"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Electronics" direction="right">
          <Link to="/category/electronics">
            <NavItem active={currentPath.includes("/electronics")}>
              <Icon src={PhoneIcon} alt="phone"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Sports" direction="right"></Tooltip>
        <Link to="/category/sports">
          <NavItem active={currentPath.includes("/sports")}>
            <Icon src={SportIcon} alt="sport"></Icon>
          </NavItem>
        </Link>
        <Tooltip content="Wishlist" direction="right">
          <Link to="/wishlist">
            <NavItem active={currentPath.includes("/wishlist")}>
              <Icon src={HeartIcon} alt="wishlist"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Shopping cart" direction="right">
          <Link to="/cart">
            <NavItem active={currentPath.includes("/cart")}>
              <Icon src={CartIcon} alt="cart"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Sign out" direction="right">
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("user");
            }}
          >
            <NavItem>
              <Icon src={UserIcon} alt="user"></Icon>
            </NavItem>
          </Link>
        </Tooltip>
        <Tooltip content="Github" direction="right">
          <a href="https://github.com/InterviewCandies" target="_blank">
            <NavItem>
              <Icon src={GithubIcon} alt="github"></Icon>
            </NavItem>
          </a>
        </Tooltip>
      </Nav>
    </div>
  );
}

export default Sidebar;
