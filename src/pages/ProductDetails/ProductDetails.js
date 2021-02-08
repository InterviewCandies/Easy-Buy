import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { DATASET_URL, SECONDARY_COLOR } from "../../common";
import StarICon from "../../asset/img/star.svg";
import Fallback from "../../asset/img/fallback.png";
import EmptyStarIcon from "../../asset/img/empty-star.svg";
import {
  addToCart,
  addToWishlist,
  isInCart,
  isInWishList,
} from "../../utils/checkStorageHelper";
import { useSnackbar } from "notistack";
import { Redirect, useHistory } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  padding: 20px;
  padding-top: 0px;
  margin-bottom: 30px;
`;
const MainCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 30px 70px;
  position: relative;
  padding: 20px;
  @media (max-width: 1200px) {
    margin: 30px 30px;
  }
  @media (max-width: 660px) {
    grid-template-columns: none;
  }
`;
const CardImage = styled.img`
  object-fit: contain;
  max-width: 300px;
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
  font-size: 0.9rem;
  margin-bottom: 5px;
  font-family: "Open Sans", sans-serif;
`;
const CardTitle = styled.h3`
  font-size: 24px;
  text-align: left;
  line-height: 16px;
  margin-top: 0;
  text-transform: lowercase;
  &:first-letter {
    text-transform: capitalize;
  }
`;
const CardPrice = styled.h2`
  font-size: 1.6rem;
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
  const [products, setProducts] = useState(null);
  const [, forceUpdate] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoaded, setIsLoaded] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch(DATASET_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const url = window.location.hash;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const product = products?.find((product) => product.id == id);

  if (products && !product) {
    history.push("/404");
    return null;
  }

  const filteredProducts = products?.filter(
    (p) => p.category === product?.category && p.id != product?.id
  );
  const shuffled = filteredProducts?.sort(() => 0.5 - Math.random());
  const relatedProducts = shuffled?.slice(0, 5);

  return (
    <>
      <Layout>
        {products ? (
          <>
            <MainCard>
              <CardImage
                src={product.image}
                onLoad={() => setIsLoaded(true)}
                style={!isLoaded ? { display: "none" } : null}
              ></CardImage>
              {!isLoaded && <CardImage src={Fallback}></CardImage>}
              <CardContent>
                <CardCategory>{product.company}</CardCategory>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <CardTitle>{product.name}</CardTitle>
                    {displayStar(product?.stars)}
                  </div>
                  <CardPrice>{product.price}</CardPrice>
                </div>

                {product.sizes && (
                  <div style={{ display: "flex" }}>
                    {displaySize(product?.sizes)}
                  </div>
                )}
                <CardSubtitle>{product.description}</CardSubtitle>
                <CardActions>
                  <Button
                    disabled={isInCart(product.id)}
                    handleClick={() => {
                      addToCart(product);
                      forceUpdate((it) => !it);
                      enqueueSnackbar("Added to your cart", {
                        variant: "success",
                      });
                    }}
                  >
                    Add to my cart
                  </Button>
                  <Button
                    disabled={isInWishList(product.id)}
                    color={SECONDARY_COLOR}
                    handleClick={() => {
                      addToWishlist(product);
                      forceUpdate((it) => !it);
                      enqueueSnackbar("Added to your wishlist", {
                        variant: "success",
                      });
                    }}
                  >
                    Add to my wishlist
                  </Button>
                </CardActions>
              </CardContent>
            </MainCard>

            <h3 style={{ marginLeft: "30px", textAlign: "left" }}>
              Similar products
            </h3>
            <Grid>
              {relatedProducts.map((product) => (
                <Card product={product} key={product.id}></Card>
              ))}
            </Grid>
          </>
        ) : (
          <Loader></Loader>
        )}
      </Layout>
      )
    </>
  );
}

export default ProductDetails;
