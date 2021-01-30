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
  z-index: -1;
`;
const products = [
  {
    id: 1,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description:
      "A shirt, button shirt, button-front, button-front shirt, or button-up shirt could be a garment with a collar and a full-length gap at the front that is fixed mistreatment buttons or shirt studs",
    price: "$34",
  },
  {
    id: 2,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/3-dress-shirt-png-image.png",
    title: "White T-shirt",
    description:
      "A shirt, button shirt, button-front, button-front shirt, or button-up shirt could be a garment with a collar and a full-length gap at the front that is fixed mistreatment buttons or shirt studs",
    price: "$34",
  },
  {
    id: 3,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description:
      "A shirt, button shirt, button-front, button-front shirt, or button-up shirt could be a garment with a collar and a full-length gap at the front that is fixed mistreatment buttons or shirt studs",
    price: "$34",
  },
  {
    id: 4,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description:
      "A shirt, button shirt, button-front, button-front shirt, or button-up shirt could be a garment with a collar and a full-length gap at the front that is fixed mistreatment buttons or shirt studs",
    price: "$34",
  },
  {
    id: 5,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 6,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 7,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 8,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 9,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 10,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
];

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
    color: #000;
  }
`;

function CardItem({ product }) {
  return (
    <Container>
      <CardImage src={product.image}></CardImage>
      <CardContent>
        <CardTitle>{product.title}</CardTitle>
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
