import React from "react";

import Product from "./Product";

import { productData } from "../productdata.js";

const Products = ({ category, addToCart }) => {
  return (
    <div className="products">
      {productData.map((data, key) => {
        if (data.category === category || category === "all") {
          return (
            <div key={key}>
              <Product
                itemId={data.itemId}
                category={data.category}
                name={data.name}
                price={data.price}
                description={data.description}
                addToCart={addToCart}
              />
            </div>
          );
        } else {
          return null; 
        };
      })}
    </div>
  );
}

export default Products;