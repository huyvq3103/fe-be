import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/api";
const Cart = ({ product }) => {
  const [cartItem, setCartItem] = useState([]);
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmout();

  const navigate = useNavigate();
  useEffect(() => {
    axiosApi
      .get("cart")
      .then((response) => {
        setCartItem(response.data.data);
        // console.log("response", response);
      })
      .catch((error) => {
        setCartItem([]);
      });
  }, []);
  console.log("cartItem", cartItem);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {cartItem.map((product) => {
          return <CartItem data={product} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal :${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
