import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Carousel from "react-elastic-carousel";
import Logo from "../../components/Logo/Logo";
import Fallback from "../../asset/img/fallback.png";
import EmptyCart from "../../asset/img/empty-cart.svg";
import {
  AUTHEN_TOKEN,
  CART,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../../common";
import {
  Dialog,
  Tooltip,
  DialogContent,
  Slide,
  DialogActions,
  DialogTitle,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 0px 40px;
  position: relative;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 10px;
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
  outline: none;
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
  text-transform: lowercase;
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
  margin: 0;
`;
const CardContent = styled.div`
  text-align: left;
  padding: 8px 15px;
`;
const Recipe = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  height: min-content;
  background-color: #fff;
  border-radius: 16px;
  margin: 20px 10px;
`;
const Container = styled.div`
  position: relative;
  margin-top: 3rem;
  @media (max-width: 750px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 10px;
  background-color: ${(props) => props.color || "#0F56B3"};
  width: ${(props) => props.width || "100%"};
  max-width: 200px;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    background-color: #cecece;
  }
`;

const DialogButton = styled.button`
  padding: 10px 10px;
  text-transform: uppercase;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: ${(props) => props.color || "#000"};
  &:hover {
    background-color: ${(props) => props.color || "#cecece"};
    color: #fff;
  }
`;
function Cart() {
  let products = JSON.parse(localStorage.getItem(CART) || "[]");
  const [, forceUpdate] = useState(false);
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleRemoveProduct = (id) => {
    products = products.filter((product) => product.id !== id);
    forceUpdate((it) => !it);
    localStorage.setItem(CART, JSON.stringify(products));
  };

  const handleOrder = () => {
    localStorage.removeItem(CART);
    enqueueSnackbar("Order has been processed. Thank you!", {
      variant: "info",
    });
    forceUpdate((it) => !it);
    setOpen(false);
  };

  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += Number(
      product.price.substring(1, product.price.length).split(",").join("")
    );
  });

  return (
    <Layout>
      {products.length ? (
        <Container>
          <Grid>
            <Recipe>
              <p style={{ marginBottom: "10px" }}>Online Shopping Website</p>
              <Logo size="1.5rem"></Logo>
              <CardSubtitle style={{ marginTop: "10px", height: "auto" }}>
                {"Date: " + new Date().toDateString()}
              </CardSubtitle>
              <CardSubtitle style={{ marginTop: "5px", height: "auto" }}>
                Bill to {localStorage.getItem(AUTHEN_TOKEN)}
              </CardSubtitle>
              <CardTitle style={{ marginTop: "10px" }}>
                Total: ${totalPrice.toFixed(2)}
              </CardTitle>
              <Button onClick={() => setOpen(true)}>Order</Button>
            </Recipe>
            <Carousel>
              {products.map((product) => (
                <CardItem key={product.id}>
                  <CardImage
                    src={product.image}
                    onLoad={() => setIsLoaded(true)}
                    style={!isLoaded ? { display: "none" } : null}
                  ></CardImage>
                  {!isLoaded && <CardImage src={Fallback}></CardImage>}
                  <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.description}</CardSubtitle>
                    <h2>{product.price}</h2>
                    <Tooltip
                      arrow
                      title="Remove this item from my cart"
                      placement="right"
                    >
                      <Button
                        color={SECONDARY_COLOR}
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </Button>
                    </Tooltip>
                  </CardContent>
                </CardItem>
              ))}
            </Carousel>
          </Grid>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={Transition}
            keepMounted
          >
            <DialogTitle style={{ textAlign: "center" }}>
              <Logo size="1.5rem"></Logo>
            </DialogTitle>
            <DialogContent>
              <Typography variant="caption" style={{ fontSize: "1rem" }}>
                Thank you for choosing us! Please click "OK" to confirm the
                order.
              </Typography>
            </DialogContent>
            <DialogActions>
              <DialogButton color={PRIMARY_COLOR} onClick={handleOrder}>
                OK
              </DialogButton>
              <DialogButton onClick={() => setOpen(false)}>Cancel</DialogButton>
            </DialogActions>
          </Dialog>
        </Container>
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
            src={EmptyCart}
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
            Your cart is currently empty
          </CardTitle>
          <CardSubtitle style={{ fontSize: "0.8rem" }}>
            Look like you dont have any item in your shopping cart
          </CardSubtitle>
          <Button width="250px" onClick={() => history.push("/all")}>
            Continue shopping
          </Button>
        </div>
      )}
    </Layout>
  );
}

export default Cart;
