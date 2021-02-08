import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Pagination from "../../containers/Pagination/Pagination";
import Button from "../../components/Button/Button";
import SearchBar from "../../containers/SearchBar/SearchBar";
import HeartIcon from "../../asset/img/heart.svg";
import Wishlist from "../../asset/img/wishlist.svg";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  addToCart,
  addToWishlist,
  isInCart,
} from "../../utils/checkStorageHelper";
import Fallback from "../../asset/img/fallback.png";
import { DEFAULT_COLOR, WISHLIST } from "../../common";
import { Tooltip } from "@material-ui/core";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-bottom: 30px;
  position: relative;
`;

const Container = styled.div`
  display: grid;
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  grid-template-columns: 200px 1fr;
  margin: 10px 30px;
  padding: 10px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
const CardImage = styled.img`
  width: 200px;
  object-fit: contain;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: lowercase;
  margin: 0;
  &:first-letter {
    text-transform: capitalize;
  }
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

const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const CardBrand = styled.h4`
  text-transform: uppercase;
  color: #6e798c;
  font-size: 0.9rem;
  margin-bottom: 5px;
  font-family: "Open Sans", sans-serif;
`;

function CardItem({ product, update }) {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [, forcUpdate] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Container onClick={() => history.push("/product/" + product.id)}>
      <Tooltip title="Remove from your wishlist" placement="right" arrow>
        <Icon
          src={HeartIcon}
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(product);
            update();
          }}
        ></Icon>
      </Tooltip>
      <CardImage
        src={product.image}
        onLoad={() => setIsLoaded(true)}
        style={!isLoaded ? { display: "none" } : null}
      ></CardImage>
      {!isLoaded && <CardImage src={Fallback}></CardImage>}
      <CardContent>
        <CardBrand>{product.company}</CardBrand>
        <CardTitle>{product.name}</CardTitle>
        <CardSubtitle>{product.description}</CardSubtitle>
        <h2 style={{ margin: "10px 0" }}>{product.price}</h2>
        <Tooltip
          title={isInCart(product.id) ? "" : "Add to your cart"}
          placement="right"
          arrow
        >
          <CartButton
            disabled={isInCart(product.id)}
            style={
              isInCart(product.id) ? { backgroundColor: DEFAULT_COLOR } : null
            }
            onClick={(e) => {
              e.stopPropagation();
              forcUpdate((it) => !it);
              addToCart(product);
              enqueueSnackbar("Added to your cart", { variant: "success" });
            }}
          >
            Buy
          </CartButton>
        </Tooltip>
      </CardContent>
    </Container>
  );
}

const MAXIMUM_ITEM_PER_PAGE = 10;

function WishedList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryKey, setQueryKey] = useState("");
  const history = useHistory();
  const [, forceUpdate] = useState(false);
  const products = JSON.parse(localStorage.getItem(WISHLIST));

  const filteredProducts = products?.filter((product) =>
    product.name.toLocaleLowerCase().includes(queryKey.toLocaleLowerCase())
  );
  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * MAXIMUM_ITEM_PER_PAGE,
    Math.min(currentPage * MAXIMUM_ITEM_PER_PAGE, filteredProducts?.length)
  );

  return (
    <div>
      <Layout>
        {filteredProducts && filteredProducts.length ? (
          <>
            <SearchBar
              value={queryKey}
              onChange={(text) => setQueryKey(text)}
            ></SearchBar>
            {filteredProducts?.length ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "20px 30px 5px 30px",
                }}
              >
                <Pagination
                  itemsPerPage={MAXIMUM_ITEM_PER_PAGE}
                  datasetSize={filteredProducts.length}
                  currentPage={currentPage}
                  onChange={(e) => setCurrentPage(e)}
                ></Pagination>
              </div>
            ) : null}
            <Grid>
              {currentProducts?.map((product) => (
                <CardItem
                  key={product.id}
                  product={product}
                  update={() => forceUpdate((it) => !it)}
                ></CardItem>
              ))}
            </Grid>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Wishlist}
              style={{
                maxWidth: "200px",
                objectFit: "contain",
                margin: "20px 0",
              }}
            ></img>
            <CardTitle
              style={{
                textTransform: "uppercase",
                fontSize: "1.5rem",
                lineHeight: "1.5",
              }}
            >
              Your wishlist is currently empty
            </CardTitle>
            <CardSubtitle style={{ fontSize: "0.8rem" }}>
              Begin to add your favorite items into wishlist and buy them later
            </CardSubtitle>
            <Button width="250px" handleClick={() => history.push("/all")}>
              Continue shopping
            </Button>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default WishedList;
