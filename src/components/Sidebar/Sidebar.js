import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
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
import { PRIMARY_COLOR, DEFAULT_COLOR, AUTHEN_TOKEN } from "../../common";
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
        <CustomTooltip title="Home" placement="right" arrow>
          <Link to="/all">
            <NavItem active={currentPath.includes("/all")} arrow>
              <Icon src={HomeIcon} alt="home"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Clothings" placement="right" arrow>
          <Link to="/category/clothings">
            <NavItem active={currentPath.includes("/clothings")}>
              <Icon src={HangerIcon} alt="hanger"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Shoes" placement="right" arrow>
          <Link to="/category/shoes">
            <NavItem active={currentPath.includes("/shoes")}>
              <Icon src={ShoeIcon} alt="shoe"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Toy" placement="right" arrow>
          <Link to="/category/toy">
            <NavItem active={currentPath.includes("/toy")}>
              <Icon src={ToyIcon} alt="toy"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Electronics" placement="right" arrow>
          <Link to="/category/electronics">
            <NavItem active={currentPath.includes("/electronics")}>
              <Icon src={PhoneIcon} alt="phone"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Sports" placement="right" arrow>
          <Link to="/category/sports">
            <NavItem active={currentPath.includes("/sports")}>
              <Icon src={SportIcon} alt="sport"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Wishlist" placement="right" arrow>
          <Link to="/wishlist">
            <NavItem active={currentPath.includes("/wishlist")}>
              <Icon src={HeartIcon} alt="wishlist"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Shopping cart" placement="right" arrow>
          <Link to="/cart">
            <NavItem active={currentPath.includes("/cart")}>
              <Icon src={CartIcon} alt="cart"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Sign out" placement="right" arrow>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem(AUTHEN_TOKEN);
            }}
          >
            <NavItem>
              <Icon src={UserIcon} alt="user"></Icon>
            </NavItem>
          </Link>
        </CustomTooltip>
        <CustomTooltip title="Github" placement="right">
          <a href="https://github.com/InterviewCandies" target="_blank">
            <NavItem>
              <Icon src={GithubIcon} alt="github"></Icon>
            </NavItem>
          </a>
        </CustomTooltip>
      </Nav>
    </div>
  );
}

export default Sidebar;
