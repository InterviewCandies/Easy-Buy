export const isInWishList = (id) => {
  let products = JSON.parse(localStorage.getItem("favorite") || "[]");
  return products.findIndex((product) => product.id == id) >= 0;
};

export const isInCart = (id) => {
  let products = JSON.parse(localStorage.getItem("cart") || "[]");
  return products.findIndex((product) => product.id == id) >= 0;
};

export const addToWishlist = (target) => {
  let products = JSON.parse(localStorage.getItem("favorite") || "[]");
  if (products.findIndex((product) => product.id == target.id) >= 0) {
    products = products.filter((product) => product.id != target.id);
  } else products.push(target);
  localStorage.setItem("favorite", JSON.stringify(products));
};

export const addToCart = (target) => {
  let products = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!isInCart(target.id)) products.push(target);
  localStorage.setItem("cart", JSON.stringify(products));
};
