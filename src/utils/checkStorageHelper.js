import { CART, WISHLIST } from "../common";

export const isInWishList = (id) => {
  let products = JSON.parse(localStorage.getItem(WISHLIST) || "[]");
  return products.findIndex((product) => product.id == id) >= 0;
};

export const isInCart = (id) => {
  let products = JSON.parse(localStorage.getItem(CART) || "[]");
  return products.findIndex((product) => product.id == id) >= 0;
};

export const addToWishlist = (target) => {
  let products = JSON.parse(localStorage.getItem(WISHLIST) || "[]");
  if (products.findIndex((product) => product.id == target.id) >= 0) {
    products = products.filter((product) => product.id != target.id);
  } else products.push(target);
  localStorage.setItem(WISHLIST, JSON.stringify(products));
};

export const addToCart = (target) => {
  let products = JSON.parse(localStorage.getItem(CART) || "[]");
  if (!isInCart(target.id)) products.push(target);
  localStorage.setItem(CART, JSON.stringify(products));
};
