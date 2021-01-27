import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
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
];
const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 30px;
`;
function Home() {
  return (
    <Layout>
      <SearchBar></SearchBar>
      <Grid>
        {products.map((product) => (
          <Card product={product}></Card>
        ))}
      </Grid>
    </Layout>
  );
}

export default Home;
