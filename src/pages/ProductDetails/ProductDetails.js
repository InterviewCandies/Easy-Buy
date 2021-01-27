import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { SECONDARY_COLOR } from "../../common";
import StarICon from "../../asset/img/star.svg";
import EmptyStarIcon from "../../asset/img/empty-star.svg";
const relatedProduct = [
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
    id: 3,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
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
];
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 30px;
  padding-top: 0px;
  margin-bottom: 20px;
`;
const MainCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 30px 70px;
  position: relative;
  padding: 10px;
  @media (max-width: 1200px) {
    margin: 30px 30px;
  }
  @media (max-width: 660px) {
    grid-template-columns: none;
  }
`;
const CardImage = styled.img`
  object-fit: contain;
  max-width: 400px;
  @media (max-width: 1200px) {
    width: 300px;
  }
`;
const CardContent = styled.div`
  text-align: left;
  max-width: 600px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardCategory = styled.h4`
  text-transform: uppercase;
  color: #6e798c;
  margin-bottom: 0;
  font-family: "Open Sans", sans-serif;
`;
const CardTitle = styled.h3`
  font-size: 24px;
  text-align: left;
  line-height: 16px;
  margin-top: 0;
`;
const CardPrice = styled.h2`
  font-size: 36px;
`;
const CardSubtitle = styled.p`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600px;
  color: #6e798c;
`;
const CardActions = styled.div`
  display: flex;
  grid-gap: 10px;
  bottom: 10px;
  width: 100%;
`;
const SizeButton = styled.button`
  border: solid 1px #d7d8d9;
  color: #007ae9;
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
  outline: none;
  margin-right: 7px;
  text-transform: uppercase;
  &:hover {
    background-color: #007ae9;
    color: #fff;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;
const MAXIMUM_RATING = 5;
const displayStar = (stars) => {
  let arr = [];
  for (let i = 0; i < Number(stars); i++)
    arr.push(<Icon key={i} src={StarICon}></Icon>);
  for (let i = stars; i < MAXIMUM_RATING; i++)
    arr.push(<Icon key={i} src={EmptyStarIcon}></Icon>);
  return arr;
};
const displaySize = (sizes) => {
  return sizes.map((size) => <SizeButton key={size}>{size}</SizeButton>);
};
function ProductDetails() {
  const product = {
    id: 1,
    category: "clothings",
    star: 3,
    image:
      "https://freepngimg.com/thumb/dress%20shirt/38-white-dress-shirt-png-image.png",
    title: "White T-shirt",
    description:
      "A shirt, button shirt, button-front, button-front shirt, or button-up shirt could be a garment with a collar and a full-length gap at the front that is fixed mistreatment buttons or shirt studs",
    price: "$34",
    sizes: ["L", "M", "S", "XL", "XXL"],
  };

  return (
    <Layout>
      <MainCard>
        <CardImage src={product.image}></CardImage>
        <CardContent>
          <CardCategory>{product.category}</CardCategory>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <CardTitle>{product.title}</CardTitle>
              {displayStar(product.star)}
            </div>
            <CardPrice>{product.price}</CardPrice>
          </div>
          <div style={{ display: "flex" }}>{displaySize(product.sizes)}</div>
          <CardSubtitle>{product.description}</CardSubtitle>
          <CardActions>
            <Button>Add to my cart</Button>
            <Button color={SECONDARY_COLOR}>Add to my wishlist</Button>
          </CardActions>
        </CardContent>
      </MainCard>
      <h3 style={{ marginLeft: "30px", textAlign: "left" }}>
        Similar products
      </h3>
      <Grid>
        {relatedProduct.map((product) => (
          <Card product={product} key={product.id}></Card>
        ))}
      </Grid>
    </Layout>
  );
}

export default ProductDetails;
