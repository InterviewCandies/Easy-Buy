import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../../asset/img/cart.svg";
import HeartIcon from "../../asset/img/heart.svg";
import HeartPlainIcon from "../../asset/img/empty-heart.svg";
import Tooltip from "react-tooltip-lite";
const Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 16px;
  position: relative;
  padding: 8px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
const CardImage = styled.img`
  object-fit: contain;
  height: 140px;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 2px;
`;
const CardSubtitle = styled.p`
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500px;
  color: #6e798c;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const CardContent = styled.div`
  text-align: left;
`;
const CardActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const CartButton = styled.button`
  background-color: #0f56b3;
  padding: 0;
  width: 100%;
  color: white;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  &:hover {
    background-color: #cecece;
    color: #000;
  }
`;

function Card({ product }) {
  const [favourite, setFavourite] = useState(false);
  const history = useHistory();
  return (
    <Container onClick={() => history.push("/product/" + product.id)}>
      <Tooltip content="Add to your wishlist" direction="right">
        <Icon
          src={favourite ? HeartIcon : HeartPlainIcon}
          onClick={(e) => {
            e.stopPropagation();
            setFavourite((prevState) => !prevState);
          }}
        ></Icon>
      </Tooltip>
      <CardImage src={product.image}></CardImage>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <div>
          <CardSubtitle>{product.description}</CardSubtitle>
        </div>
        <CardActions>
          <h3>{product.price}</h3>
          <Tooltip content="Add to your cart" direction="right">
            <CartButton>Buy</CartButton>
          </Tooltip>
        </CardActions>
      </CardContent>
    </Container>
  );
}

export default Card;
