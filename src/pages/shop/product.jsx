import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { axiosApi } from "../../api/api";

const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const addCart = (id) => {
    axiosApi
      .post("cart", {
        productId: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="product">
      <img src={image} alt="productImage" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
