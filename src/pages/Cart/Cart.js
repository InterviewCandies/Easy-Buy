import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Carousel from "react-elastic-carousel";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { SECONDARY_COLOR } from "../../common";

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 0px 40px;
  position: relative;
  grid-template-columns: 300px 2fr;
  margin-bottom: 30px;
  @media (max-width: 1000px) {
    padding: 10px;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
const CardItem = styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 10px;
  height: 250px;
  align-items: center;
`;
const CardImage = styled.img`
  width: 150px;
  object-fit: contain;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 2px;
  margin: 5px;
  margin-bottom: 10px;
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
  margin: 0;
`;
const CardContent = styled.div`
  text-align: left;
  padding: 8px 15px;
`;
const Recipe = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: min-content;
  background-color: #fff;
  border-radius: 16px;
  margin: 20px 10px;
`;
const Container = styled.div`
  position: relative;
  top: 20%;
  @media (max-width: 750px) {
    top: 0;
  }
`;
function Cart() {
  let products = JSON.parse(localStorage.getItem("cart") || "[]");
  const [, forceUpdate] = useState(false);
  const handleRemoveProduct = (id) => {
    products = products.filter((product) => product.id !== id);
    forceUpdate((it) => !it);
    localStorage.setItem("cart", JSON.stringify(products));
  };
  console.log(products);
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += Number(
      product.price.substring(1, product.price.length).split(",").join("")
    );
  });
  return (
    <Layout>
      <Container>
        <Grid>
          <Recipe>
            <p style={{ marginBottom: "10px" }}>Online Shopping Website</p>
            <Logo size="1.5rem"></Logo>
            <CardSubtitle style={{ marginTop: "10px", height: "auto" }}>
              {"Date: " + new Date().toDateString()}
            </CardSubtitle>
            <CardSubtitle style={{ marginTop: "5px", height: "auto" }}>
              Bill to {localStorage.getItem("user")}
            </CardSubtitle>
            <CardTitle style={{ marginTop: "10px" }}>
              Total: ${totalPrice}
            </CardTitle>
            <Button>Order</Button>
          </Recipe>
          <Carousel>
            {products.map((product) => (
              <CardItem key={product.id}>
                <CardImage src={product.image}></CardImage>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.description}</CardSubtitle>
                  <h2>{product.price}</h2>
                  <Button
                    color={SECONDARY_COLOR}
                    handleClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </CardItem>
            ))}
          </Carousel>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Cart;
