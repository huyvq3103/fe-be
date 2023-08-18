import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";
import { axiosApi } from "../../api/api";
const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axiosApi
      .get("products")
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        setProduct(error);
      });
  }, []);
  console.log(product);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Huy vu Shop</h1>
      </div>
      <div className="products">
        {product &&
          product.map((product) => {
            return <Product data={product} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
