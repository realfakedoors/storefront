import React from "react";

const ShoppingCart = ({ contents, iconLocator }) => {
  function toggleVisibility() {
    let dropdown = document.getElementById("shopping-cart");
    dropdown.classList.toggle("is-active");
  }

  return (
    <div className="dropdown is-right shopping-cart" id="shopping-cart">
      <div className="dropdown-trigger" onClick={toggleVisibility}>
        Cart({contents.length})
      </div>
      <div className="dropdown-menu">
        {contents.map((item) => {
          return (
            <div className="dropdown-item shopping-cart-item">
              <article className="media">
                <figure className="media-left">
                  <p class="image is-48x48 shopping-cart-item-image">
                    <img src={iconLocator(item.icon)} alt={item.name} />
                  </p>
                </figure>
                <div className="media-content shopping-cart-content">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
