import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const CartItem = (props) => {
  const { id, name, price, image } = props.data.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  console.log("data", props.data);
  return (
    <div className="cartItem">
      <img src={image} alt="ImageCartItem" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={props.data.quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
