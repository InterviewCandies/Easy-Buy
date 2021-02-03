import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Pagination from "../../containers/Pagination/Pagination";
import Button from "../../components/Button/Button";
import SearchBar from "../../containers/SearchBar/SearchBar";
import Tooltip from "react-tooltip-lite";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-bottom: 30px;
  position: relative;
`;

const Container = styled.div`
  display: grid;
  background-color: #fff;
  border-radius: 16px;
  grid-template-columns: 200px 1fr;
  margin: 10px 30px;
  padding: 10px;
`;
const CardImage = styled.img`
  width: 200px;
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
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
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
    background-color: #cecece !important;
    color: #fff;
  }
`;

function CardItem({ product }) {
  return (
    <Container>
      <CardImage src={product.image}></CardImage>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardSubtitle>{product.description}</CardSubtitle>
        <h2>{product.price}</h2>
        <CartButton>Buy</CartButton>
      </CardContent>
    </Container>
  );
}

const MAXIMUM_ITEM_PER_PAGE = 10;

function WishedList() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = JSON.parse(localStorage.getItem("favorite"));
  return (
    <div>
      <Layout>
        <SearchBar></SearchBar>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "20px 30px 5px 30px",
          }}
        >
          <Pagination
            itemsPerPage={MAXIMUM_ITEM_PER_PAGE}
            datasetSize={products.length}
            currentPage={currentPage}
            onChange={(e) => setCurrentPage(e)}
          ></Pagination>
        </div>

        <Grid>
          {products.map((product) => (
            <CardItem key={product.id} product={product}></CardItem>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}

export default WishedList;
