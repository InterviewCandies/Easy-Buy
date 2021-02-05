import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Carousel from "react-elastic-carousel";

const Grid = styled.div`
  display: grid;
  padding: 0px 40px;
  position: relative;
  @media (max-width: 1000px) {
    padding: 0;
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
  padding: 8px 15px;
`;
const Recipe = styled.div`
  width: 400px;
  padding: 10px;
  margin: 0px 20px;
  background-color: #fff;
  border-radius: 16px;
  margin: 0px 20px;
  @media (max-width: 400px) {
    width: 300px;
  }
`;
const Container = styled.div`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;
function Cart() {
  const products = JSON.parse(localStorage.getItem("cart") || "[]");
  return (
    <Layout>
      <div
        style={{
          verticalAlign: "center",
        }}
      >
        <Grid>
          <Recipe>
            <CardTitle>Total: $234</CardTitle>
          </Recipe>
          <Carousel>
            {products.map((product) => (
              <CardItem key={product.id}>
                <CardImage src={product.image}></CardImage>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.description}</CardSubtitle>
                  <h2>{product.price}</h2>
                </CardContent>
              </CardItem>
            ))}
          </Carousel>
        </Grid>
      </div>
    </Layout>
  );
}

export default Cart;
