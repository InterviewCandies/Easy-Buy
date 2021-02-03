import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
/*
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
*/
const Grid = styled.div`
  display: grid;
  padding: 0px 40px;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;
const CardItem = styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: 400px;
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
  width: 100%;
  margin: 0px 20px;
  background-color: #fff;
  border-radius: 16px;
  margin: 0px 20px;
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

          <Recipe>
            <h1>$234</h1>
          </Recipe>
        </Grid>
      </div>
    </Layout>
  );
}

export default Cart;
