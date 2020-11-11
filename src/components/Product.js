import React from "react";

const Product = ({ itemId, category, name, price, description, addToCart }) => {
  function iconLocator(id) {
    return process.env.PUBLIC_URL + "/icons/icon-" + id + ".svg";
  }

  function addItemsToCart() {
    let qty = document.getElementById(`qty-${itemId}`).value;
    for (let i = 0; i < qty; i++) {
      addToCart({
        itemId: itemId,
        name: name,
        price: price,
      });
    }
  }

  if (!category) return <div />;
  return (
    <div className="card product">
      <div className="card-image">
        <figure className="image is-128x128 product-image">
          <img src={iconLocator(itemId)} alt={name} />
        </figure>
      </div>
      <div className="media-content product-media">
        <p className="title is-4 product-title">{name}</p>
        <p className="subtitle is-6">${price}</p>
        <p className="product-description">{description}</p>
      </div>
      <footer className="card-footer">
        <span className="card-footer-item select-quantity">
          <select className="select-quantity-box" name="Qty" id={`qty-${itemId}`}>
            {[...Array(5).keys()].map((x, i) => (
              <option value={x + 1} key={i}>
                {x + 1}
              </option>
            ))}
          </select>
        </span>
        <span className="card-footer-item add-to-cart" onClick={addItemsToCart}>
          Add to Cart
        </span>
      </footer>
    </div>
  );
};

export default Product;
