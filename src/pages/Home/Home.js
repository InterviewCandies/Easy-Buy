import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import Pagination from "../../containers/Pagination/Pagination";
import SearchBar from "../../containers/SearchBar/SearchBar";
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
  {
    id: 11,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "Next page",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 12,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
  {
    id: 13,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description: "Supper light",
    price: "$34",
  },
];
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 5px 30px 50px 30px;
  position: relative;
  z-index: -1;
`;

const MAXIMUM_ITEM_PER_PAGE = 10;

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const filterProducts = products.slice(
    (currentPage - 1) * MAXIMUM_ITEM_PER_PAGE,
    Math.min(currentPage * MAXIMUM_ITEM_PER_PAGE, products.length)
  );
  return (
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
        {filterProducts.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </Grid>
    </Layout>
  );
}

export default Home;
