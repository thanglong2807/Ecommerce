import React from "react";
import Banner from "./Banner";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <div className="container flex mt-4 gap-3">
      <Banner />
      <ProductItem />
    </div>
  );
};

export default Product;
